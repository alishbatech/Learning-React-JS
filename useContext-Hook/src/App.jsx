import Header from './Header'
import './App.css'
import { UserContext } from './UserContext'

function App() {
 const user={
   name:"Alishba Shahid",
   role:"Frontend Developer",
   theme:"dark"
 }

  return (
 
   <UserContext value={user}>
     <div style={{height:'100vh' , backgroundColor:'black',color:'lightgrey',
       textAlign:'center',  padding:'20px'}}>
     <h1>Dashboard</h1>
      <Header user={user}/>

    </div>
   </UserContext>
  
  )
}

export default App
