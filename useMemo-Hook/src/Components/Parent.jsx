import React, { useMemo, useState } from 'react'
import { Child } from './Child'

function Parent() {
  const [count, setCount] = useState(0)
  const user = useMemo(() => ({ name: 'Alishba', age: 19 }), [])
  console.log("Parent")

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child user={user} />
    </div>
  )
}


export default Parent