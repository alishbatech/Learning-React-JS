import React, { useState } from 'react'
import { UserContext } from './UserContext'

function UserProvider({ children }) {
    const [userProfile, setUserProfile] = useState({
        userName: "Alishba",
        isLogin: false
    })
    return (
        <UserContext value={{ userProfile, setUserProfile }}>
            {children}
        </UserContext>
    )
}

export default UserProvider