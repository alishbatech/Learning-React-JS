import React from 'react'

function StudentNotification({isNotification}) {
  return (
    <div style={{margin:'20px',padding:'20px',border:'2px solid blue',width:'300px'}}>
        <h2>Notification:</h2>
           {isNotification && "You have a notification!"}
    </div>
  )
}

export default StudentNotification