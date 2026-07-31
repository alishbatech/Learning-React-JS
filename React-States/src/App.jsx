import './App.css'
import Counter from './Counter'
import LoginCard from './LoginCard'
import SimpleCounter from './SimpleCounter'
import UserDashboard from './UserDashboard'
import PrevStateCounter from './PrevStateCounter'

function App() {

 return (
    <>
      <Counter/>
      <Counter/>
       <LoginCard/>
       <UserDashboard isPremium={true}/>
       <UserDashboard isPremium={false}/>
       <SimpleCounter/>
       <PrevStateCounter/>
    </>
  )
}

export default App
