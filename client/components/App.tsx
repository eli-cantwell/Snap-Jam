import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

export default App
