import React from 'react'
import NavigationBar from './NavigationBar'

function Header({user}) {
  return (
    <div>
        <h2>Header</h2>
        <NavigationBar user={user}/>
    </div>
  )
}

export default Header