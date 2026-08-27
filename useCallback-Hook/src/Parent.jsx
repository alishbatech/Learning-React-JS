import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    console.log("Parent")

    const [count,setCount]=useState(0)
    const handleClick=useCallback(()=>{
        console.log("Button clicked from child")
    },[])
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Parent Increase</button>
        <Child click={handleClick} />
    </div>
  )
}

export default Parent