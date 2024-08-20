import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button: FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      className='rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300'
      {...rest}
    >
      {children}
    </button>
  )
}
