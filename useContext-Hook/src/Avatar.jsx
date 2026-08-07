import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'

function Avatar() {
    const user=useContext(UserContext)
  return (
    <div>
        <p>Welcome, {user.name}</p>
    </div>
  )
}

export default Avatar