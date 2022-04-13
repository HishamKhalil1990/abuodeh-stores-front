import { useState } from 'react'

export default function LoginLayout(props){

  const changeUser = () => {}
  const changePassword = () => {}
  const login = () => {}

  return (
    <form className="mb-4 rounded bg-green-200 px-8 pt-6 pb-8 shadow-md ">
      <div className="mb-4">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Username
        </label>
        <input
          name="username"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="username"
          type="text"
          placeholder="Username"
          onChange={changeUser}
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Password
        </label>
        <input
          name="password"
          className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="password"
          type="password"
          placeholder="******************"
          onChange={changePassword}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={login}
          className="focus:shadow-outline rounded bg-green-700 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
        >
          Sign In
        </button>
      </div>
    </form>
  )
}
