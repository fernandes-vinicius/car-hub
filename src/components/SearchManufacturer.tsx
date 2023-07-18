'use client'

import React from 'react'
import Image from 'next/image'
import { Combobox, Transition } from '@headlessui/react'

interface SearchManufacturerProps {
  manuFacturer: string
  setManuFacturer: (manufacturer: string) => void
}

export function SearchManufacturer(props: SearchManufacturerProps) {
  const { manuFacturer, setManuFacturer } = props

  const [query, setQuery] = React.useState('')

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="Car Logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(manufacturer: string) => manufacturer}
            placeholder="Volkswagen"
            className="w-full h-[48px] pl-12 p-4 rounded-l-full
            max-sm:rounded-full bg-light-white outline-none cursor-pointer
            text-sm"
          />
        </div>
      </Combobox>
    </div>
  )
}
