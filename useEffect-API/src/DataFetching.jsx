import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

function DataFetching() {
    const [post,setPost]=useState({})
    const [id ,setId]=useState("")
    const [buttonId ,setButtonId]=useState("")
    const [isLoading,setisLoading]=useState(false)
    const [isError,setisError]=useState(false)
  

    const handleButtonID=()=>{
        setButtonId(id);
    }
    
    useEffect(()=>{
      if(!buttonId && !id) return;
      
        setisLoading(true)
        setisError(false)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
          .then(res=>{
            console.log(res)
             setPost(res.data)
    })
      .catch((err)=>{
        setisError(true)
        
    })
      .finally(()=>{
        setisLoading(false)
      })
    },[buttonId])

  return (
    <div>
        <input
        placeholder='Search by id'
         type="text" 
         value={id} 
         onChange={e=>setId(e.target.value)} />
        <button type='button' onClick={handleButtonID}>Fetch Data</button>
       <h2>
        { isLoading && <p>Loading...</p>}
        {isError&& <p>Something went wrong</p>}
        {!isLoading&& !isError && 
                <div>
                   <h2>Title {post.id} : {post.title}</h2>
                 <p>Body {post.id} : {post.body}</p>
                </div>
                 }
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