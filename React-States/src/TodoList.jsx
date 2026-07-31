import React from 'react'
import { useState } from 'react'

function TodoList() {
    const [items, setItems] = useState([
        { id: 1, text: "Learning React" ,done:true},
        { id: 2, text: "useState with Array", done:false }
    ])

    const taskAdder = () => {
        const newItem = {
            id: Date.now(),
            text: 'Hooks in React',
            done:false
        }
        // setItems([...items,newItem] )
        setItems(items.concat(newItem))
    }
const taskDelete=(id)=>{
           setItems(items.filter((item)=>item.id!==id))
}
const toogleDone=(id)=>{
   setItems(
    items.map((item)=>{
         if(item.id===id){
            return {...item, done:!item.done}
         }
         return item;
    })
   )
}

    return (
        <div>
            <ul>
                {
                    items.map((item) => {
                        return (
                            <li key={item.id}>
                                <span style={{textDecoration:item.done?"line-through":
                                    "none"
                                }}>{item.text}</span>
                                <button onClick={()=>toogleDone(item.id)}>{item.done?"Done":"Undo"}</button>
                                <button onClick={()=>taskDelete(item.id)}>Delete</button>
                            </li>

                        )
                    })
                }
            </ul>
            <button onClick={taskAdder}>Add Task</button>
        </div>
    )
}

export default TodoList