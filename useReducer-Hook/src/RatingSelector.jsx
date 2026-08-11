import React, { act, useReducer } from 'react'

const initialstate=""

const ratingReducer=(state,action)=>{
    switch(action.type){
        case "SET_RATING":
            return action.payload;

         case "RESET":
            return initialstate;
         default:
          return  state      
    }

}

function RatingSelector() {
    const [rating,dispatch]=useReducer(ratingReducer,initialstate)
  return (
    <div>
        <h2>Rating Selector</h2>
        <h2>Ratings: {rating}</h2>
        <button onClick={()=>dispatch({type:"SET_RATING",payload:"✨"})}>1</button>
        <button onClick={()=>dispatch({type:"SET_RATING",payload:"✨✨"})}>2</button>
        <button onClick={()=>dispatch({type:"SET_RATING",payload:"✨✨✨"})}>3</button>
        <button onClick={()=>dispatch({type:"SET_RATING",payload:"✨✨✨✨"})}>4</button>
        <button onClick={()=>dispatch({type:"SET_RATING",payload:"✨✨✨✨✨"})}>5</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>

    </div>
  )
}

export default RatingSelector