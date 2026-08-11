import React, { useReducer } from "react";

const initialstate = "white";

const colorReducer = (state, action) => {
  switch (action.type) {
    case "SET_RED":
      return "red";

    case "SET_GREEN":
      return "green";

    case "SET_YELLOW":
      return "yellow";

    case "SET_RESET":
      return initialstate;

    default:
      return state;
  }
};

function TraficLight() {
  const [color, dispatch] = useReducer(colorReducer, initialstate);

  return (
    <div className="w-full flex justify-center px-5 pb-10">
      
      <div style={{backgroundColor:color}} className="w-full max-w-md  rounded-2xl p-6 shadow-xl">
        
        <h2 className="text-2xl p-5 font-bold text-center mb-6">
          Current Traffic Light:{" "}
          <span className="capitalize">{color}</span>
        </h2>

        <div className="flex flex-col gap-3">

          <button
            className="w-full bg-red-500 text-white font-semibold py-3 rounded-xl hover:bg-red-600 transition"
            onClick={() => dispatch({ type: "SET_RED" })}
          >
            🔴 Red
          </button>

          <button
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-xl hover:bg-green-600 transition"
            onClick={() => dispatch({ type: "SET_GREEN" })}
          >
            🟢 Green
          </button>

          <button
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-500 transition"
            onClick={() => dispatch({ type: "SET_YELLOW" })}
          >
            🟡 Yellow
          </button>

          <button
            className="w-full bg-gray-400 text-white font-semibold py-3 rounded-xl hover:bg-gray-500 transition"
            onClick={() => dispatch({ type: "SET_RESET" })}
          >
            Reset
          </button>

        </div>
      </div>
    </div>
  );
}

export default TraficLight;