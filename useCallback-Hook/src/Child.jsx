import React from 'react'

function Child({click}) {
    console.log("Child")
  return (
    <div>
        <button onClick={click}>Child Click</button>
    </div>
  )
}

export default React.memo(Child)