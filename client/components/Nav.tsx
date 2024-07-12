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
      <div className="nav-bar">
        <div className="nav-title-div mr-72">
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
          <button
            onClick={handleLogOut}
            className="my-auto mr-4 h-1/2 w-[6em] rounded-md bg-black text-white"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  )
}
