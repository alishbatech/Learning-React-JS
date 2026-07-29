import './App.css'
import Student from './Components/Student'
import StudentStatus from './Components/StudentStatus'
import StudentNotification from './Components/StudentNotification'
import StudentResult from './Components/StudentResult'

function App() {

  return (
    <>
      <Student name='Ali' rollno='233711' isPassed={true}/>
      <Student name='Aliha' rollno='233712' isPassed={false}/>
     <br />
        <StudentStatus isOnline={true} />
        <StudentStatus isOnline={false} />
        <br />
        <StudentNotification isNotification={true} />
        <StudentNotification isNotification={false} />
        <br />
        <StudentResult marks={75}/>
        <StudentResult marks={85}/>
        <StudentResult marks={45}/>
    </>
  )
}

export default App
