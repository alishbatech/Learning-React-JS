import Header from './Header'
import './App.css'

function App() {
 const user={
   name:"Alishba Shahid",
   role:"Frontend Developer",
   theme:"dark"
 }

  return (
 
    <div style={{height:'100vh', backgroundColor:'black',color:'lightgrey',
       textAlign:'center',  padding:'10px'}}>
     <h1>Dashboard</h1>
      <Header user={user}/>

    </div>
  
  )
}

export default App
