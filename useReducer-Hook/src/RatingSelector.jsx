import React, { act, useReducer } from 'react'

const initialstate = ""

const ratingReducer = (state, action) => {
    switch (action.type) {
        case "SET_RATING":
            return '✨'.repeat(action.payload.rating);
        case "RESET":
            return initialstate;
        default:
            return state
    }

}

function RatingSelector() {
    const [rating, dispatch] = useReducer(ratingReducer, initialstate)
    return (
        <div>
            <h2>Rating Selector</h2>
            <h2>Ratings: {rating}</h2>
            <button onClick={() => dispatch({ type: "SET_RATING", payload: { rating: 1 } })}>1</button>
            <button onClick={() => dispatch({ type: "SET_RATING", payload: { rating: 2 } })}>2</button>
            <button onClick={() => dispatch({ type: "SET_RATING", payload: { rating: 3 } })}>3</button>
            <button onClick={() => dispatch({ type: "SET_RATING", payload: { rating: 4 } })}>4</button>
            <button onClick={() => dispatch({ type: "SET_RATING", payload: { rating: 5 } })}>5</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

        </div>
    )
}

export default RatingSelector