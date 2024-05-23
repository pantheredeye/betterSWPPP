import React, { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: FC<ButtonProps> = ({ children, type = 'button', className = '', ...props }) => {
  return (
    <button
      type={type}
      className={`bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
