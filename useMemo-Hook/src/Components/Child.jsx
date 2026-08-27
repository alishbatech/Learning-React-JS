import React from 'react'

export  const Child=React.memo(({user})=> {
    console.log("Child")
  return (
    <div>
  <h2>{user.name}</h2>
  <h3>{user.age}</h3> 
 
    </div>
  )
})

