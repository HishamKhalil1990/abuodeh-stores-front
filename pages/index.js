import Login from "./account/login"
import SendPassToken from '../Components/SendPassToken'
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

