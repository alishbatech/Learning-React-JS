import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PredictAge() {
    const [userName,setUserName]=useState('')
    const [useData,setUserData]=useState(null)
    const handlePredictData=()=>{
        axios.get(`https://api.agify.io/?name=${userName}`)
          .then((res)=>setUserData(res.data))
    }

    useEffect(()=>{
        if(!userName) return;
        handlePredictData();
    },[])

  return (
    <div>
        <h1>Predict User's Age</h1>
        <input type="text"
         placeholder='Ex. pedro...'
          value={userName}
          onChange={(e)=>setUserName(e.target.value)} />
          <button onClick={handlePredictData}>Predict Data</button>
          <p>Predict Name: {useData?.name}</p>
          <p>Predict Age: {useData?.age}</p>
          <p>Predict Count: {useData?.count}</p>
    </div>
  )
}

export default PredictAge