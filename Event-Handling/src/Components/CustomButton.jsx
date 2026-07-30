import React from 'react'

function CustomButton({text}) {
name="Alishba";
    const btnhandler=(e)=>{
        // console.log(e.target)
        // console.log(`Hey ${name}, ${text} button is clicked. `)
    }
    return (
        <button onClick={btnhandler}
            style={{
                width: '90px',backgroundColor:'lightpink',
                padding: '8px', margin: '50px',
                fontSize: '18px',borderRadius:'20px'
            }}>
            {text}
        </button>
    )
}

export default CustomButton