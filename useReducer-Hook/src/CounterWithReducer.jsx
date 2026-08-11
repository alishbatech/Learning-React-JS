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
    <div className="min-h-screen w-full  flex items-center justify-center p-6">
      
      <div className="w-full max-w-md bg-yellow-100 rounded-2xl p-6 shadow-2xl">
        
        <div className="w-full bg-gray-200 p-5 rounded-xl flex flex-col text-center">
          
          <h1 className="w-full bg-gray-400 p-6 mb-4 rounded-xl text-4xl font-bold">
            Count: {count}
          </h1>

          <button
            className="w-full bg-blue-500 text-white p-3 mb-3 rounded-xl hover:bg-blue-600 transition"
            onClick={() => dispatch("increment")}
          >
            Increment
          </button>

          <button
            className="w-full bg-blue-500 text-white p-3 mb-3 rounded-xl hover:bg-blue-600 transition"
            onClick={() => dispatch("decrement")}
          >
            Decrement
          </button>

          <button
            className="w-full bg-blue-500 text-white p-3 mb-3 rounded-xl hover:bg-blue-600 transition"
            onClick={() => dispatch("plusFive")}
          >
            ➕ 5
          </button>

          <button
            className="w-full bg-blue-500 text-white p-3 mb-3 rounded-xl hover:bg-blue-600 transition"
            onClick={() => dispatch("minusFive")}
          >
            ➖ 5
          </button>

          <button
            className="w-full bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 transition"
            onClick={() => dispatch("reset")}
          >
            Reset
          </button>

        </div>
      </div>
    </div>
  );
}

export default CounterWithReducer;