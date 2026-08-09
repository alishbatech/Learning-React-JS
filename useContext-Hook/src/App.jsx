import Header from './Components/Header'
import './App.css'
import UserContextProvider from './Components/UserContextProvider'
import ContextProvider from './LanguageSwitcher/ContextProvider'
import LangHeader from './LanguageSwitcher/LangHeader'
import UserProvider from './UserAuthenticationUI/UserProvider'
import NavBar from './UserAuthenticationUI/NavBar'

function App() {

  return (
<>

    <UserContextProvider>
      <div style={{
        marginBottom:'10px',
        backgroundColor:'black', 
        color: 'lightgrey',
        textAlign: 'center', padding: '50px'
      }}>
        <h1>Dashboard</h1>
        <Header />

      </div>
    </UserContextProvider>

    <ContextProvider>
       <div style={{
       marginBottom:'10px',
        backgroundColor:'black', 
        color: 'lightgrey',
        textAlign: 'center', padding: '50px'
      }}>
        <LangHeader/>

      </div>
    </ContextProvider>

    <UserProvider>
       <div style={{
      
        backgroundColor:'black', 
        color: 'lightgrey',
        textAlign: 'center', padding: '50px'
      }}>
       <NavBar/>

      </div>
    </UserProvider>
</>
  )
}

export default App
