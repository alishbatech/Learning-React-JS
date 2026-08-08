import Header from './Header'
import './App.css'
import UserContextProvider from './UserContextProvider'

function App() {

  return (

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

  )
}

export default App
