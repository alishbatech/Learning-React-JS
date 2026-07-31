import './App.css'
import Counter from './Counter'
import LoginCard from './LoginCard'
import SimpleCounter from './SimpleCounter'
import UserDashboard from './UserDashboard'
import PrevStateCounter from './PrevStateCounter'
import BatchingState from './BatchingState'
import UserProfile from './UserProfile' 
import TodoList from './TodoList'



function App() {

 return (
    <>
      {/* <Counter/> */}
      {/* <Counter/> */}
       {/* <LoginCard/> */}
       <UserDashboard isPremium={true}/>
       <UserDashboard isPremium={false}/>
       {/* <SimpleCounter/> */}
       {/* <PrevStateCounter/> */}
       {/* <BatchingState/> */}
    {/* <UserProfile/> */}
    <TodoList/>
    </>
  )
}

export default App
