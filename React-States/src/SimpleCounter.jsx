import React from 'react'
import { useState } from 'react'

function SimpleCounter() {
const [count,setCount]=useState(0)
console.log("Render phase, component render with count:",count)
const handleCount=()=>{
    // console.log("Before increment, count is:",count)
    setCount(count+1); //0+1 = 1
    // console.log(" Still in trigger phase.After setCount, count is:",count)
    console.log(" After setCount(count + 1), count is:",count)
    setCount(count+5); //0+5 = 5
    console.log(" After setCount(count + 5), count is:",count)
    setCount(count+10); //0+10 = 10
    console.log(" After setCount(count + 10), count is:",count)
    setTimeout(() => {
        console.log("After 2sec, count is :",count) // 0
    }, 2000);

}
  return (
    <div style={{padding:'20px',margin:'20px'}}>
        <h2>Count: {count}</h2>
        <button onClick={handleCount}>Increment</button>
    </div>
  )
}

export default SimpleCounter