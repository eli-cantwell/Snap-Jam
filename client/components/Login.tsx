import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
// import Croissants from './Croissants'

export default function Login() {
  return (
    <>
      <main className="login-main">
        <div className="login-screen m-auto">
          <Link to="/localregister">
            <button>Sign up</button>
          </Link>
          <Link to="/localregister">
            <button>Sign in</button>
          </Link>
        </div>
      </main>
    </>
  )
}

//n
