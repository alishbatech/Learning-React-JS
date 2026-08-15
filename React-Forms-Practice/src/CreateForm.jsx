import React, { useState } from 'react'

function CreateForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length > 10) {
            setIsError(true);
            setError('Title should not exceed than 10 char.')
            return
        }
        if (body.length > 20) {
            setIsError(true);
            setError('Body should not exceed than 20 char.')
            return
        }
        if (author === "") {
            setIsError(true);
            setError('Please Select an Author.')
            return
        }
        setTitle('')
        setBody('')
        setAuthor('')
        setError('')
        setIsError(false)
        setIsSuccess(true)

    }


    return (
        <div className='min-h-screen w-full bg-gray-400 flex justify-center  items-center '>
            <div className='max-w-md w-full my-20  mx-8 px-10 py-12  rounded-xl shadow-lg  bg-gray-200 flex flex-col justify-center  text-center '>

                {isSuccess ? (
                    <div className='flex flex-col gap-2'>
                        <button className='bg-pink-400  p-2  w-20 font-semibold shadow-lg rounded-lg hover:bg-pink-500' onClick={() => setIsSuccess(false)}>⬅Back</button>
                        <p className='p-3 m-2 rounded-xl bg-gray-300 text-green-700 text-xl font-bold '>🎉 Your Blog Added Successfully!</p>
                    </div>
                ) : !isError ? (
                    <div>
                        <h2 className='p-1 mb-3 text-pink-600 text-2xl font-bold '>Add a new Blog</h2>
                        <form onSubmit={handleSubmit}
                            className=' flex flex-col gap-1 justify-center text-left '>

                            <label className='text-lg font-semibold'>Blog Title:</label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className='px-4 py-1 rounded-lg  outline-none  border border-gray-500  focus:ring-2 focus:ring-pink-400 focus:border-none '
                                placeholder='Enter title'
                                type="text"
                                required
                            />

                            <label className='text-lg font-semibold'>Blog Body:</label>
                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                className='px-4 py-1 rounded-lg outline-none  border border-gray-500  focus:ring-2 focus:ring-pink-400 focus:border-none '
                                placeholder='Enter Text'
                                required
                            ></textarea>

                            <label className='text-lg font-semibold'>Author:</label>
                            <select

                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className='px-4 py-1 rounded-lg outline-none border border-gray-500  focus:ring-2 focus:ring-pink-400 focus:border-none  '>
                                <option value="">Select Author</option>
                                <option value="Alishba">Alishba</option>
                                <option value="Ayesha">Ayesha</option>
                            </select>

                            <button type='submit'
                                className='bg-pink-500 mt-4 p-1 font-semibold shadow-lg rounded-lg hover:bg-pink-600'
                            >Add Blog</button>
                        </form>
                    </div>
                ) : (
                    <div className='flex flex-col gap-2'>
                        <button className='bg-pink-400  p-2  w-20 font-semibold shadow-lg rounded-lg hover:bg-pink-500' onClick={() => setIsError(false)}>⬅Back</button>
                        <p className='p-3 m-2 rounded-xl bg-gray-300 text-red-700 text-xl font-bold '>⚠Error: {error}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreateForm  