import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  // const [selected, setSelected] = useState(false)
  // const [class, setClass] = useState('not-selected')
  
  // if (selected == true) {
  //   setClass('selected')
  // }

  function handleClick() {

  }
  
  return (
    <div className="nav-bar">
      <div className="nav-title-div">
        <h1>Snap Jam</h1>
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
        <h1>Profile Info</h1>
      </div>
    </div>
  )
}
