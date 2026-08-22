import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Login from './Login'


export function Info() {

    return (
        <div className='text-white mt-10 text-2xl text-center'>
            <h2 className='text-white '>Your Info</h2>
        </div>
    )
}
export function Setting() {
    return (
        <div className='text-white mt-10 text-2xl text-center'>
            <h2 className='text-white '>Your Setting</h2>
        </div>
    )
}


function Profile() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <div className='text-blue-600 text-2xl text-center flex flex-col '>
            <h2 className='text-white mb-10'>Your Profile</h2>
            <div className='text-blue-600 text-2xl text-center'>
                <Link to='info'>Info</Link> |
                <Link to='setting'>Setting</Link>
            </div>
            <Outlet />

            <button className='text-white text-md mt-5 mx-80 bg-blue-600 p-2 rounded-xl' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Profile