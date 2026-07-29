import React from 'react'

function Card({id,children}) {
  return (
    <>
    <div style={{color:'Red',margin:'10px', padding:'20px',width:'200px' ,border:'2px solid red'}}>
    <h2>User {id}</h2>
        {children}
    </div>
    </>
  )
}

export default Card