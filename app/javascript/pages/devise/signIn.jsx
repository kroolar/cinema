import React from 'react'
import { Button, Form, Input } from '../../components'

const SignIn = () => (
  <div className="flex items-center justify-center h-screen">
    <Form className="bg-white p-10 w-96 border-2">
      <h1 className="!text-2xl font-semibold mb-4">Sign In</h1>

      <Input
        className="mb-2"
        required
        name="user[email]"
        label="Name"
      />

      <Input
        className="mb-5"
        required
        name="user[password]"
        label="Password"
        type="password"
      />

      <Button type="submit" text="Sign In" />
    </Form>
  </div>
)

export default SignIn

