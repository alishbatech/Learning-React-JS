import { useState } from 'react'
import {Greeting} from './Greeting'
import UserCard from './UserCard'
import './App.css'

function App() {


  return (
    <>
      <Greeting name='Ayesha' msg='Hey'/>
      <Greeting msg='Good Morning'/>
      <Greeting/>
      <br />
    <UserCard id='101' name="Alishba" age='19' email="alishy99@email.com" />
    </>
  )
}

export default App
