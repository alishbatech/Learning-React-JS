import React from 'react'
import { Link } from 'react-router-dom'

function Student() {
  return (
    <div>
        <h2>student page</h2>
        <Link to='/student/1'>View Profile</Link>
        <Link to='/student/2'>View Profile</Link>
        <Link to='/student/3'>View Profile</Link>
    </div>
  )
}

export default Student