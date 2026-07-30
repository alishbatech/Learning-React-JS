import React from 'react'
import ActionButton from './ActionButton'

function NewsLetter() {
    const newsHandler=()=>{
        alert("Thanks for subscribing!")
    }
  return (
    <div>
        <h2>Subscribe to our NewsLetter!</h2>
        <ActionButton btnText='Subscribe' onClick={newsHandler}/>
    </div>
  )
}

export default NewsLetter