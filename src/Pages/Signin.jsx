
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Supabase/AuthContext';
import { supabase } from '../libs/supabaseClient';
 

 const Signin = () => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const params = new URLSearchParams(location.search)
  const role = params.get('role')
  const navigate = useNavigate()
  const { session, SignIn } = UserAuth();

const handleSubmit = async (event) => {
  event.preventDefault();
  setError("");
    setLoading(true)
    
  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }


  try {
    const result = await SignIn( email, username, password)


    if(result.success) {
        console.log('Authentication success. Role:', role)  
        setError("")
        const storedRole = localStorage.getItem('role')
        if(storedRole === 'helper') {
            navigate('/dashboard/helper')
            // localStorage.getItem('role', 'helper')
        } else if(storedRole === 'seeker') {
            navigate('/dashboard/seeker')
            // localStorage.getItem('role', 'seeker')
        } else {
            navigate('/')
        }
        console.log(`The role is ${localStorage.getItem('role')}`)  
    } else {
        setError( result.error || 'Signing in failed');
    }
  } catch(err){
        setError("Error occured", error.message)
        console.error(err)
  }finally {
    setLoading(false)
  }

};


    return (
        <div className= 'pb-20'>
            <form onSubmit={handleSubmit} className='container bg-blue-800 gap-1 mt-5 max-w-sm mx-auto p-4 flex flex-col text-white rounded-xl shadow-sm'>
                <h2 className='text-white font-bold text-center text-2xl'>Sign  {role}</h2>
                
                <label>Email: </label>
                <input 
                    type="email"
                    name='email'
                    autoComplete='email'
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='p-2 rounded bg-black focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <label>Username: </label>
                <input 
                    type="text"
                    name='username'
                    autoComplete='username'
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className='p-2 rounded bg-black focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                
                <label>Password: </label>
                <input 
                    type="password"
                    name='current-password'
                    autoComplete='current-password'
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className='p-2 rounded bg-black focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                
                {error && <p className='text-red-400 p-2 rounded text-sm'>{error}</p>}
                
                <p className='gap-1 flex'> 
                    Forgot Password?
                    <Link to='/reset' className='text-blue-300 hover:underline hover:text-white'>
                        Reset
                    </Link>
                </p>
                
                <button 
                    type="submit"
                    disabled={loading}
                    className={`bg-blue-300 p-2 font-bold rounded text-xl mt-2 transition-colors ${
                        loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-400 cursor-pointer'
                    }`}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                
                <p className='flex justify-center gap-1'>
                    Don't have an account?
                    <Link to='/signup' className='text-blue-200 hover:text-blue-100'>
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Signin;
