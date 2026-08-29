import React, { useEffect, useState } from 'react'

function Todo() {
    
    const [tasks, setTasks] = useState(()=>{
        const savedData=localStorage.getItem('tasks')
        return savedData ? JSON.parse(savedData): []
    })
    const [taskText, setTaskText] = useState('')

    useEffect(()=>{
         localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

    const handleTask = () => {
        if (taskText === '') return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }
        setTasks([...tasks, newTask])
        setTaskText('')
    }

    const handleDelete = (id) => {
        const filteredTask = tasks.filter((item) => item.id != id)

        setTasks(filteredTask)
    }

    return (
        <div>
            <div>
                <input type="text"
                placeholder='Enter task...'
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                     />
                <button onClick={handleTask}>Add</button>
            </div>
            <div>
                {
                    tasks.length===0 ? (
                        <p>Your todo is empty</p>

                    ) : (
                        tasks.map((item) => (
                            <div key={item.id}>
                                <h2>{item.text}</h2>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        ))

                    )
                }


            </div>
        </div>
    )
}

export default Todo