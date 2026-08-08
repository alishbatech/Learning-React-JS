import React from 'react'
import { useRef } from 'react'

function FocusInput() {
    const inputFocus = useRef(null)

    const handleFocus = () => {
        inputFocus.current.focus();
    }
    return (
        <div style={{
            padding: '30px', backgroundColor: 'skyblue', textAlign: 'center',
            display: 'flex', gap: '15px', borderRadius: '20px',
            justifyContent: 'center', marginTop: '50px'
        }}>
            <input style={{
                paddingInline: '20px', paddingBlock: '8px', border: 'none',
                borderRadius: '20px', boxShadow: '0px 2px 15px black'
            }}
                ref={inputFocus} type="text" placeholder='Enter text...' />
            <button
                style={{
                    paddingInline: '15px', paddingBlock: '8px', border: 'none',
                    borderRadius: '20px', boxShadow: '0px 2px 15px black',
                    backgroundColor: 'lightpink'
                }}
                onClick={handleFocus}>Focus</button>

        </div>
    )
}

export default FocusInput