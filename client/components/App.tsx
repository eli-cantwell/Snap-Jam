import { Outlet } from 'react-router-dom'
import Login from './Login'
import Nav from './Nav'
//import Footer from './Footer' //Crying face
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import SingleProject from './SingleProject'

function App() {
  return (
    <>
      <IfAuthenticated>
        <Nav />
        <Outlet />
        {<SingleProject id={2}/>}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Login />
      </IfNotAuthenticated>
    </>
  )
}

export default App
