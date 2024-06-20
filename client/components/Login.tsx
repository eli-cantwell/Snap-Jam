import { useAuth0 } from '@auth0/auth0-react'
// import Croissants from './Croissants'

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  const handleSignUp = () => {
    loginWithRedirect()
  }

  const handleLogIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <main className="login-main">
        <div className="login-screen m-auto">
          <button className="" onClick={handleSignUp}>
            Sign up
          </button>
          <button onClick={handleLogIn}>Sign in</button>
        </div>
      </main>
    </>
  )
}

//n
