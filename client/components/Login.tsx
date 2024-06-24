import { useAuth0 } from '@auth0/auth0-react'

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect()
  }
  return (
    <>
      <main className="login-main">
        <div className="login-screen m-auto">
          <button onClick={handleLogin}>Sign up</button>
          <button onClick={handleLogin}>Sign in</button>
        </div>
      </main>
    </>
  )
}

//n
