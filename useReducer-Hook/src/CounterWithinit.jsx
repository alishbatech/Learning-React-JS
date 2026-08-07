import React, { useReducer } from "react";

function CounterWithinit() {
    const initialCount = 0;

    const countReducer = (state, action) => {
        switch (action) {
            case "increment":
                return state + 1;

            case "decrement":
                return state - 1;

            case "reset":
                return initialCount;

            default:
                return state;
        }
    };
    const init = (initialVal) => {
        console.log("init function called..this only runs once.")

        const saveCount = localStorage.getItem("count");
        if (saveCount !== null) {
            console.log("Found saved count:", saveCount)
            return parseInt(saveCount);
        }
        console.log("No saved count: ", initialVal)
        return initialVal;
    }

    const [count, dispatch] = useReducer(countReducer, initialCount, init);

    return (
        <div>
            <h1>Count: {count}</h1>

            <button onClick={() => dispatch("increment")}>
                Increment
            </button>

            <button onClick={() => dispatch("decrement")}>
                Decrement
            </button>

            <button onClick={() => dispatch("reset")}>
                Reset
            </button>
        </div>
    );
}

export default CounterWithinit;