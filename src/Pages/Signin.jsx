import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


 const Signin = () => {


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = ("")
  const [loading, setLoading] = useState(false)

  
const handleSubmit = async (event) => {
  event.preventDefault();
  setError("");

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }


};


    return (
        <div className='container pb-20'>
            <form onSubmit={handleSubmit} className='bg-blue-800 gap-1 mt-5 max-w-sm mx-auto p-4 flex flex-col text-white rounded-xl shadow-sm'>
                <h2 className='text-white font-bold text-center text-2xl'>Sign In</h2>
                
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
                
                {error && <p className='text-red-400 bg-red-900/50 p-2 rounded text-sm'>{error}</p>}
                
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