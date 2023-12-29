import React from 'react'

const Icon = ({
  className="",
  icon,
  render = true
}) => {
  if (!render) return

  return (
    <i class={`material-icons material-icons-outlined ${className}`}>
      {icon}
    </i>
  )
}

export default Icon
