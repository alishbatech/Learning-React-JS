import {Welcome} from './Welcome'
import AmazingButton from './Button'
import { Hello } from './Hello'
import { HelloWithoutJSX } from './Hello'
import { Card } from './Card'
import { CardWithoutJSX } from './Card'
import {CandidateProfile} from './CandidateProfile'

function App() {
  return (
    <>
   <HelloWithoutJSX/>
   <Hello/>
    <Welcome/>
    <AmazingButton/>
    <br /><br />
    <Card/>
    <br />
    <CardWithoutJSX/>
    <br />
    <CandidateProfile/>
    </> 
  )
}

export default App
