import React from 'react'

function ProductCart({name,price,quantity,onAddtoCart}) {
  return (
    <div className=' text-center rounded-xl bg-white p-6 shadow-md'>
        <h3 className='mb-3 text-xl text-gray-800 font-bold'>{name}</h3>
        <p className='mb-2 text-lg font-semibold text-green-600'>Price: ${price} </p>
        <p className='mb-4 text-gray-700'>Quantity: {quantity} </p>
        <button className='w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white
         hover:bg-blue-600 ' 
        onClick={onAddtoCart}>
          Add to cart
          </button>
    </div>
  )
}

export default ProductCart