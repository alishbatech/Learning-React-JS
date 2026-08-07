import React from 'react'
import UserMenu from './UserMenu'

function NavigationBar({user}) {
  return (
    <div>
        <h2>NavigationBar</h2>
        <UserMenu user={user}/>

    </div>
  )
}

export default NavigationBar