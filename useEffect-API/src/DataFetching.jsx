import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

function DataFetching() {
    const [post,setPost]=useState({})
    const [id ,setId]=useState(1)
    const [buttonId ,setButtonId]=useState(1)

    const handleButtonID=()=>{
        setButtonId(id);
    }
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
          .then(res=>{
            console.log(res)
             setPost(res.data)
    })
      .catch(err=>console.log(err))
    },[buttonId])

  return (
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)} />
        <button type='button' onClick={handleButtonID}>Fetch Data</button>
        <h2>Title{post.id}: {post.title}</h2>
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