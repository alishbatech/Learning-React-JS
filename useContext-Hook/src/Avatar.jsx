import React from 'react'
import { UserContext } from './UserContext'
// import { useContext } from 'react'
import { use } from 'react'

function Avatar({isLoading=true}) {

  if(!isLoading){
   return <div>Loading user data...</div>
  }
  
  const { user, setUser } = use(UserContext)
  // const { user, setUser } = useContext(UserContext)
  const toogleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === "dark" ? "light" : "dark"
    })
  }
  return (
    <div style={{
      backgroundColor: user.theme === "dark" ? "black" : "lightgrey"
      , color: user.theme === "dark" ? "whitesmoke" : "black", padding: '20px',
      border: '2px solid skyblue', borderRadius: '40px'
    }}>
      <p>Welcome, {user.name}</p>
      <h2>Current Theme: {user.theme}</h2>
      <button
        style={{
          padding: '10px', backgroundColor: 'skyblue', border: 'none',
          borderRadius: '15px', boxShadow: '0px 2px 15px black',
        }}
        onClick={toogleTheme}>
        Toogle Theme
      </button>
    </div>
  )
}

export default Avatar