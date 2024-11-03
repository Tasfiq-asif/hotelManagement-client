import React from 'react'

const Button = ({children,onClick,variant='primary'}) => {
    const baseStyle ="px-4 py-2 rounded font-semibold text-sm transition-all duration-200"
    const variants ={
        primary: "bg-primary text-background hover:bg-secondary",
        secondary: "bg-secondary text-background hover:bg-primary",
        outline:"border border-primary text-primary hover:bg-background"
    }
  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
    {children}
  </button>
  )
}

export default Button