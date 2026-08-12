import React, { useState } from 'react'
import MouseHook from './MouseHook'

function MouseContainer() {

    const [display,setDisplay]=useState(false)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Display Toogle</button>
        {display && <MouseHook/>}
    </div>
  )
}

export default MouseContainer