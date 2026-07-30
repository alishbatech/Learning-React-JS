import React from 'react'

function TaskItems({task,onDelete}) {
  return (
    <div style={{padding:'20px',margin:'20px',borderRadius:'30px',backgroundColor:'lightblue'
    }}>
        <h2>{task}</h2>
        <button onClick={()=>onDelete(task)}>Delete</button>
    </div>
  )
}

export default TaskItems