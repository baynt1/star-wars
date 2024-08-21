export interface ICardsResponse {
  allPeople: {
    people: ICards[]
  }
}

export interface ICards {
  id: string
  name: string
  gender: string
  homeworld: {
    id: string
    name: string
  }
}

export interface IStoreCards {
  fetchCards: () => Promise<ICards[]>
  addToFavorite: (fav: string) => void
  favorites: string[]
}

export interface IPersonState {
  id: string
  name: string
  height: number
  gender: string
  birthYear: string
  mass: number
  filmConnection: {
    films: {
      id: string
      title: string
    }[]
  }
}

export interface IPersonResponse {
  person: IPersonState
}

export interface IStorePerson {
  fetchUser: (user: string) => Promise<IPersonState>
}
