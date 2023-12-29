import React from 'react'

const Button = ({
  children,
  className="",
  text,
  type = "button"
}) => (
  <button
    class={`h-10 w-full duration-300 hover:bg-gray-700 bg-gray-900 text-gray-50 px-4 border border-gray-900 leading-none ${className}`}
    type={type}
  >
    {children || text}
  </button>
)

export default Button
