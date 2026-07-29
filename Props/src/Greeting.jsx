import React from 'react'

export const Greeting=({name='Alishba',msg='Hello'})=> {
  return (
   <h1 style={{color:'green',padding:5}}>{msg},{name} </h1>
  )
}

