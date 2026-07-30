import React from 'react'
import MenuItems from './MenuItems'
function Menu() {
    const orderHandler=(name,price)=>{
alert(`Your order: ${name} for ${price}Rs.`)
    }
  return (
    <div>
        <h2>Our Menus</h2>
        <MenuItems name='Pizza' price='1200' onOrder={orderHandler} />
        <MenuItems name='Burger' price='500' onOrder={orderHandler} />
    </div>
  )
}

export default Menu