import StopWatch from './StopWatch'
import FocusInput from './FocusInput'
import FormManager from './FormManager'
import './App.css'

function App() {
 

  return (
    <div>
      <h1>useRef Hook</h1>
      <StopWatch/>
       <h1>DOM with Refs</h1>
      <FocusInput/>
      <FormManager/>
    </div>
  
  )
}

export default App
