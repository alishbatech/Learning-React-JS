import React, { useState, useReducer, act } from "react";

const initialState = [];

const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_TASK":
            if(action.payload==="")
                return state;

            return [
                ...state,
                {
                    id: Date.now(),
                    task: action.payload,
                    isCompleted: false
                }
            ];
        

        case "COM_TASK":
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            );

        case "DEL_TASK":
            return state.filter(
                (item) => item.id !== action.payload.id
            );
         case "CLEAR_TASK":
            return initialState   

        default:
            return state;
    }
};

function TodoManager() {

    const [todos, dispatch] = useReducer(reducer, initialState);
    const [task, setTask] = useState("");

    return (
        <div>
            <h1>Todo Manager</h1>

            <input
                type="text"
                placeholder="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button
                onClick={() =>{
                    dispatch({
                        type: "ADD_TASK",
                        payload: task
                    }),
                    setTask("")
                }}
            >
                Add
            </button>
                
            <div>
                <h2>Tasks</h2>
                {todos.map((item) => (
                    <div key={item.id}>

                        <p
                            style={{
                                textDecoration: item.isCompleted
                                    ? "line-through"
                                    : "none"
                            }}
                        >
                            {item.task}
                        </p>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "COM_TASK",
                                    payload: { id: item.id }
                                })
                            }
                        >
                            {item.isCompleted ? "Undo" : "Done"}
                        </button>

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "DEL_TASK",
                                    payload: { id: item.id }
                                })
                            }
                        >
                            Delete
                        </button>

                    </div>
                ))}
                <button onClick={()=>dispatch({type:"CLEAR_TASK"})}>Clear All</button>
               
            </div>
        </div>
    );
}

export default TodoManager;