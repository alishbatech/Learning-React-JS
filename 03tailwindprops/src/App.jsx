import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    age:20,
    uni:"GCUF",
  }
  const myArr=["HTML","CSS","JS"]
  const myarr=["Python","CSS","JS"]

  return (
    <>
          <h1 className='bg-slate-500 p-6 rounded-2xl text-white mb-4'>Tailwind Test</h1>
           <Card name="Alishba" someObj={myObj} btnText="Visit me" newArr={myArr} instock=
           {true}/>
    <Card name="Ayesha" newArr={myarr} instock={false}/>

    </>
  )
}

export default App
