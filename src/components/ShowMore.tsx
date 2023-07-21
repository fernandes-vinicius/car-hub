'use client'

import { useRouter } from 'next/navigation'

import { updateSearchParams } from '@/lib/utils'

import { Button } from './Button'

interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
}

export function ShowMore({ isNext, pageNumber }: ShowMoreProps) {
  const router = useRouter()

  function handleNavigation() {
    const newLimit = (pageNumber + 1) * 10
    const newPathname = updateSearchParams('limit', String(newLimit))

    router.push(newPathname)
  }

  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {!isNext && <Button onClick={handleNavigation}>Show More</Button>}
    </div>
  )
}
