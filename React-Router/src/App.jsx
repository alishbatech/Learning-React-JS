import './App.css'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Laptop from './Laptop'
import Phone from './Phone'
import Products from './Products'

function App() {

  const User = () => {
    const { id } = useParams()
    return (
      <h2>User Profile id: {id}</h2>
    )
  }
  const NotFound = () => {
    return (<h2>404- Page Not Found</h2>)
  }
  return (

    <BrowserRouter>
      <h1>React Router Example</h1>
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/about'>About</Link> |
        <Link to='/contact'>Contact</Link> |
        <Link to='/Products'>Products</Link> |
        <Link to='/user/1'>User</Link>
      </nav>
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} >
          <Route path='laptop' element={<Laptop />} />
          <Route path='phone' element={<Phone />} />

        </Route>
        <Route path='/user/:id' element={<User />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
