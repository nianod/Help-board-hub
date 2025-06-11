import { FaUser, FaLock } from 'react-icons/fa';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { UserAuth } from '../Supabase/AuthContext';

const SignUp = () => {

const [email, setEmail] = useState("")
const [username, setUsername] = useState("")
const [password1, setPassword1] = useState("")
const [password2, setPassword2] = useState("")
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)

const { session, registerNewUser } = UserAuth()
console.log(session);

const location = useLocation()
const navigate = useNavigate()
const params = new URLSearchParams(location.search)
const role = params.get('role')


  
const handleSubmit = async (event) => { 
  event.preventDefault();
  setLoading(true)

   
  if (password1 !== password2) {
    setError("Passwords do not match");
    setLoading(false)
    return;
  }
 if (password1.length < 6) {
    setError("Password must be at least 6 characters");
    setLoading(false)
    return;
}
 
  try {
    const result = await registerNewUser(email, username, password1, password2)

    if(result.success) {
      setError("")
       if (role === 'helper') {
      navigate('/dashboard/helper');
      localStorage.setItem('role', 'helper')
    } else if (role === 'seeker') {
      navigate('/dashboard/seeker');
      localStorage.setItem('role', 'seeker')
    } else {
      navigate('/');
    }

    } else {
      setError(result.error || "Registration failed");
    }

  } catch (err) {
    setError("Unexpected error occurred")
    console.err(err)
  } finally {
    setLoading(false)
  }

 
  
};

  return (
    <div className= 'pb-20'>
      <form 
        onSubmit={handleSubmit} 
        className='container bg-blue-800 gap-1 mt-5 max-w-sm mx-auto p-4 flex flex-col text-white rounded-xl shadow-sm'
      >
        <h2 className='text-white font-bold text-center text-2xl'>Sign Up</h2>
        
        <div className="relative mb-2">
          <label className="block mb-1">Email:</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaUser className="text-gray-400" />
            </span>
            <input
              type="email"
              autoComplete='email'
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full p-2 pl-10 rounded bg-black focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        <div className="relative mb-2">
          <label className="block mb-1">Username:</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaUser className="text-gray-400" />
            </span>
            <input
              type="text"
              name='username'
              autoComplete='username'
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='w-full p-2 pl-10 rounded bg-black focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        <div className="relative mb-2">
          <label className="block mb-1">Password:</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-400" />
            </span>
            <input
              type="password"
              autoComplete='new-password'
              placeholder="Enter a password (min 6 characters)"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
              className='w-full p-2 pl-10 rounded bg-black focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        <div className="relative">
          <label className="block mb-1">Confirm Password:</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-400" />
            </span>
            <input
              type="password"
              autoComplete='new-password'
              placeholder="Re-enter password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
              className='w-full p-2 pl-10 rounded bg-black focus:outline-none  focus:ring-2 focus:ring-blue-500 shadow-lg'
            />
          </div>
        </div>

        {error && (
          <p className='text-red-400 rounded text-sm'>
            {error}
          </p>
        )}

        <button
          type="submit"
          className='bg-blue-300 p-2 mt-5 font-bold rounded text-xl cursor-pointer transition-colors'
        >
         {loading ? "Signing up ..." : "Sign up"}
        </button>

        <p className='flex justify-center gap-1 mt-2'>
          Already have an account?
          <Link to='/login' className='text-blue-200 hover:text-blue-100'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;