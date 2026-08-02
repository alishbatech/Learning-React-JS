import React from 'react'
import { useState } from 'react'
function Counter() {
 
   const [count, setCount] = useState(0)
  
    const Adder = () => {
      setCount(count + 1)
    }
  
    const Subtracter = () => {
      setCount(count - 1)
    }

    const resetHandler=()=>{
      setCount(0)
    }
    return (
      
        <div style={{display:'flex', flexDirection:'column' ,gap:'5px', justifyContent:'center'
          , alignItems:'center', border:'2px solid red',width:'200px',padding:'20px', margin:'20px'
          ,borderRadius:'20px'
        }}>
          <p style={{backgroundColor:'lightblue',padding:'20px', 
            borderRadius:'20px', fontSize:'20px'}}>{count}</p>
       <div style={{display:'flex',gap:'10px'}}>
         <button onClick={Adder}>➕</button>
        <button onClick={Subtracter}>➖</button>
        <button onClick={resetHandler}>Reset</button>
       </div>
        </div>
      
    )
  
}

export default Counter