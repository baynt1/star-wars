import { usePerson } from '@/app/store/store'
import { Header } from '@/components/header'

export default async function Person({ params }) {
  const { fetchUser } = usePerson.getState()
  const data = await fetchUser(params.id)

  return (
    <>
      <Header />

      <div className={'mt-4 flex flex-col gap-2 text-2xl'}>
        <div>
          <span className={'text-blue-500'}>Имя: </span>
          {data?.name}
        </div>
        <div>
          <span className={'text-blue-500'}>Дата рождения: </span>
          {data?.birthYear}
        </div>
        <div>
          <span className={'text-blue-500'}>Пол: </span>
          {data?.gender}
        </div>
        <div>
          <span className={'text-blue-500'}>Вес: </span>
          {data?.mass}
        </div>
        <div>
          <span className={'text-blue-500'}>Рост: </span>
          {data?.height}
        </div>
        <div>
          <span className={'text-blue-500'}>Фильмы: </span>
          {data?.filmConnection?.films.map((item) => item.title).join(', ')}
        </div>
      </div>
    </>
  )
}
