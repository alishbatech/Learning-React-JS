import React, { useReducer } from "react";

const initialstate = "";

const ratingReducer = (state, action) => {
  switch (action.type) {
    case "SET_RATING":
      return "⭐".repeat(action.payload);

    case "RESET":
      return initialstate;

    default:
      return state;
  }
};

function RatingSelector() {
  const [rating, dispatch] = useReducer(
    ratingReducer,
    initialstate
  );

  return (
    <div className="w-full flex justify-center px-5 pb-10">
      
      <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl text-center">

        <h2 className="text-2xl font-bold mb-4">
          Rating Selector
        </h2>

        <h2 className="text-2xl font-semibold bg-gray-300 shadow-md rounded-xl p-4 mb-5">
          Ratings:{" "}
          <span className="text-2xl">
            {rating || "No rating selected"}
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3">

          <button
            className="px-5 py-3 bg-yellow-400 rounded-xl font-bold hover:bg-yellow-500 transition"
            onClick={() =>
              dispatch({
                type: "SET_RATING",
                payload: 1,
              })
            }
          >
            1 ⭐
          </button>

          <button
            className="px-5 py-3 bg-yellow-400 rounded-xl font-bold hover:bg-yellow-500 transition"
            onClick={() =>
              dispatch({
                type: "SET_RATING",
                payload: 2,
              })
            }
          >
            2 ⭐
          </button>

          <button
            className="px-5 py-3 bg-yellow-400 rounded-xl font-bold hover:bg-yellow-500 transition"
            onClick={() =>
              dispatch({
                type: "SET_RATING",
                payload: 3,
              })
            }
          >
            3 ⭐
          </button>

          <button
            className="px-5 py-3 bg-yellow-400 rounded-xl font-bold hover:bg-yellow-500 transition"
            onClick={() =>
              dispatch({
                type: "SET_RATING",
                payload: 4,
              })
            }
          >
            4 ⭐
          </button>

          <button
            className="px-5 py-3 bg-yellow-400 rounded-xl font-bold hover:bg-yellow-500 transition"
            onClick={() =>
              dispatch({
                type: "SET_RATING",
                payload: 5,
              })
            }
          >
            5 ⭐
          </button>

        </div>

        <button
          className="w-full mt-5 py-3 bg-gray-500 text-white rounded-xl font-semibold hover:bg-gray-600 transition"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>

      </div>
    </div>
  );
}

export default RatingSelector;