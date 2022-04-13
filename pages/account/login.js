import { useState } from 'react'
import LoginLayout from '../../Components/LoginLayout'
import RegLayout from '../../Components/RegLayout'

function Login() {
  const [mode, setMode] = useState(true)

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="grid h-3/4 w-2/3 grid-cols-5 rounded-3xl drop-shadow-2xl">
        <div className="col-span-2 flex h-full items-center justify-center rounded-tl-3xl rounded-bl-3xl bg-teal-500">
          <button
            type="button"
            className="h-10 w-2/4 rounded-r-full rounded-l-full border-2 border-slate-200 bg-teal-500 drop-shadow-2xl hover:bg-white"
            onClick={() => setMode(!mode)}
          >
            {mode ? (
              <div className="flex h-full w-full items-center justify-center font-normal text-white hover:text-teal-500">
                SIGN UP
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center font-normal text-white hover:text-teal-500">
                SIGN IN
              </div>
            )}
          </button>
        </div>
        <div className="col-span-3 flex h-full items-center justify-center rounded-tr-3xl rounded-br-3xl border-4 border-teal-500 bg-slate-100">
          <div className="flex h-2/4 items-center justify-center">
            {mode? <LoginLayout /> : <RegLayout />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
