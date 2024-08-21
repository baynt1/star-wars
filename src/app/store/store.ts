import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { GraphQLClient } from 'graphql-request'
import { ICardsResponse, IPersonResponse, IStoreCards, IStorePerson } from '@/app/store/interface'

const api = 'https://swapi-graphql.netlify.app/.netlify/functions/index'
const query = `
  query AllPeople {
    allPeople {
      people {
        id
        name
        gender
        homeworld {
          id
          name
        }
      }
    }
  }
`
const person = `
    query Person($personId: ID) {
      person(id: $personId) {
        id
        name
        height
        gender
        birthYear
        mass
        filmConnection {
          films {
            id
            title
          }
        }
      }
    }
`

export const useCards = create<IStoreCards>(
  devtools(
    persist(
      (set, get) => ({
        cards: [],
        favorites: [],
        addToFavorite: (fav: string) => {
          set((state) => ({
            ...state,
            favorites: state.favorites.includes(fav)
              ? state.favorites.filter((item) => item !== fav)
              : [...state.favorites, fav],
          }))
        },
        fetchCards: async () => {
          try {
            const data: ICardsResponse = await new GraphQLClient(api).request(query)
            set((state) => ({
              ...state,
              cards: data.allPeople.people,
            }))
            return data.allPeople.people
          } catch (error) {
            console.error('Error fetching cards:', error)
          }
        },
      }),
      { name: 'store-state' },
    ),
  ),
)

export const usePerson = create<IStorePerson>(
  devtools((set, get) => ({
    fetchUser: async (user: string) => {
      try {
        const data: IPersonResponse = await new GraphQLClient(api).request(person, {
          personId: user,
        })
        return data.person
      } catch (error) {
        console.error('Error fetching cards:', error)
      }
    },
  })),
)
