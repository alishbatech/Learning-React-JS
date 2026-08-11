import React, { useReducer } from 'react'

const initialstate='red';

const colorReducer=(state,action)=>{
        switch(action.type){
            case "SET_RED":
                return state='red'
            case "SET_GREEN":
                return state='green'
            case "SET_YELLOW":
                return state='yellow'
            case "SET_RESET":
                return initialstate;
             default:
                state;   
        }
}

function TraficLight() {


    const [color,dispatch]=useReducer(colorReducer,initialstate)
  return (
    <div style={{backgroundColor:color,padding:'20px',margin:'20px'}}> 
        <h2>Current Trafic Light: {color}</h2>
        <button style={{backgroundColor:'red'}} onClick={()=>dispatch({type:'SET_RED'})}>Red</button>
        <button style={{backgroundColor:'green'}} onClick={()=>dispatch({type:'SET_GREEN'})}>Green</button>
        <button style={{backgroundColor:'yellow'}} onClick={()=>dispatch({type:'SET_YELLOW'})}>Yellow</button>
        <button style={{backgroundColor:'lightgrey'}} onClick={()=>dispatch({type:'SET_RESET'})}>Reset</button>

    </div>
  )
}

export default TraficLight