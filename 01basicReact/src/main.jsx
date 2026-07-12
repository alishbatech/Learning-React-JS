
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App! | Alishba</h1>
    </div>
  )
}

const ReactElement = (
  <a href="https://google.com" target='_blank'>click me</a>
)


const anotherUser = "Alishba Shahid"
const MyreactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <App /> */}
    {/* ReactElement */}
    {/* <MyApp /> */}
    {MyreactElement}
  </StrictMode>

)
