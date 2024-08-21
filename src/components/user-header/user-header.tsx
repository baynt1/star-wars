'use client'

import { FC } from 'react'
import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'
import { useCards } from '@/app/store/store'
import { Star } from '@/components/cards/ui/star'

export const UserHeader: FC<{ id: string; star: boolean }> = ({ id, star = true }) => {
  const router = useRouter()
  const { addToFavorite, favorites } = useCards()

  return (
    <>
      <div className={'flex gap-2 w-fit items-center cursor-pointer'}>
        <Button onClick={() => router.push('/')}>Назад</Button>
        {star && (
          <div onClick={() => addToFavorite(id)}>
            <Star active={favorites.includes(id)} />
          </div>
        )}
      </div>
    </>
  )
}
