import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  rightIcon?: string
}

export function Button(props: ButtonProps) {
  const { rightIcon, className, children, ...rest } = props

  const _className = clsx(
    'flex flex-row relative justify-center items-center py-3 px-6 outline-none',
    'bg-primary-blue text-white rounded-full',
    className,
  )

  return (
    <button {...rest} disabled={false} type="button" className={_className}>
      <span className="flex-1">{children}</span>

      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="" fill className="object-contain" />
        </div>
      )}
    </button>
  )
}
