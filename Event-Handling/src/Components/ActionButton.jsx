import React from 'react'

function ActionButton({btnText,onClick}) {
  return (
    <button onClick={onClick}>{btnText}</button>
  )
}

export default ActionButton