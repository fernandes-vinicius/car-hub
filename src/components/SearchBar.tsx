'use client'

import React from 'react'

import { SearchManufacturer } from './SearchManufacturer'

export function SearchBar() {
  const [manufacturer, setManufacturer] = React.useState('')

  return (
    <form
      className="flex items-center justify-start max-sm:flex-col w-full relative
      max-sm:gap-4 max-w-3xl"
    >
      <div
        className="flex-1 max-sm:w-full flex justify-start items-center
        relative"
      >
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
      </div>
    </form>
  )
}
