import React from 'react'
import { useState } from 'react'
import { UserContext } from './UserContext'

function UserContextProvider({children}) {
    const [user,setUser]=useState({
       name:"Alishba Shahid",
       role:"Frontend Developer",
       theme:"dark"
     })
    
  return (
   <UserContext value={{user,setUser}}>
    {children}
   </UserContext>
  )
}

export default UserContextProvider