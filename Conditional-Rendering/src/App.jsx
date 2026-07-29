import './App.css'
import Student from './Components/Student'
import StudentStatus from './Components/StudentStatus'
function App() {

  return (
    <>
      <Student name='Ali' rollno='233711' isPassed={true}/>
      <Student name='Aliha' rollno='233712' isPassed={false}/>
     <br />
        <StudentStatus isOnline={true} />
        <StudentStatus isOnline={false} />
    </>
  )
}

export default App
