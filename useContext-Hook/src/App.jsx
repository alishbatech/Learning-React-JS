import Header from './Components/Header'
import './App.css'
import UserContextProvider from './Components/UserContextProvider'
import ContextProvider from './LanguageSwitcher/ContextProvider'
import LangHeader from './LanguageSwitcher/LangHeader'

function App() {

  return (
<>

    <UserContextProvider>
      <div style={{
        height: '100vh', 
        backgroundColor:'black', 
        color: 'lightgrey',
        textAlign: 'center', padding: '20px'
      }}>
        <h1>Dashboard</h1>
        <Header />

      </div>
    </UserContextProvider>

    <ContextProvider>
       <div style={{
        height: '100vh', 
        backgroundColor:'black', 
        color: 'lightgrey',
        textAlign: 'center', padding: '10px'
      }}>
        <LangHeader/>

      </div>
    </ContextProvider>
</>
  )
}

export default App
