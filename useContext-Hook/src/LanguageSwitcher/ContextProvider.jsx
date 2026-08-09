import React, { useState } from 'react'
import { Context } from './Context'

function ContextProvider({children}) {
    const [language,setLanguage]=useState({
        lang:"English"
    })
  return (
    <Context value={{language,setLanguage}}>{children}</Context>
  )
}

export default ContextProvider