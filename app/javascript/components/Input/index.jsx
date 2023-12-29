import React from 'react'
import { Label } from '../'

const Input = ({
  type = "text",
  name,
  className = "",
  required = false,
  label
}) => (
  <div>
    <Label
      render={label}
      text={label}
      required={required}
    />
  
    <input
      class={`w-full border-2 border-gray-900 h-10 leading-none px-2 ${className}`}
      type={type}
      name={name}
      required={required}
    />
  </div>
)

export default Input
