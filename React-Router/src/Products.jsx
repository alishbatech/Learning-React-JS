import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    return (
        <div>
            <h2> Your Products</h2>
            <p>For Laptop <Link to='laptop'>Laptop</Link></p>
            <p>For Phone  <Link to='phone'>Phone</Link></p>
            <br />
            <Outlet />
        </div>
    )
}

export default Products