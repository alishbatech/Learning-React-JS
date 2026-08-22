import React from 'react'
import { products } from '../Data/products'
import { useParams } from 'react-router-dom'

function ProductDetails() {

    const { id } = useParams()
 console.log(id)
    const product = products.find((item) => item.id === Number(id))
    console.log(product)
    return (
        <div className='text-white p-2 text-center  font-semibold text-2xl'>
            <h2>ID: {id}</h2>
            <h2> Name: {product?.name}</h2>
            <p>Price: {product?.price}</p>
        </div>
    )
}

export default ProductDetails