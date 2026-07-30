import CustomButton from './Components/CustomButton'
import './App.css'
import Contact from './Components/Contact'
import NewsLetter from './Components/NewsLetter'
import Menu from './Components/Menu'

function App() {
 

  return (
    <>
      <CustomButton text='Like'/>
      <CustomButton text='Comment'/>
      <Contact/>
      <br />
      <NewsLetter/>
      <br />
      <Menu/>
    </>
  )
}

export default App
