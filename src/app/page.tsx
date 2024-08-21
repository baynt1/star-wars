import { Cards } from '@/components/cards'
import { useCards } from '@/app/store/store'
import { Header } from '@/components/header'

export default async function Home({
  searchParams,
}: {
  searchParams: { favorite?: string; search?: string }
}) {
  const { fetchCards } = useCards.getState()

  const data = await fetchCards()

  return (
    <>
      <Header />

      <div className={'grid grid-cols-5 gap-4 mt-4 overflow-auto max-h-cards'}>
        {data
          .filter((item) =>
            searchParams.search
              ? item.name.toLowerCase().includes(searchParams.search.toLowerCase())
              : item,
          )
          .map((item) => (
            <Cards
              id={item.id}
              key={item.id}
              title={item.name}
              home={item.homeworld.name}
              gender={item.gender}
              isFavorite={Boolean(searchParams.favorite)}
            />
          ))}
      </div>
    </>
  )
}
