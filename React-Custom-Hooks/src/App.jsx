import './App.css'
import LoginForm from './LoginForm'
import ToggleText from './ToggleText'
import UserData from './UserData'

function App() {

  return (
    <div
      style={{
        width: '100%', height: '100vh', backgroundColor: 'lightblue',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
      <h1>Custom Hooks</h1>
      <ToggleText />
      {/* <UserData/> */}
      <LoginForm />
    </div>
  )
}

export default App
