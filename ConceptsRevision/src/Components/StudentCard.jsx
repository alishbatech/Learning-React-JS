import React from 'react'

function StudentCard({name,deptName,semester}) {
  return (
    <div  style={{ border:'2px solid red',width:'200px',padding:'20px',
          borderRadius:'20px' ,margin:'20px'
        }}>
        <h2>{name}</h2>
        <p>{deptName}</p>
        <p>Semester: {semester}</p>
    </div>
  )
}

export default StudentCard