import './App.css'
import CounterWithinit from './CounterWithinit'
import CounterWithReducer from './CounterWithReducer'
import RatingSelector from './RatingSelector'
import { ShoppingCart } from './ShoppingCart'
import ShoppingCartWithUseReducer from './ShoppingCartWithUseReducer'
import TodoManager from './TodoManager'
import TraficLight from './TraficLight'

function App() {
 
  return (
    <>
    {/* <ShoppingCartWithUseReducer/> */}
     <CounterWithReducer/>
     <br />
     {/* <ShoppingCart/> */}
     {/* <CounterWithinit/> */}
     <TodoManager/>
     <TraficLight/>
     <RatingSelector/>

    </>
  )
}

export default App
