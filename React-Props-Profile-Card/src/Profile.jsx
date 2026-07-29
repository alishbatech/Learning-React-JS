import React from 'react'
import Skills from './Skills'

function Profile( {name,title,bio,
    status="Available for hire"
}) 
  {
   return (
   <div style={{width:'100%',height:'100%', display:'flex',
   justifyContent:'center',alignItems:'center' ,backgroundColor:'gray'}}>
    <div style={{padding:'30px',margin:'20px', border:'2px solid red' ,width:'400px',
    display:'flex', flexDirection:'column',borderRadius:'30px',backgroundColor:'whitesmoke'
   }}>
    <h1>{name} </h1>
    <h2 style={{color:'orange'}}>{title} </h2>
    <p>{bio} </p>
    <p style={{color:'green',fontWeight:'bold'}}>{status} </p>
      <h2 style={{padding:'10px', backgroundColor:'gray', borderRadius:'20px',
        marginTop:'10px', fontWeight:'bold'}}>Skills</h2>
    <Skills className="skill" id='html-skill'>HTML</Skills>
    <Skills className="skill" id='css-skill'>CSS</Skills>
    <Skills className="skill" id='js-skill'>JavaScript</Skills>
    <Skills className="skill" id='tailwind-skill'>Tailwind CSS</Skills>
    <Skills className="skill" id='react-skill'>React JS</Skills>
   </div>
   </div>
  )
}

export default Profile