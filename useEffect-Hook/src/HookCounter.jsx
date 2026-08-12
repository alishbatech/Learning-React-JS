import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function HookCounter() {
    const [count,setCount]=useState(0)
//   const [data ,setData]=useState(0)
   const [name, setName] = useState("");

  useEffect(()=>{
      // callCount()
      console.log("useEffect is running")
      document.title=`Click ${count} times`
  },[count])
//   useEffect(()=>{
//       // callCount()
//   },[data])

//   const callData=()=>{
//     // console.log("Data is Called")
//   }
 
//   const callCount=()=>{
//     // console.log("Count is Called")
//   }
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>Count {count}</button>
    {/* <button onClick={()=>setData(data+1)}>Data {data}</button> */}
    </div>
  )
}

export default HookCounter