import React, { useState } from 'react'

function CreateForm() {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author}
        console.log(blog);
    }


  return (
   <div className='min-h-screen w-full bg-gray-400 flex justify-center  items-center '>
     <div className='max-w-md w-full my-20  mx-8 px-10 py-12  rounded-xl shadow-lg  bg-gray-200 flex flex-col justify-center  text-center '>

        <h2 className='p-1 mb-3 text-pink-600 text-2xl font-bold '>Add a new Blog</h2>

        <form  onSubmit={handleSubmit}
        className=' flex flex-col gap-1 justify-center text-left '>

            <label className='text-lg font-semibold'>Blog Title:</label>
            <input 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className='px-4 py-1 rounded-lg  outline-none  border border-gray-500  focus:ring-2 focus:ring-pink-400 focus:border-none '
            placeholder='Enter title'
            type="text" 
            required
             />

            <label className='text-lg font-semibold'>Blog Body:</label>
           <textarea  
              value={body}
            onChange={(e)=>setBody(e.target.value)}
            className='px-4 py-1 rounded-lg outline-none  border border-gray-500  focus:ring-2 focus:ring-pink-400 focus:border-none '
           placeholder='Enter Text'
           required
           ></textarea>

            <label className='text-lg font-semibold'>Author:</label>
            <select 
               value={author}
            onChange={(e)=>setAuthor(e.target.value)}
             className='px-4 py-1 rounded-lg outline-none border border-gray-500  focus:ring-2 focus:ring-pink-400 focus:border-none  '>
                <option value="Alishba">Alishba</option>
                <option value="Ayesha">Ayesha</option>
            </select>

            <button type='submit'
            className='bg-pink-500 mt-4 p-1 font-semibold shadow-lg rounded-lg hover:bg-pink-600'
            >Add Blog</button>
        </form>
    </div>
   </div>
  )
}

export default CreateForm  