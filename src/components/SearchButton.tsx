import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

type SearchButtonProps = React.ComponentPropsWithRef<'button'>

export function SearchButton({ className, ...rest }: SearchButtonProps) {
  return (
    <button {...rest} type="submit" className={clsx('-ml-3 z-10', className)}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}
