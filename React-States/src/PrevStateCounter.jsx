import React from 'react'
import { useState } from 'react'

function SimpleCounter() {
    
    const [count, setCount] = useState(0)
    console.log("Render phase, component render with count:", count)

    const handleCount = () => {
        setCount((prev) => {
            console.log(" After updater fn: 1st prev is", prev)
            return prev + 1 //0+1 = 1
        });
        setCount((prev) => {
            console.log(" After updater fn: 2nd prev is", prev)
            return prev + 5 //1+5 = 6
        });
        setCount((prev) => {
            console.log(" After updater fn: 3rd prev is", prev)
            return prev + 10 //6+10 = 16
        });

        setTimeout(() => {
            console.log("After 2sec, count is :", count) // 0
        }, 2000);

    }
    return (
        <div style={{ padding: '20px', margin: '20px' }}>
            <h2>Count: {count}</h2>
            <button onClick={handleCount}>Increment</button>
        </div>
    )
}

export default SimpleCounter