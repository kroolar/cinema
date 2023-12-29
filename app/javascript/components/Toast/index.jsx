import React from 'react'
import { isEmpty } from 'lodash'
import { Icon } from '../'

const Toast = ({
  type,
  text,
  render = true
}) => {
  const isError = type === 'error'

  if (!render || isEmpty(text)) return

  return (
    <div class={`flex items-center ${isError ? 'bg-rose-600' : 'bg-emerald-600'} absolute text-white leading-none h-12 px-3 right-10 bottom-10`}>
      <Icon
        className="mr-2 !text-3xl"
        icon={isError ? 'error' : 'check_circle'}
      />

      <div class="leading-none min-w-80">
        {text}
      </div>

      <div class="duration-300 hover:bg-red-500 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
        <Icon icon="close" />
      </div>
    </div>
  )
}

export default Toast
