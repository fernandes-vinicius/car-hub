'use client'

import React from 'react'
import Image from 'next/image'

import { SearchManufacturer } from './SearchManufacturer'
import { SearchButton } from './SearchButton'
import { useRouter } from 'next/navigation'

export function SearchBar() {
  const router = useRouter()

  const [manufacturer, setManufacturer] = React.useState('')
  const [model, setModel] = React.useState('')

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar')
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  }

  function updateSearchParams(model: string, manufacturer: string) {
    const searchParams = new URLSearchParams(window.location.search)

    if (model) searchParams.set('model', model)
    else searchParams.delete('model')

    if (manufacturer) searchParams.set('manufacturer', manufacturer)
    else searchParams.delete('manufacturer')

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }

  return (
    <form
      onSubmit={handleSearch}
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
        <SearchButton className="sm:hidden" />
      </div>

      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full
          max-sm:rounded-full outline-none cursor-pointer text-sm"
        />
        <SearchButton className="sm:hidden" />
      </div>
    </form>
  )
}
