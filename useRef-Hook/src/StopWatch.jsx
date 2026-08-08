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
    <div style={{padding:'30px', backgroundColor:'skyblue',textAlign:'center',
        display:'flex',  flexDirection:'column', gap:'10px',borderRadius:'20px',
    justifyContent:'center',alignItems:'center',marginTop:'80px'}}>
        <h2>StopWatch</h2>
         <h2>Time: {time}</h2>
        <div style={{display:'flex',gap:'15px'}}>
            <button style={{paddingInline:'15px',paddingBlock:'8px',
                borderRadius:'10px',border:'none',boxShadow:'0px 2px 15px black',
                backgroundColor:'limegreen'
            }} onClick={Start}>Start</button>
        <button style={{paddingInline:'15px',paddingBlock:'8px',
                borderRadius:'10px',border:'none',boxShadow:'0px 2px 15px black',
                backgroundColor:'coral'
            }} onClick={Stop}>Stop</button>
        </div>
    </div>
  )
}

export default StopWatch