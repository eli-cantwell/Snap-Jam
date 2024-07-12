import { useAuth0 } from '@auth0/auth0-react'

export default function Login() {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect()
  }
  return (
    <>
      <main className="login-main">
        <h1 className="mb-6 text-5xl font-bold">Welcome to Snap Jam!</h1>
        <div className="login-screen m-auto">
          <button className="button-black" onClick={handleLogin}>
            Sign up
          </button>
          <button className="button-black" onClick={handleLogin}>
            Sign in
          </button>
        </div>
      </main>
    </>
  )
}

//n
