import Login from "./account/login"
import Head from 'next/head'

const NavBar = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login/>
    </div>
  )
}

export default NavBar

