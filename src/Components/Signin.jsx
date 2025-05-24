import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {

    const[login, setLogin] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")



    const handlESubmit = (event) => {
        event.preventDefault()
        if(password.length < 6) {
            setError("password too short")
            return;
        } 
        setError("")
        alert("logged successful");
    }
  return (
    <div className='container pb-20'>
      <form method='Post' onSubmit={handlESubmit} className=' bg-blue-800 gap-1 mt-5 max-w-sm mx-auto p-4 flex flex-col text-white rounded-xl shadow-sm '>
        <h2 className='text-white font-bold text-center text-2xl'>Sign In</h2>
        <label>Username: </label>
        <input type="text"
          name='username'
          autoComplete='username'
          placeholder= "Enter your Usename"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='p-2 rounded bg-black focus:outline-transparent'
        />
        <label>Password: </label>
        <input type="password"
          name='current-password'
          autoComplete='current-password'
          placeholder= "Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='p-2 rounded bg-black focus:outline-transparent'
        />
        {error && <p className='text-red-600 flex justify-center text-sm'>{error}</p> }
        <p className='gap-1 flex'> Forgot Password?
            <Link to='/reset' className=' text-blue-300 hover:underline hover:text-white'>
               Reset
            </Link>
        </p>
        <button type="submit"
        className='bg-blue-300 p-2 cursor-pointer font-bold rounded text-xl mt-2'
        >
          Login
        </button>
        <p className='flex justify-center gap-1'>Don't have an account?
            <Link to='/signup'className='text-red-500'>
              Register
            </Link>
           </p>
      </form>
    </div>
  )
}


export default Signin
