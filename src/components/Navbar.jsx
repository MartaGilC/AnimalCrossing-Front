import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <NavLink to='' activeclassname ={'active'}>HOME</NavLink>
        <NavLink to='characters' activeclassname ={'active'}>CHARACTERS</NavLink>
        <NavLink to='editions' activeclassname ={'active'}>EDITIONS</NavLink>
        <NavLink to='aboutme' activeclassname ={'active'}>ABOUT ME</NavLink>
        <NavLink to='create' activeclassname ={'active'}>CREATE</NavLink>
    </nav>
  )
}

export default Navbar