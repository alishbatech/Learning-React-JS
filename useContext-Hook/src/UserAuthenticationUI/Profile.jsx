import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

function Profile() {
     const { userProfile, setUserProfile}=useContext(UserContext)

     const toogleLogin=()=>{
        setUserProfile({
            ...userProfile,
            isLogin: userProfile.isLogin===false? true:false
        })
     }
  return (
    <div>
        <h2>Profile: {userProfile.isLogin===true? `User: ${userProfile.userName}`:"Please login."} </h2>
        <button  style={{
          padding: '10px', backgroundColor: 'cyan', border: 'none',
          width:'100px',  borderRadius: '10px', fontSize:'17px'
        }}
         onClick={toogleLogin}>
    {userProfile.isLogin===true? "Logout":"Login"}</button>
    </div>
  )
}

export default Profile