import React, { useEffect, useState } from 'react'

function TimerComponent() {

    const [time, setTime]=useState(1);

    useEffect(()=>{
        const timer=setInterval(()=>{
        setTime(prev=>prev+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])

  return (
    <div>
        <h2>TimerComponent</h2>
        <h2>Time: {time}</h2>
    </div>
  )
}

export default TimerComponent