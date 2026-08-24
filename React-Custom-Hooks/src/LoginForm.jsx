import React from 'react'
import useForm from './hooks/useForm'
import useToggle from './hooks/useToggle'

function LoginForm() {

  const initialValues = {
    username: "",
    email: "",
    password: ""
  }

  const onSubmit = (values) => {
    console.log("Form submitted", values)
  }

  const {
    values,
    handleChange,
    handleSubmit,
    handleReset } = useForm(initialValues, onSubmit)

  const [isOpen, handleToogle ] = useToggle()


  return (
    <div style={{padding:'20px', backgroundColor:'steelblue',textAlign:'center',
      margin:'20px',borderRadius:'20px'
    }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        <input
          type="text"
          name='username'
          placeholder='Enter username'
          value={values.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name='email'
          placeholder='Enter email'
          value={values.email}
          onChange={handleChange}
        />
        <div>
          <input
            type={isOpen ? "text" : "password"}
            name='password'
            placeholder='Enter password'
            value={values.password}
            onChange={handleChange}
          />
          <button type='button' onClick={handleToogle}>{!isOpen ? "Show" : "Hide"}</button>
        </div>
       <div style={{display:'flex', gap:'7px', justifyContent:'center'}}>
         <button type='submit'>Submit</button>
        <button onClick={handleReset}>Reset</button>
       </div>
      </form>


    </div>
  )
}

export default LoginForm