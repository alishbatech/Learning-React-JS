import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import Profile from './Profile'

function Navbar() {
    const { userProfile, setUserProfile}=useContext(UserContext)

  return (
    <div>
        <h2>Navbar: {userProfile.isLogin===true? `Welcome, ${userProfile.userName}`:"Not logged in"}</h2>
        
        <Profile/>
     
    </div>
  )
}

export default Navbar