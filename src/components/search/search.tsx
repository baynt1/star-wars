'use client'
import { FC, InputHTMLAttributes, useEffect } from 'react'
import { useCards } from '@/app/store/store'
import { useRouter } from 'next/navigation'

interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Search: FC<ISearchProps> = ({ ...rest }) => {
  const router = useRouter()

  const handleSearch = (str: string) => {
    const params = new URLSearchParams(window.location.search)

    if (str) {
      params.set('search', str)
    } else {
      params.delete('search')
    }

    router.push(`?${params.toString()}`)
  }

  return (
    <div className='border-solid border-2 text-blue-500 border-blue-500 rounded-lg overflow-hidden flex'>
      <input
        type='text'
        className='px-4 py-2'
        placeholder='Поиск...'
        {...rest}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  )
}
