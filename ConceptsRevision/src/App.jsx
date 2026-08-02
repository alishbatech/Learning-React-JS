import { useState } from "react"
import Counter from "./Components/Counter"
import StudentCard from "./Components/StudentCard"
import SkillList from "./Components/SkillList"
import AttendanceToggle from "./Components/AttendanceToggle"


function App() {
 
  return (
    
      <>
      <StudentCard name="Alishba" deptName="Software Eng." semester={3}/>
      <Counter/>
      <SkillList/>
      <AttendanceToggle/>
      </>
    
    
  )
}

export default App
