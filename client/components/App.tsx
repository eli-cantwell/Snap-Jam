import { Outlet } from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'

function App() {
  return (
    <>
    <div>
        <header>
          <Nav />
        </header>
        <div className="outlet"><Outlet /></div>
        
        <footer></footer>
    </div>
    </>
  )
}

export default App
