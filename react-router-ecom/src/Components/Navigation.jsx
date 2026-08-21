import React from 'react'
import { NavLink } from 'react-router-dom'
import App from '../App'

function Navigation() {
  return (
    <div className=''>
        <nav>
        <NavLink className={({isActive})=>isActive? "text-blue-700":"text-gray-800"} to='/'>Home</NavLink>  |
        <NavLink className={({isActive})=>isActive? "nav-link active":"navlink"} to='/about'>About</NavLink> |
        <NavLink className={({isActive})=>isActive? "nav-link active":"navlink"} to='/contact'>Contact</NavLink> 
      </nav>

    </div>
  )
}

export default Navigation