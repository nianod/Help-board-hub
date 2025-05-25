import { FaUser, FaLock } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

const SignUp = () => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("")
  const [error, setError] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const role = params.get('role')

  const handlESubmit = (event) => {
    event.preventDefault();

     if(password1 !== password2) {
      setError("Passwords did not match")
    } else if (password1.length < 6 || password2.length < 6) {
      setError("Password too short")
    } else {
      setError("")
      alert("registerd successfully")
      //Redirect to respective dashboard as selected in home page


      if(role === 'helper') {
        navigate('/dashboard/helper')
      } else if (role === 'seeker') {
        navigate('/dashboard/seeker')
      } else {
        navigate('/')
      }
    }
    
  }
 
  return (
    <div className='container pb-20'>
      <form method='POST' onSubmit={handlESubmit} className=' bg-blue-800 gap-1 mt-5 max-w-sm mx-auto p-4 flex flex-col text-white rounded-xl shadow-sm '>
        <h2 className='text-white font-bold text-center text-2xl'>Sign Up</h2>
         <label>Email: </label>
        <input type="email"
          autoComplete='email'
          placeholder= "Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='p-2 rounded bg-black focus:outline-transparent'
        />
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
          autoComplete='new-password'
          placeholder= "Enter a password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          required
          className='p-2 rounded bg-black focus:outline-transparent'
        />
        <label>Confrim Password: </label>
        <input type="password"
          autoComplete='new-password'
          placeholder= "Re-enter password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
          className='p-2 rounded bg-black focus:outline-transparent shadow-lg'
        />
        {error && <p className='text-red-600 flex justify-center text-sm'>{error}</p> }
        <button otype="submit"
        className='bg-blue-300 p-2 cursor-pointer font-bold rounded text-xl mt-5'
        >
          Register
        </button>
        <p className='flex justify-center gap-1'>Have an account?
            <Link to='/Login'className='text-red-500'>
              Login
            </Link>
           </p>
      </form>
    </div>
  )
}



export default SignUp 