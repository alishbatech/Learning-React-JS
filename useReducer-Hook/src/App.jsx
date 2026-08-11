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
    <div  className="w-full min-h-screen text-xl bg-gray-700" >
      {/* <ShoppingCartWithUseReducer/> */}
      <CounterWithReducer />
      <br />
      {/* <ShoppingCart/> */}
      {/* <CounterWithinit/> */}
      {/* <TodoManager/> */}
      <TraficLight />
      <RatingSelector />
    </div>

  )
}

export default App
