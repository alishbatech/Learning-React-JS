import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function StopWatch() {
    const [time , setTime]=useState(0)
    const intervalRef=useRef(null)

const Start=()=>{
    intervalRef.current= setInterval(() => {
        setTime((prev)=>prev+1)
     }, 1000);
}
const Stop=()=>{
 clearInterval(intervalRef.current)
}
  return (
    <div style={{padding:'10px'}}>
        <h2>StopWatch</h2>
         <h2>Time: {time}</h2>
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
    </div>
  )
}

export default StopWatch