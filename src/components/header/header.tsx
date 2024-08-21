'use client'

import { FC } from 'react'
import { Button } from '@/components/button'
import { Search } from '@/components/search'
import { useRouter } from 'next/navigation'

export const Header: FC = () => {
  const router = useRouter()

  return (
    <div className={'flex justify-between items-center'}>
      <div className={'flex gap-2 w-fit'}>
        <Button onClick={() => router.push('/')}>Все</Button>
        <Button onClick={() => router.push(`?favorite=true`)}>Избранные</Button>
      </div>

      <Search />
    </div>
  )
}
