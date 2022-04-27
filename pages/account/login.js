import { useState } from 'react'
import { FcCheckmark, FcHighPriority } from 'react-icons/fc'

function Login() {
  const [addClass, setAddClass] = useState('')
  const [username, setUsername] = useState('')
  const [usedUser, setUsedUser] = useState(false)
  const [wrongUser,setWrongUser] = useState(false)
  const [email, setEmail] = useState('')
  const [usedEmail, setUsedEmail] = useState(false)
  const [password, setPassword] = useState('')
  const [wrongPass,setWrongPass] = useState(false)
  const [confirmPass, setConfirmPass] = useState('')
  const [match, setMatch] = useState(false)
  const [hide, setHide] = useState(true)
  const emptyFields = () => {
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPass('')
    setMatch(false)
    setHide(true)
  }
  const validate = () => {
    if (confirmPass.length > 0 && password.length > 0) {
      if (confirmPass === password) {
        setHide(false)
        setMatch(true)
      } else {
        setHide(false)
        setMatch(false)
      }
    } else {
      setMatch(false)
      setHide(true)
    }
  }
  const register = () => {
    const data = {
      username : username,
      email : email,
      password : password
    }
  }
  const login = () => {
    const data = {
      username : username,
      password : password
    }
  }
  return (
    <div className="login-reg-container">
      <div className="loginbody">
        <div className={`container ${addClass}`} id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="relative h-fit w-full">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onFocus={() => {
                    if(usedUser){
                      setUsedUser(true)
                    }
                  }}
                  onChange={(event) => {
                    setUsername(event.target.value)
                  }}
                />
                <div className="absolute inset-y-1/3 right-4 mt-1 h-1/5 w-3">
                  {!usedUser ? <></> : <FcHighPriority />}
                </div>
              </div>
              <div className="relative h-fit w-full">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onFocus={() => {
                    if(usedEmail){
                      setUsedEmail(true)
                    }
                  }}
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
                <div className="absolute inset-y-1/3 right-4 mt-1 h-1/5 w-3">
                  {!usedEmail ? <></> : <FcHighPriority />}
                </div>
              </div>
              <div className="relative h-fit w-full">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  onBlur={validate}
                  onChange={(event) => {
                    setHide(true)
                    setPassword(event.target.value)
                  }}
                />
                {/* <div className="absolute inset-y-1/3 right-4 mt-1 h-1/5 w-3">
                  {hide ? (
                    <></>
                  ) : (
                    <>{match ? <FcCheckmark /> : <FcHighPriority />}</>
                  )}
                </div> */}
              </div>
              <div className="relative h-fit w-full">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onBlur={validate}
                  onFocus={() => {
                    setHide(true)
                  }}
                  value={confirmPass}
                  onChange={(event) => {
                    setConfirmPass(event.target.value)
                  }}
                />
                <div className="absolute inset-y-1/3 right-4 mt-1 h-1/5 w-3">
                  {hide ? (
                    <></>
                  ) : (
                    <>{match ? <FcCheckmark /> : <FcHighPriority />}</>
                  )}
                </div>
              </div>
              <button onClick={register}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="relative h-fit w-full">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onFocus={() => {
                    if(wrongUser){
                      setWrongUser(true)
                    }
                  }}
                  onChange={(event) => {
                    setUsername(event.target.value)
                  }}
                />
                <div className="absolute inset-y-1/3 right-4 mt-1 h-1/5 w-3">
                  {!wrongUser ? <></> : <FcHighPriority />}
                </div>
              </div>
              <div className="relative h-fit w-full">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onFocus={() => {
                    if(wrongPass){
                      setWrongPass(true)
                    }
                  }}
                  onChange={(event) => {
                    setPassword(event.target.value)
                  }}
                />
                <div className="absolute inset-y-1/3 right-4 mt-1 h-1/5 w-3">
                  {!wrongPass ? <></> : <FcHighPriority />}
                </div>
              </div>
              <a href="#">Forgot your password?</a>
              <button onClick={login}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => {
                    emptyFields()
                    setAddClass('')
                  }}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => {
                    emptyFields()
                    setAddClass('right-panel-active')
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
