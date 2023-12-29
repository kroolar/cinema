import React from 'react'

const CSRFToken = () => {
  // @ts-ignore
  const value = document.querySelector('meta[name="csrf-token"]')?.content

  return (
    <input
      name="authenticity_token"
      type="hidden"
      value={value}
    />
  )
}

export default CSRFToken
