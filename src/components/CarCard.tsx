'use client'

import React from 'react'
import Image from 'next/image'

import { CarProps } from '@/types'
import { calculateCarRent } from '@/lib/api'

import { Button } from './Button'
import { CardDetails } from './CardDetails'

interface CarCardProps {
  car: CarProps
}

export function CarCard({ car }: CarCardProps) {
  const { city_mpg: cityMpg, year, make, model, transmission, drive } = car

  const [isOpen, setIsOpen] = React.useState(false)

  const carRent = calculateCarRent(cityMpg, year)

  return (
    <div
      className="flex flex-col p-6 justify-center items-start text-black-100
    bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group"
    >
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        <>{carRent}</>
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div
          className="flex group-hover:invisible w-full justify-between
          text-grey"
        >
          {/* transmission */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>

          {/* tire */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          {/* gas */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-[14px]">{cityMpg} MPG</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <Button
            onClick={() => setIsOpen(true)}
            rightIcon="/right-arrow.svg"
            className="w-full !py-[16px] text-[14px] leading-[17px]
            font-bold"
          >
            View More
          </Button>
        </div>
      </div>

      <CardDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  )
}
