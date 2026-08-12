import React, { useEffect, useState } from 'react'

function MouseHook() {
 const [x,setX]=useState(0)
 const [y,setY]=useState(0)

 const MousePosition=(e)=>{
       console.log("Mouse Event")
       setX(e.clientX)
       setY(e.clientY)
 }

    useEffect(()=>{
    console.log("UseEffect called")
        window.addEventListener("mousemove",MousePosition)
    },[])
  return (
    <div>
        <h2>Mouse Hook</h2>
        <p>Mouse X-{x} Y-{y}</p>
    </div>
  )
}

export default MouseHook