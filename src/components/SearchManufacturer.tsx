'use client'

import React from 'react'
import Image from 'next/image'
import { Combobox, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { manufacturers } from '@/utils/constants'

interface SearchManufacturerProps {
  manufacturer: string
  setManuFacturer: (manufacturer: string) => void
}

export function SearchManufacturer(props: SearchManufacturerProps) {
  const { manufacturer, setManuFacturer } = props

  const [query, setQuery] = React.useState('')

  const filteredManufactures =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) => {
          return item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        })

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
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

          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filteredManufactures.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({ active }) =>
                    clsx(
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                      [active && 'bg-primary-blue text-white'],
                      [!active && 'text-gray-900'],
                    )
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={clsx('block truncate', [
                          selected ? 'font-medium' : 'font-normal',
                        ])}
                      >
                        {item}
                      </span>

                      {selected ? (
                        <span
                          className={clsx(
                            'absolute inset-y-0 left-0 flex items-center pl-3',
                            [active ? 'text-white' : 'text-teal-600'],
                          )}
                        ></span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
