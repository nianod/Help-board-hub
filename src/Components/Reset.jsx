import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Reset = () => {

 
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")



    const handlESubmit = (event) => {
        event.preventDefault()
    }
  return (
    <div className='container pb-20'>
      <form method='Post' onSubmit={handlESubmit} className=' bg-blue-800 gap-1 mt-5 max-w-sm mx-auto p-4 flex flex-col text-white rounded-xl shadow-sm '>
        <h2 className='text-white font-bold text-center text-2xl'> Reset Password</h2>
         <label>Email: </label>
        <input type="email"
          autoComplete='email'
          placeholder= "Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='p-2 rounded bg-black focus:outline-transparent'
        />
        {error && <p className='text-red-600 flex justify-center text-sm'>{error}</p> }

        <button type="submit"
        className='bg-blue-300 p-2 cursor-pointer font-bold rounded text-xl mt-2'
        >
          Reset
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


export default Reset
