import axios from 'axios'
import React, { useEffect, useState } from 'react'

function FetchCatFacts() {
    const [catFact,setCatFact]=useState('')

 const handleCatFact=()=>{
        axios.get('https://catfact.ninja/fact')
          .then((res)=>setCatFact(res.data.fact))
      }

    useEffect(()=>{
      handleCatFact()
    },[])

  return (
    <div>
        <h1>Fetch CatFacts</h1>
        <button onClick={handleCatFact}>Fetch CatFact</button>
        <p>{catFact}</p>
    </div>
  )
}

export default FetchCatFacts