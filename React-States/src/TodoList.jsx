import React, { useState } from 'react'

function TodoList() {
  const [items, setItems] = useState([
    { id: 1, text: "Learning React", done: false },
    { id: 2, text: "useState with Array", done: false }
  ])

  const taskAdder = () => {
    const newItem = {
      id: Date.now(),
      text: "Hooks in React",
      done: false
    }

    setItems(prevItems => [...prevItems, newItem])
  }

  const taskDelete = (id) => {
    setItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    )
  }

  const toggleDone = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, done: !item.done }
          : item
      )
    )
  }

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.done ? "line-through" : "none"
              }}
            >
              {item.text}
            </span>

            <button onClick={() => toggleDone(item.id)}>
              {item.done ? "Undo" : "Done"}
            </button>

            <button onClick={() => taskDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={taskAdder}>
        Add Task
      </button>
    </div>
  )
}

export default TodoList