import React, { useContext } from 'react'
import { Context } from './Context'

function Navbar() {
    const {language,setLanguage}=useContext(Context)

    const toogleLanguage=()=>{
        setLanguage({
          ...language,
            lang:language.lang==="English"?"Urdu":"English"

        })
    }
  return (
    <div>
        <h2>Navbar</h2>
         <div style={{
      backgroundColor:'grey' , color:'whitesmoke',padding:'20px',
      border: '2px solid skyblue', borderRadius: '40px'
    }}>
      <h2>Current Language: {language.lang}</h2>
      <button
        style={{
          padding: '10px', backgroundColor: 'skyblue', border: 'none',
          borderRadius: '15px', boxShadow: '0px 2px 15px black',
        }}
        onClick={toogleLanguage}>
        Toogle Language
      </button>
    </div>
    </div>
  )
}

export default Navbar