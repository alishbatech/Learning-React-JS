import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
      const handleToAbout=()=>{
             navigate('./about')
      }

  return (
    <div>
        <h2>
          Hi👋, I'm Alishba Shahid
        </h2>
        <button onClick={handleToAbout}>Go to About</button>
    </div>
  )
}

export default Home