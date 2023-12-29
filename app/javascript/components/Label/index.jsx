import React from "react";

const Label = ({
  className = "",
  render = true,
  required = false,
  text,
}) => {
  if (!render) return

  return (
    <label className={`flex leading-none text-xs text-gray-900 mb-px ${className}`}>
      {text}
      {required && ' *'}
    </label>

  )
}

export default Label
