import { Outlet } from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'

function App() {
  return (
    <>
        <header>
          <Nav />
        </header>
        <Outlet />
        <footer></footer>
    </>
  )
}

export default App
