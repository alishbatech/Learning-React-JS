import React, { useEffect, useState } from 'react'

function IntervalHookCounter({someProps}) {
    const [count , setCount]=useState(null)

    useEffect(()=>{
        const doSometing=()=>{
            console.log(spmeProps)
        }
        doSometing();
      const interval=  setInterval(() => {
            setCount(prev=>prev+1)
        }, 1000);

        return ()=>{
            clearInterval(interval)
        }
    },[someProps])
  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default IntervalHookCounter