'use client'

import { FC } from 'react'
import { Planet } from '@/components/cards/ui/planet'
import { Gender } from '@/components/cards/ui/gender'
import { useCards } from '@/app/store/store'
import { Star } from '@/components/cards/ui/star'
import { useRouter } from 'next/navigation'

interface ICardsProps {
  title: string
  home: string
  gender: string
  id: string
  isFavorite: boolean
}

export const Cards: FC<ICardsProps> = ({ title, home, gender, id, isFavorite }) => {
  const { addToFavorite, favorites } = useCards()
  const router = useRouter()

  return (
    <div
      className={`rounded-lg p-4 bg-blue-500 flex flex-col cursor-pointer ${isFavorite && !favorites.includes(id) && 'hidden'}`}
      onClick={() => router.push(`/person/${id}`)}
    >
      <div className={'flex gap-1 items-center justify-between'}>
        <h5
          className='text-white text-2xl font-bold leading-8 overflow-hidden text-ellipsis text-nowrap max-w-80'
          title={title}
        >
          {title}
        </h5>
        <div
          onClick={(event) => {
            event.stopPropagation()
            addToFavorite(id)
          }}
        >
          <Star active={favorites.includes(id)} />
        </div>
      </div>

      <div className='flex flex-row gap-3 mt-2'>
        <div className='text-lg text-white font-light flex gap-1 items-center text-nowrap'>
          <Planet />
          <div className={'overflow-hidden text-ellipsis max-w-16'} title={home}>
            {home}
          </div>
        </div>

        <div className='text-lg text-white font-light flex gap-1 items-center text-nowrap'>
          <Gender />
          <div className={'overflow-hidden text-ellipsis max-w-16'} title={gender}>
            {gender}
          </div>
        </div>
      </div>
    </div>
  )
}
