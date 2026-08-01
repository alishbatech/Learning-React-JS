import React, { useState } from 'react'
import ProductCart from './ProductCart'
import CartSummary from './CartSummary'

function ShopingCart() {
    const [cartItems, setCartItems] = useState({
        javascriptCourse: 0,
        reactCourse: 0,
        vueCourse: 0
    })
    const prices = {
        javascriptCourse: 10,
        reactCourse: 20,
        vueCourse: 15
    }

    const onReactAddtoCart = () => {
        setCartItems((prev) => (
            {
                ...prev,
                reactCourse: prev.reactCourse + 1,
            }))
    }
    const onJSAddtoCart = () => {
        setCartItems((prev) => (
            {
                ...prev,
                javascriptCourse: prev.javascriptCourse + 1,
            }))
    }
    const onVueAddtoCart = () => {
        setCartItems((prev) => (
            {
                ...prev,
                vueCourse: prev.vueCourse + 1,
            }))
    }
    return (
        <div className='min-h-screen bg-gray-100 p-8'>
            <h2 className='mb-8 text-center text-3xl font-bold text-gray-800 p-3'>  🛒React Course Store</h2>
            <div className='mx-auto grid max-w-5xl gap-6 md:grid-cols-3'>
                <ProductCart
                name='JavaScript Course'
                price={prices.javascriptCourse}
                quantity={cartItems.javascriptCourse}
                onAddtoCart={onJSAddtoCart}
            />
            <ProductCart
                name='React Course'
                price={prices.reactCourse}
                quantity={cartItems.reactCourse}
                onAddtoCart={onReactAddtoCart}
            />
            <ProductCart
                name='Vue Course'
                price={prices.vueCourse}
                quantity={cartItems.vueCourse}
                onAddtoCart={onVueAddtoCart}
            />
            </div>
            <br />
           
            <CartSummary prices={prices} cartItems={cartItems} />
        </div>
    )
}

export default ShopingCart