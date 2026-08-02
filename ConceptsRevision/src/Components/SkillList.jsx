import React, { useState } from 'react'

function SkillList() {
  const [inputVal, setInputVal] = useState("")
  const [skills, setSkills] = useState([
    { id: 1, skill: 'HTML', done: false },
    { id: 2, skill: 'CSS', done: false },
  ])
  const handleAddSkill = () => {
    if (inputVal.trim() === "") return;
    const newObj = {
      id: Date.now(),
      skill: inputVal,
      done: false
    }
    setSkills([...skills, newObj])
    setInputVal("")
  }

  const hadleDelSkill = (id) => {
    const delSkill = skills.filter((skill) => skill.id !== id)
    setSkills(delSkill)
  }
  const hadleDoneSkill = (id) => {
    setSkills(
      skills.map((item) => 
        item.id === id ? { ...item, done: !item.done }: item
    )
    )
  }

  return (
    <div style={{
      border: '2px solid red',
      width: '250px',
      padding: '20px',
      borderRadius: '20px',
      margin: '20px'
    }}>
      <h2>My Skill</h2>


      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder='Enter new task...'
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleAddSkill}>Add</button>
      </div>

      <div>
        {skills.map((skill) => (
          <div key={skill.id}
            style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>

            <span style={{
              textDecoration: skill.done ? 'line-through' : 'none',
              color: skill.done ? 'gray' : 'black'
            }}>
              {skill.skill}
            </span>
            <button onClick={() => hadleDelSkill(skill.id)}>
              Delete
            </button>
            <button onClick={() => hadleDoneSkill(skill.id)}>
              {skill.done ? "Undo" : "Done"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}


export default SkillList