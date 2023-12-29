import React from 'react'
import CSRFToken from '../CSRFToken'

const Form = ({ action, children, className, method }) => {
  const formMethod = method === 'GET' && 'GET' || 'POST'

  return (
    <form action={action} className={className} method={formMethod}>
      <CSRFToken />
      <input type="hidden" name="_method" value={method} />
      {children}
    </form>
  )
}

export default Form
