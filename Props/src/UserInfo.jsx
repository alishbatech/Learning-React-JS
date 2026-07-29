import React from 'react'

function UserInfo({name ,age,email}) {
  return (
    <div>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
        <h2>Email : {email}</h2>
    </div>
  )
}

export default UserInfo