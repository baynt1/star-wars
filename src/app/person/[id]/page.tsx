import { usePerson } from '@/app/store/store'
import { UserHeader } from '@/components/user-header'

export default async function Person({ params }: { params: { id: string } }) {
  const { fetchUser } = usePerson.getState()
  const data = await fetchUser(params.id)
  console.log(params)
  if (data) {
    return (
      <>
        <UserHeader id={params.id} />

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
  } else {
    return (
      <>
        <UserHeader id={params.id} star={false} />
        <div className={'flex justify-center items-center h-full text-6xl'}>Данные не найднены</div>
      </>
    )
  }
}
