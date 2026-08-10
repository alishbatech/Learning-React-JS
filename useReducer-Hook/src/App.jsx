import './App.css'
import CounterWithinit from './CounterWithinit'
import CounterWithReducer from './CounterWithReducer'
import { ShoppingCart } from './ShoppingCart'
import ShoppingCartWithUseReducer from './ShoppingCartWithUseReducer'
import TodoManager from './TodoManager'

function App() {
 
  return (
    <>
    {/* <ShoppingCartWithUseReducer/> */}
     <CounterWithReducer/>
     <br />
     {/* <ShoppingCart/> */}
     {/* <CounterWithinit/> */}
     <TodoManager/>

    </>
  )
}

export default App
