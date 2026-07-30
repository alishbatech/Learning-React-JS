import React from 'react'

function MenuItems({name,price,onOrder}) {
  return (
    <div>
      <h3>{name}_{price}</h3>
      <button onClick={()=>onOrder(name,price)}>Order now</button>
    </div>
  )
}

export default MenuItems