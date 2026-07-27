import {Welcome} from './Welcome'
import AmazingButton from './Button'
import { Hello } from './Hello'
import { HelloWithoutJSX } from './Hello'
import { Card } from './Card'
import { CardWithoutJSX } from './Card'

function App() {
  return (
    <>
    <h1>Learning Recat JS</h1>
   <HelloWithoutJSX/>
   <Hello/>
    <Welcome/>
    <AmazingButton/>
    <br /><br />
    <Card/>
    <br />
    <CardWithoutJSX/>
    </> 
  )
}

export default App
