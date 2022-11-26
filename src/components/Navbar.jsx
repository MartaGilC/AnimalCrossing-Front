import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <NavLink to='' activeclassname ={'active'}>Home</NavLink>
        <NavLink to='characters' activeclassname ={'active'}>Characters</NavLink>
        <NavLink to='editions' activeclassname ={'active'}>Editions</NavLink>
        <NavLink to='aboutme' activeclassname ={'active'}>About me</NavLink>
    </nav>
  )
}

export default Navbar