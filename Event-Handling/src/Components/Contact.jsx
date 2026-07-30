import React from 'react'
import ActionButton from './ActionButton'

function Contact() {
    const contactHandler=()=>{
         alert("Your message is sent.")
    }
  return (
    <div>
        <h2>Send a message!</h2>
        <ActionButton btnText='Contact Us' onClick={contactHandler}/>
    </div>
  )
}

export default Contact