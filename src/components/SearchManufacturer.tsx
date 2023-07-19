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

  const filteredManufacturers =
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
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="Car Logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder="Volkswagen"
            className="w-full h-[48px] pl-12 p-4 rounded-l-full
            max-sm:rounded-full bg-light-white outline-none cursor-pointer
            text-sm"
          />

          {/* Transition for displaying the options */}
          <Transition
            as={React.Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')} // Reset the search query after the transition completes
          >
            <Combobox.Options
              // className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md
              // bg-white py-1 text-base shadow-lg ring-1 ring-black
              // ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredManufacturers.map((item) => (
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

                      {/* Show an active blue background color if the option is selected */}
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
