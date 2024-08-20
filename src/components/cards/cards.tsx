import { FC } from 'react'
import { Planet } from '@/components/cards/ui/planet'
import { Gender } from '@/components/cards/ui/gender'

interface ICardsProps {
  title: string
  home: string
  gender: string
}

export const Cards: FC<ICardsProps> = ({ title, home, gender }) => {
  return (
    <div className='rounded-lg p-4 bg-blue-500 flex flex-col hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer'>
      <div>
        <h5
          className='text-white text-2xl font-bold leading-none overflow-hidden text-ellipsis text-nowrap max-w-full'
          title={title}
        >
          {title}
        </h5>
      </div>

      <div className='flex flex-row gap-3 mt-1'>
        <div className='text-lg text-white font-light flex gap-1 items-center'>
          <Planet />
          <div className={'overflow-hidden text-ellipsis max-w-16'} title={home}>
            {home}
          </div>
        </div>

        <div className='text-lg text-white font-light flex gap-1 items-center'>
          <Gender />
          <div className={'overflow-hidden text-ellipsis max-w-16'} title={gender}>
            {gender}
          </div>
        </div>
      </div>
    </div>
  )
}
