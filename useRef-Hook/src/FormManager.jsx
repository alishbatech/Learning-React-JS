import React from 'react'
import { useRef } from 'react'

function FormManager() {

    const focusName = useRef(null)
    const focusEmail = useRef(null)
    const focusPassword = useRef(null)


    const handleName = () => {
        focusName.current.focus()
    }
    const handleReset=()=>{
        focusName.current.value=""
        focusEmail.current.value=""
        focusPassword.current.value=""
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    const name = focusName.current.value.trim()
    const  email = focusEmail.current.value.trim()
      const password = focusPassword.current.value.trim()
        
        if (name && email && password) {
            alert("Your Form is Submit🎉")
        }
        else {
            alert("Please fill your form correctly.")

        }
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <div style={{
                padding: '30px', backgroundColor: 'skyblue', textAlign: 'center',
                display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '20px',
                justifyContent: 'center', alignItems: 'center', margin: '50px'
            }}>
                <h2>Form Manager</h2>

                <div style={{ display: 'flex', flexDirection:'column', gap: '20px', margin: '30px' }}>
                    <div style={{display:'flex',gap:'20px',color:'black'}}>
                        <label htmlFor="">Name:</label>
                    <input ref={focusName}
                        style={{
                            paddingInline: '20px', paddingBlock: '8px', border: 'none',
                            borderRadius: '20px', boxShadow: '0px 2px 15px black'
                        }}
                        type="text" placeholder='Enter your name' />
                    </div>


                   <div style={{display:'flex',gap:'20px',color:'black'}}>
                     <label htmlFor="">Email:</label>
                    <input ref={focusEmail}
                        style={{
                            paddingInline: '20px', paddingBlock: '8px', border: 'none',
                            borderRadius: '20px', boxShadow: '0px 2px 15px black'
                        }}
                        type="email" placeholder='Enter email' />
                   </div>

                  <div style={{display:'flex',gap:'20px',color:'black'}}>
                      <label htmlFor="">Password:</label>
                    <input ref={focusPassword}
                        style={{
                            paddingInline: '20px', paddingBlock: '8px', border: 'none',
                            borderRadius: '20px', boxShadow: '0px 2px 15px black'
                        }}
                        type="password" placeholder='Enter password' />

                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                    <button
                        type='submit'
                        style={{
                            paddingInline: '15px', paddingBlock: '8px',
                            borderRadius: '10px', border: 'none', boxShadow: '0px 2px 15px black',
                            backgroundColor: 'limegreen'
                        }} >
                        Submit
                    </button>
                    <button
                    type='button'
                    onClick={handleReset}
                    style={{
                        paddingInline: '15px', paddingBlock: '8px',
                        borderRadius: '10px', border: 'none', boxShadow: '0px 2px 15px black',
                        backgroundColor: 'coral'
                    }} >
                        Reset
                    </button>
                    <button
                    type='button'
                        onClick={handleName}
                        style={{
                            paddingInline: '15px', paddingBlock: '8px',
                            borderRadius: '10px', border: 'none', boxShadow: '0px 2px 15px black',
                            backgroundColor: 'sandybrown'
                        }} >
                        Focus Name
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormManager