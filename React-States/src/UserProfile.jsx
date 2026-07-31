import React from 'react'
import { useState } from 'react'

function UserProfile() {
   const [user, setUser]=useState({
    name:'Alishba',
    age:19,
    email:'alishba@gmail.com',
    address:{
        city:'Faisalabad',
        country:'Pakistan'
    }
   })
   const nameHandler=()=>{
    setUser({
        ...user,
        name:'Ayesha'
    })
   }
   const ageHandler=()=>{
    setUser({
        ...user,
        age:18
    })
   }
   const changeHandler=()=>{
    setUser({
        ...user,
        name:"Zanii",
        age:'16'
    })
   }
   const cityHandler=()=>{
    setUser({
        ...user,
        address:{
            ...user.address,
            city:'Lahore'
        }
    })
   }

  return (
    <div style={{padding:'20px',fontFamily:'Arial',margin:'20px'}}>
          <p><strong>Name: </strong>{user.name}</p>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
          <button onClick={cityHandler}>Move to Lahore</button>
          <p>Country: {user.address.country}</p>
          <button onClick={nameHandler}>Change name to Ayesha</button>
          <br />
          <button onClick={ageHandler}>Change Age</button>
          <br />
          <button onClick={changeHandler}>Change name&age</button>
    </div>
  )
}

export default UserProfile