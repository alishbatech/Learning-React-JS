import React from "react";

function CartSummary({ cartItems, prices }) {
  const totalItems =
    cartItems.reactCourse +
    cartItems.vueCourse +
    cartItems.javascriptCourse;

  const totalPrice =
    prices.reactCourse * cartItems.reactCourse +
    prices.vueCourse * cartItems.vueCourse +
    prices.javascriptCourse * cartItems.javascriptCourse;

  return (
    <div className="mx-auto text-center mt-8 max-w-5xl rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">
                🛒 Cart Summary
      </h2>

      <div className="flex text-lg justify-between gap-8">
        {/* Course Quantities */}
        <div className="flex-1 rounded-lg bg-gray-200 p-4 shadow-md">
          <p className="mb-2 text-gray-800">
            JavaScript: {cartItems.javascriptCourse}
          </p>

          <p className="mb-2 text-gray-800">
            React: {cartItems.reactCourse}
          </p>

          <p className="text-gray-800">
            Vue: {cartItems.vueCourse}
          </p>
        </div>

        {/* Total */}
        <div className="flex-1  rounded-lg bg-gray-200  shadow-md p-4">
          <p className="mb-2 text-gray-800">
            Total Items: {totalItems}
          </p>

          <p className="font-bold text-xl text-green-600">
            Total Price: ${totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;