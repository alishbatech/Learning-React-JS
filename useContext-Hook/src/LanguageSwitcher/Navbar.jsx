import React, { useContext } from 'react'
import { Context } from './Context'

function Navbar() {
  const { language, setLanguage } = useContext(Context)

  const toogleLanguage = () => {
    setLanguage({
      ...language,
      lang: language.lang === "English" ? "Urdu" : "English"

    })
  }
  return (

    <div style={{
      backgroundColor: 'lightgrey', color: 'black', padding: '20px',
      border: '2px solid skyblue', borderRadius: '40px'
    }}>
      <h2 style={{ borderBlock: '2px dotted darkgreen', padding: '5px' }}>
        Navbar
      </h2>
      <h2>Current Language: <span style={{ color: 'green' }}>
        {language.lang}</span>
      </h2>
      <button
        style={{
          padding: '10px', backgroundColor: 'skyblue', border: 'none',
          borderRadius: '15px', boxShadow: '0px 2px 15px black',
        }}
        onClick={toogleLanguage}>
        Toogle Language
      </button>
    </div>

  )
}

export default Navbar