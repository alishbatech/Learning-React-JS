import React from 'react'
import TaskItems from './TaskItems';

function TaskList() {
  const tasks = [
    {
      id: 1,
      title: 'Learn React'
    },
    {
      id: 2,
      title: 'Practice Props'
    },
    {
      id: 3,
      title: 'Practice Events'
    }
  ];

  const taskHandler=(task)=>{
         alert(`Your ${task} is deleted!`)
  }

  return (
    <div>
    {
      tasks.map((task) =>(
    <TaskItems 
    key={task.id}
    task={task.title}
      onDelete={taskHandler}

    />
  ))
    }
      
    </div>
  )
}

export default TaskList