import React from "react";
import Form from "../Form";

const Menu = ({
  render = true
}) => {
  if (!render) return

  return (
    <nav class="bg-white w-64 h-screen p-6 border">
      <h1 className="!text-3xl font-semibold mb-4">Cinema Town</h1>

      <div class="mt-40 flex items-center text-gray-900 hover:bg-gray-100 p-2 duration-300 leading-none cursor-pointer">
        <i class="material-icons material-icons-outlined mr-2">
          dashboard
        </i>

        <div class="text-lg">Dashboard</div>
      </div>

      <div class="flex items-center text-gray-900 hover:bg-gray-100 p-2 duration-300 leading-none cursor-pointer">
        <i class="material-icons material-icons-outlined mr-2">
          movie
        </i>

        <div class="text-lg">Movies</div>
      </div>

      <Form className="mt-96" action="/users/sign_out" method="DELETE">
        <button type="submit" class="w-full flex items-center text-gray-900 hover:bg-gray-100 p-2 duration-300 leading-none cursor-pointer">
          <i class="material-icons material-icons-outlined mr-2">
            logout
          </i>

          <div class="text-lg">Logout</div>        
        </button>
      </Form>
    </nav>
  )
}

export default Menu