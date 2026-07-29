import React from 'react'
import UserInfo from './UserInfo'

function UserCard({id , ...rest}) {
  return (
    <div>
        <h1>User {id} Datails </h1>
        <UserInfo {...rest} />
    </div>
  )
}

export default UserCard