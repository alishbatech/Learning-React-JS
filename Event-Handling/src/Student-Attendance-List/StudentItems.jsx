import React from 'react'

function StudentItems({name,present,onAttendance,children}) {
  return (
    <div  style={{padding:'20px',margin:'20px',borderRadius:'30px',backgroundColor:'lightblue'
    }}>
      <h2> {name}</h2>
      <span> {present?"🟢Present":"🔴Absent"}</span>
      <br />
      <button onClick={()=>onAttendance(name)}>{children}</button>
    </div>
  )
}

export default StudentItems