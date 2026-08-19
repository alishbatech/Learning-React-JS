import { Routes, Route, Link, BrowserRouter, NavLink } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Student from './Components/Student'
import Profile from './Components/Profile'
import StudentDetails from './Components/StudentDetails'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <nav>


        <NavLink to='/'>Home</NavLink>  |
        <NavLink to='/about'>About</NavLink> |
        <NavLink to='/student'>Student</NavLink>  |
        <NavLink to='/profile'>Profile</NavLink>
      </nav>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/student' element={<Student />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/student/:id' element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
