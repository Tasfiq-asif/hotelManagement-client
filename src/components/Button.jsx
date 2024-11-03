import React from 'react'

const Button = ( {type = "button", onClick, children, className = "" }) => {
   
  return (
    <button 
    type={type} 
    onClick={onClick} 
    className={`btn bg-primary text-background hover:bg-secondary px-8 rounded-2xl transition duration-200 ${className}`}
>
    {children}
</button>
  )
}

export default Button