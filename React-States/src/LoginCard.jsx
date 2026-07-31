import React from 'react'
import { useState } from 'react'

function LoginCard() {
    const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState("")

    const handleLogin = () => {
        setIsLogin(!isLogin)
    }

    const handleChange=(e)=>{
        setMessage(e.target.value)
    }
    return (
        <>
        <button style={{ padding: '10px', fontSize: '20px', marginTop: '50px',width:'auto' }}
            onClick={handleLogin}>
            {isLogin ? "Logout" : "Login"}
        </button>
        <div>
            <label 
            style={{fontSize:'25px', color:'brown',fontWeight:'bold'}}
            htmlFor="101"
            >Message</label>
            <input 
            id='101'
             type="text"
              placeholder='Type message...' 
              value={message} 
              onChange={handleChange} 
              style={{ padding: '10px', fontSize: '20px', margin: '30px',width:'auto' }}
              />
            <h2>{message}</h2>
        </div>
        </>
    )
}

export default LoginCard