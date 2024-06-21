import { Outlet } from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'
//import Footer from './Footer' //Crying face
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function App() {
  return (
    <>
    <div className="">
    <IfAuthenticated>
        <Nav />
        <Outlet />
        
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Login />
      </IfNotAuthenticated>
    </div>
    </>
  )
}

export default App
