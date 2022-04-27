export default function SendPassToken(props) {
  return (
    <div className="innerBody">
      <div className="innermain">
        <input className="innerinput" type="checkbox" id="chk" aria-hidden="true" />

        <div className="innersignup">
          <form>
            <label className="innerlabel" for="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="innerinput"
              type="text"
              name="txt"
              placeholder="User name"
              required=""
            />
            <input
              className="innerinput"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="innerinput"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="innerbutton">Sign up</button>
          </form>
        </div>

        <div className="innerlogin">
          <form>
            <label className="innerlabel" for="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="innerinput"
              type="text"
              name="txt"
              placeholder="Username"
              required=""
            />
            <input
              className="innerinput"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <button className="innerbutton">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
