import { FC } from 'react'

interface ISearchProps {}

export const Search: FC<ISearchProps> = () => {
  return (
    <div className='border-solid border-2 text-blue-500 border-blue-500 rounded-lg overflow-hidden flex'>
      <input type='text' className='px-4 py-2' placeholder='Поиск...' />
    </div>
  )
}
