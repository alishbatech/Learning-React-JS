import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let counter=5;
  let [counter,setCounter]=useState(10)

      const AddValue=()=>{
         if(counter<20){
           setCounter( counter+1)
          }
          else{
            alert('Values should not exceed 20')
          }
        }

       const RemoveValue=()=>{
        if(!(counter<=0)){
          setCounter(counter-1)
        } 
          else{
            alert('Values should not go below 0')
          }
        }
          

  return (
    <>
     <h1> Learning React!</h1>
     <h3>Counter value: {counter}</h3>
     <button onClick={AddValue}>Add value :{counter}</button>
     <br />
     <button onClick={RemoveValue}>Remove value :{counter}</button>
    </>
  )
}

export default App
