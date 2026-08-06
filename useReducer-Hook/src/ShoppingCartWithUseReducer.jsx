import React, { useDebugValue, useReducer } from 'react'

const initialState = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0

}

const reducer = (state, action) => {
    console.log("Action dispatched:", action);
    switch (action.type) {
        case "ADD_ITEM": {
            const excistingIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            let updatedItems;
            if (excistingIndex >= 0) {
                updatedItems = [...state.items]

                updatedItems[excistingIndex] = {
                    ...updatedItems[excistingIndex],
                    quantity: updatedItems[excistingIndex].quantity + 1
                }

            }
            else {
                updatedItems = [
                    ...state.items,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }

            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedItems.reduce(
                    (total, item) => total + item.quantity * item.price,
                    0
                ),
                totalQuantity: updatedItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                ),

            };
        }
        case "REMOVE_ITEM": {
            const filteredItems = state.items.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                items: filteredItems,
                totalAmount: filteredItems.reduce(
                    (total, item) => total + item.quantity * item.price,
                    0
                ),
                totalQuantity:filteredItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                ),
            }
        }

         case "UPDATE_QUANTITY":{
            if(action.payload.quantity===0){
                return reducer(state,{
                    type:"REMOVE_ITEM",
                    payload: {id: action.payload.id}
                })
            }
            const updatedQuantityItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });

      return {
        ...state,
        items: updatedQuantityItems,
        totalAmount: updatedQuantityItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        totalItems: updatedQuantityItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };
         }
        case "CLEAR_CART":{
            return initialState
        }

        default:
            return state;
    }
}

function ShoppingCartWithUseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const products = [
        { id: 1, name: "React Course", price: 49.99 },
        { id: 2, name: "Node.js Course", price: 39.99 },
        { id: 3, name: "JavaScript Bundle", price: 89.99 },
    ];
    return (
        <>
            <div>
                <h2>Courses</h2>

                {products.map((item) =>
                    <div key={item.id}>
                        <h3>{item.name} - ${item.price}</h3>
                        <button onClick={() =>
                            dispatch({ type: "ADD_ITEM", payload: item })
                        }>Add to Cart</button>
                    </div>
                )}
                <div>
                    <h2>Shoping Cart</h2>

                    {state.items.length === 0 ?
                        (<p>Your Cart is empty</p>)
                        : (<div >
                            {state.items.map((item) => (
                                <div key={item.id} style={{ backgroundColor: 'lightgoldenrodyellow', marginBottom: '5px', padding: '5px' }}>
                                    <h2 style={{ color: 'green' }}>{item.name} </h2>
                                    <p> Price: ${item.price}</p>
                                    <p> Quantity: {item.quantity}</p>

                                    <button onClick={()=>dispatch({type:"UPDATE_QUANTITY",
                                        payload:{id:item.id ,quantity: item.quantity+1 }
                                    })}>
                                        ➕
                                    </button>
                                    <button onClick={()=>dispatch({type:"UPDATE_QUANTITY",
                                        payload:{id:item.id ,quantity: item.quantity-1 }
                                    })}>
                                     ➖
                                    </button>

                                    <button onClick={() => dispatch({
                                        type: "REMOVE_ITEM",
                                        payload: { id: item.id }
                                    })}>Remove</button>
                                </div>
                            ))}
                        </div>
                        )}
                    <h3>Total Items: {state.totalQuantity}</h3>
                    <h3>Total Price: ${state.totalAmount.toFixed(2)}</h3>
                 
                 {state.items.length > 0 && (
            <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
              Clear Cart
            </button>
          )}
                </div>
            </div>

        </>

    )
}

export default ShoppingCartWithUseReducer






