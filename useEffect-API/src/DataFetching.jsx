import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

function DataFetching() {
    const [post,setPost]=useState({})
    const [id ,setId]=useState(1)
    const [buttonId ,setButtonId]=useState(1)
    const [isLoading,setisLoading]=useState(false)
    const [isError,setisError]=useState(false)
  

    const handleButtonID=()=>{
        setButtonId(id);
    }
    
    useEffect(()=>{
        setisLoading(true)
        setisError(false)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
          .then(res=>{
            console.log(res)
             setPost(res.data)
    })
      .catch((err)=>{
        setisError(true)
        
    }
    )
      .finally(()=>{
        setisLoading(false)
      })
    },[buttonId])

  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <button type='button' onClick={handleButtonID}>Fetch Data</button>
       <h2>
        { isLoading && <p>Loading...</p>}
        {isError&& <p>Something went wrong</p>}
        {!isLoading&& !isError && <p>{post.title}</p>}
       </h2>
          {/* <ul>
            {
            posts.map((post)=>
            <li key={post.id}>{post.title}</li>
            )
          }
          </ul> */}
    </div>
  )
}

export default DataFetching