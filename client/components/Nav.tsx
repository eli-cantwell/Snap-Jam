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
      <div className="relative h-full w-full">
        <div className='w-fill h-48 border-b-2 border-slate-300 bg-[url("/images/banner-1563536_1920.jpg")] bg-cover'></div>
        <img src="../../images/snapjam.webp" alt="SnapJam" className="absolute bottom-0 left-1/4 h-full w-1/2 px-4 py-10 text-center" />
      </div>
      <div className="nav-bar">
        <div className="nav-title-div">
          <h1 className="xl font-bold text-slate-700">SnapJam</h1>
        </div>
        <div className="tab-div">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
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
            <button onClick={handleLogOut} className='bg-black rounded-md w-[6em] text-white h-1/2 my-auto mr-4'>Log Out</button>
          </div>
      </div>
    </>
  )
}
