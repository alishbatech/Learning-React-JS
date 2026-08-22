import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navigation from './Components/Navigation'
import NotFound from './Components/NotFound'
import ProductDetails from './Components/ProductDetails'
import './App.css'
import Products from './Components/Products'
import Profile from './Components/Profile'
import { Info } from './Components/Profile'
import { Setting } from './Components/Profile'
import Login from './Components/Login'

function App() {

  return (
    <div className='w-full min-h-screen bg-gray-800 flex flex-col gap-10 '>
      <BrowserRouter >
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/profile' element={<Profile />} >
                       <Route path='info' element={<Info/>}/>
                       <Route path='setting' element={<Setting/>}/>
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
