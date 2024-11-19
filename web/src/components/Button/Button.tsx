import React, { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
