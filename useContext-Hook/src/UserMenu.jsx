import React from 'react'
import Avatar from './Avatar'

function UserMenu({user}) {
  return (
    <div>
        <h2>User Menu</h2>
      <Avatar user={user} />
    </div>
  )
}

export default UserMenu