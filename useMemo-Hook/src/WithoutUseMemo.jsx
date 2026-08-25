import React, { useState } from 'react'

function WithoutUseMemo() {
    const [count,setCount]=useState(0)
    const [text, setText]=useState('')

    const expensiveCal=()=>{

        console.log("Expensive calculation is running...")
        let total=0;
        for (let index=0; index < 100000; index++) {
            total += index; 
        }
        return total;
    }

   let result= expensiveCal()
  return (
    <div>
      <h3>Result: {result}</h3>
      <button onClick={()=>setCount(count+1)}>Count {count}</button>
      <input type="text"
       placeholder='Enter text...'
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  )
}

export default WithoutUseMemo