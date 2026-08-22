import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex flex-col gap-10 text-white p-10 text-center font-semibold '>
        <h2>400- Page is not found.</h2>
        <Link to='/' className='text-white text-md mx-80 bg-blue-600 p-2 rounded-xl'>Go to Home</Link>
        
    </div>
  )
}

export default NotFound