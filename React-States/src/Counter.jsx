import React from 'react'
import { useState } from 'react'

function Counter() {
    // [currentValue, setterFun]=useState(intialValue)
    // const [count, setCount] = useState(0)
    
    // [currentValue, setterFun]=useState(fn)
    const [count, setCount] = useState(()=>{   //Lazy intialization
         console.log("Initail function state called!");
         return 0;
    })

    console.log(`Counter component render with count:${count}`)
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
       <>
        <button
            style={{ padding: '10px', fontSize: '20px', marginTop: '50px',width:'auto' }}
            onClick={handleCount}>
            Count : {count}
        </button>
       
   
       </>
    )
}

export default Counter