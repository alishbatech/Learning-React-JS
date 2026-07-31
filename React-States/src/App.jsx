import './App.css'
import Counter from './Counter'
import LoginCard from './LoginCard'
import SimpleCounter from './SimpleCounter'
import UserDashboard from './UserDashboard'

function App() {

 return (
    <>
      <Counter/>
      <Counter/>
       <LoginCard/>
       <UserDashboard isPremium={true}/>
       <UserDashboard isPremium={false}/>
       <SimpleCounter/>
    </>
  )
}

export default App
