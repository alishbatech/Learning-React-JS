import React from 'react'

function StudentStatus({ isOnline }) {
    return (
        <div
            style={{
                margin: '20px', padding: '20px'
                , border: '2px solid blue', width: '300px'
            }}>
                <h2>Student Status⬇</h2> 
            {isOnline ? "🟢Student is Online!" :"🔴Student is Offline!" }
        </div>
    )
}

export default StudentStatus