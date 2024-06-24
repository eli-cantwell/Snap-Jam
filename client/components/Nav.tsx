import { useAuth0 } from '@auth0/auth0-react'
//import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  // const [selected, setSelected] = useState(false)
  // const [class, setClass] = useState('not-selected')

  // if (selected == true) {
  //   setClass('selected')
  // }

  const { user, logout } = useAuth0()

  // function handleClick() {
  //   console.log('Hello Eli ;)')
  // }

  function handleLogOut() {
    logout()
  }

  return (
    <>
    <div className='relative w-full h-full'>
      <div className='bg-[url("/images/banner-1563536_1920.jpg")] h-48 w-fill bg-cover border-slate-300 border-b-2'></div>
        <h1 className='absolute text-left bottom-0 left-1/4 text-white text-8xl font-semibold  w-1/2 h-full text-center px-4 py-10'>SnapJam</h1>
      </div>
      <div className="nav-bar">
        <div className="nav-title-div">
          <h1 className='text-slate-700 font-bold xl'>SnapJam</h1>
          </div>
          <div className="tab-div">
          <NavLink to="/" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
            <h1>Home</h1>
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            <h1>Create</h1>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            <h1>Projects</h1>
          </NavLink>
        </div>
        <div className="profile-info-div">
          <h1 className="font-medium text-slate-700">User: {user?.nickname}</h1>
          <img
            alt="user profile"
            className="m-auto mr-4 h-10 rounded-full"
            src={user?.picture}
          ></img>{' '}
          {/* TODO link this to a profile page */}
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      </div>
    </>
  )
}
