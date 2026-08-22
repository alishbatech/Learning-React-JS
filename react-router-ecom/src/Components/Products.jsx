import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div className='text-center' >
        <h2 className='text-white p-2  font-semibold text-2xl'>Your Products</h2>
        <div className='text-blue-600  flex text-center gap-10 mx-80 my-10'>
            <Link to='/products/1'>Laptop</Link>
        <Link to='/products/2'>Phone</Link>
        <Link to='/products/3'>HeadPhones</Link>
        </div>
    </div>
  )
}

export default Products