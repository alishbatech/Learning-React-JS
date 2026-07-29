import { useState } from 'react'
import {Greeting} from './Greeting'
import UserCard from './UserCard'
import './App.css'
import Card from './Card'

function App() {


  return (
    <>
      <Greeting name='Ayesha' msg='Hey'/>
      <Greeting msg='Good Morning'/>
      <Greeting/>
      <br />
    <UserCard id='101' name="Alishba" age='19' email="alishy99@email.com" />
        <Card id='101'>
          <h2>My Profile</h2>
          <p>Frontend Developer</p>
        </Card>
        <Card id='101' >
          <h2>About Me</h2>
          <p>I'm Learning React.js</p>
        </Card>

    </>
  )
}

export default App
