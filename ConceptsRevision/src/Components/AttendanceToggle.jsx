import React, { useState } from 'react'

function AttendanceToggle() {
    const [attendence , setAttendence]=useState({
        name:'Alishba',
        present:false
    })
 const handleMark=()=>{
    setAttendence({...attendence,
        present: !attendence.present})
 }


  return (
    <div style={{
    border: '2px solid red', 
    width: '250px', 
    padding: '20px',
    borderRadius: '20px', 
    margin: '20px'
  }}>
        <h2>{attendence.name}</h2>
        <p style={{fontSize:'20px'}}>
            {attendence.present? "🟢Present":"🔴Absent"}
            </p>
            <button onClick={handleMark}>
                {attendence.present?"Mark Absent":"Mark Present"}
                </button>
    </div>
  )
}

export default AttendanceToggle