import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function Nav() {
  // const [selected, setSelected] = useState(false)
  // const [class, setClass] = useState('not-selected')
  
  // if (selected == true) {
  //   setClass('selected')
  // }

  const { user } = useAuth0()

  // function handleClick() {
  //   console.log('Hello Eli ;)')
  // }
  
  return (
    <div className="nav-bar">
      <div className="nav-title-div">
        <h1 className='text-slate-700 font-bold xl'>Snap Jam</h1>
      </div>
      <div className="tab-div">
        <NavLink to="/" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
          <h1>Home</h1>
        </NavLink>
        <NavLink to="/projects" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>
          <h1>Projects</h1>
        </NavLink>
      </div>
      <div className="profile-info-div">
        <h1 className="text-slate-700 font-medium">User: {user?.nickname}</h1>
      </div>
    </div>
  )
}
