import { useState } from 'react'

function Login() {
  const [addClass, setAddClass] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [match, setMatch] = useState('')
  const emptyFields = () => {
    console.log(username, password, email, confirmPass)
    setUsername('')
    setEmail('')
    setPassword('')
    setConfirmPass('')
  }
  const validate = () => {
    if (confirmPass.length > 0 && password.length > 0) {
      if (confirmPass == password) {
        setMatch('matched')
      } else {
        setMatch('not matched')
      }
    }
  }
  const changeUser = () => {}
  const changePassword = () => {}
  const login = () => {}

  return (
    <div className="login-reg-container">
      <div className="loginbody">
        <div className={`container ${addClass}`} id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                onBlur={validate}
                value={confirmPass}
                onChange={(event) => {
                  setConfirmPass(event.target.value)
                }}
              />
              <div className="w-full text-left">
                <div className='text-xs text-green-500'>{match}</div>
              </div>
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
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
