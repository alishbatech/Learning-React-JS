import React from 'react'
import { NavLink } from 'react-router-dom'
import App from '../App'

function Navigation() {
  return (
          <nav className='flex gap-10 text-gray-100 m-2 px-20 py-5 text-center'>
        <NavLink className={({isActive})=>isActive? "nav-link active":"nav-link"} to='/'>Home</NavLink>  |
        <NavLink className={({isActive})=>isActive? "nav-link active":"navlink"} to='/about'>About</NavLink> |
        <NavLink className={({isActive})=>isActive? "nav-link active":"navlink"} to='/products'>Products</NavLink> |
        <NavLink className={({isActive})=>isActive? "nav-link active":"navlink"} to='/profile'>Profile</NavLink> |
        <NavLink className={({isActive})=>isActive? "nav-link active":"navlink"} to='/contact'>Contact</NavLink> 
      </nav>

   
  )
}

export default Navigation