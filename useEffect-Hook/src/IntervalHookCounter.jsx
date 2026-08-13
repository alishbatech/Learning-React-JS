import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count , setCount]=useState(null)

    useEffect(()=>{
      const interval=  setInterval(() => {
            setCount(prev=>prev+1)
        }, 1000);

        return ()=>{
            clearInterval(interval)
        }
    },[])
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default IntervalHookCounter