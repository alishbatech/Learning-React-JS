import React from 'react'
import { useParams } from 'react-router-dom'

function StudentDetails() {

    const students=[
       {id:1, name:'Alina',age:20},
       {id:2, name:'Alishba',age:19},
       {id:3, name:'Aliha',age:18}
    ]

    const {id}=useParams()

    const student=students.find(
        student=> student.id===Number(id)
    )
  return (
    <div>
        <h2>Student Details id: {id}</h2>
        <h2>Student Name: {student.name}</h2>
        <h2>Student Age: {student.age}</h2>
    </div>
  )
}

export default StudentDetails