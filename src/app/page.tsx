import { Button } from '@/components/button'
import { Search } from '@/components/search'

export default function Home() {
  return (
    <>
      <div className={'flex justify-between items-center'}>
        <div className={'flex gap-2 w-fit'}>
          <Button>Все</Button>
          <Button>Избранные</Button>
        </div>

        <Search />
      </div>

      <div className={'grid grid-cols-5 gap-4 mt-4'}></div>
    </>
  )
}
