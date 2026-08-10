import React, { useReducer } from "react";

function CounterWithReducer() {
  const initialCount = 0;

  const countReducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "plusFive":
        return state + 5;
      case "minusFive":
        return state - 5;
      case "reset":
        return initialCount;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(countReducer, initialCount);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch("increment")}>
        Increment
      </button>

      <button onClick={() => dispatch("decrement")}>
        Decrement
      </button>

      <button onClick={() => dispatch("plusFive")}>
        ➕ 5
      </button>

      <button onClick={() => dispatch("minusFive")}>
        ➖ 5
      </button>

      <button onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default CounterWithReducer;