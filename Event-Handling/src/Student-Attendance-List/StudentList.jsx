import React from 'react'
import StudentItems from './StudentItems'

function StudentList() {
    const Students = [
        { id: 1, name: 'Alishba', present: true },
        { id: 2, name: 'Ayesha', present: false },
        { id: 3, name: 'Tooba', present: false },
        { id: 4, name: 'Esha', present: true },
    ]

    const attendanceHandler = (name) => {
        alert(`${name}'s Attendance is checked!`)
    }


    return (
        <div>
            {
                Students.map((std) => {
                    return (
                        <StudentItems
                            key={std.id}
                            name={std.name}
                            present={std.present}
                            onAttendance={attendanceHandler}
                        >
                            Check Attendance
                        </StudentItems>
                    )
                })
            }
        </div>
    )
}

export default StudentList