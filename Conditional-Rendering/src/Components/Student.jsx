import React from 'react'

function Student({name,rollno,isPassed}) {
  
 if(isPassed)return(
   <div style={{margin:'20px',padding:'20px',border:'2px solid blue',width:'300px'}}>
   <h2>Name: {name} </h2>
   <h2> Rollno: {rollno}</h2>
   <p>🎉Congratulations! You passed the Exam. </p>
   </div>
 )
 
 return(
    <div style={{margin:'20px',padding:'20px',border:'2px solid blue',width:'300px'}}>
     <h2>Name: {name} </h2>
   <h2> Rollno: {rollno}</h2>
   <p>💔Unfortunayely!You failed the exam. </p>
   </div>
 )
}

export default Student