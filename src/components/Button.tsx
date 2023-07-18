import React from 'react'
import clsx from 'clsx'

type ButtonProps = React.ComponentPropsWithRef<'button'>

export function Button({ className, children, ...rest }: ButtonProps) {
  const _className = clsx(
    'flex flex-row relative justify-center items-center py-3 px-6 outline-none',
    'bg-primary-blue text-white rounded-full',
    className,
  )

  return (
    <button {...rest} disabled={false} type="button" className={_className}>
      <span className="flex-1">{children}</span>
    </button>
  )
}
