import React from 'react'
import useToggle from './hooks/useToggle'

function ToggleText() {

    const [isOpen,toggleOpen]=useToggle()
    const [isText,toggleText]=useToggle()
  return (
    <div>
        <button onClick={toggleOpen}>{!isOpen?"Show":"Hide"}</button>
        {isOpen && <p>Hello, this is visible.</p>}
        <button onClick={toggleText}>{!isText?"Show":"Hide"}</button>
        {isText && <p>Hello, this is Alishba.</p>}
    </div>
  )
}

export default ToggleText