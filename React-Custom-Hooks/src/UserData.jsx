import React from 'react'
import useFetch from './hooks/useFetch'

function UserData() {

    const {data, isError, isLoading}=useFetch("https://jsonplaceholder.typicode.com/users")

    if(isLoading)return( <p>Loading....</p> )
    if(isError)return( <p>Something went wrong!</p> )
  return (
    <div>
         <ul>
            {
                data.map(user=>(
                    <li key={user.id}>Name: {user.name} - Email: {user.email}</li>
                ))
            }
         </ul>
    </div>
  )
}

export default UserData