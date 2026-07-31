import React from 'react'
import { useState } from 'react'

function BatchingState() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [age, setAge] = useState()
    console.log("Render phase, component render ")

    const handleCount = () => {
        setCount((prev) => {
            return prev + 1 //0+1 = 1
        });
        setCount((prev) => {
            return prev + 5 //1+5 = 6
        });
        setCount((prev) => {
            return prev + 10 //6+10 = 16
        });
        setName("Alishba");
        setAge(19)

    }
    return (
        <div style={{ padding: '20px', margin: '20px' }}>
            <h2>Count: {count}</h2>
            <h2>Name: {name}</h2>
            <h3>age: {age}</h3>
            <button onClick={handleCount}>Update All</button>
        </div>
    )
}

export default BatchingState