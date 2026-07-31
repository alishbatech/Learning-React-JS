import CustomButton from './Components/CustomButton'
import './App.css'
import Contact from './Components/Contact'
import NewsLetter from './Components/NewsLetter'
import Menu from './Components/Menu'
import TaskList from './Task-List-Project/TaskList'
import StudentList from './Student-Attendance-List/StudentList'


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
      <br />
      <TaskList/>
      <br />
      <StudentList/>
    </>
  )
}

export default App
