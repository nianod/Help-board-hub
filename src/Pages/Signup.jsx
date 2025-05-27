import { FaUser, FaLock } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useAuth } from '../supabase/AuthContext';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const role = params.get('role');
  const { signupNewUser } = useAuth(); // Using auth context

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    // Validation
    if (password1 !== password2) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password1.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      // Register user with Supabase
      const { success, error: authError } = await signupNewUser(
        email,
        password1,
        username
      );

      if (!success) {
        throw new Error(authError || "Registration failed");
      }

      // Redirect based on role
      if (role === 'helper') {
        navigate('/dashboard/helper');
      } else if (role === 'seeker') {
        navigate('/dashboard/seeker');
      } else {
        navigate('/');
      }

    } catch (err) {
      setError(err.message);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container pb-20'>
      <form 
        onSubmit={handleSubmit} 
        className='bg-blue-800 gap-1 mt-5 max-w-sm mx-auto p-4 flex flex-col text-white rounded-xl shadow-sm'
      >
        <h2 className='text-white font-bold text-center text-2xl'>Sign Up</h2>
        
        {/* Email Field */}
        <div className="relative mb-4">
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

        {/* Username Field */}
        <div className="relative mb-4">
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

        {/* Password Field */}
        <div className="relative mb-4">
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
              minLength={6}
              className='w-full p-2 pl-10 rounded bg-black focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="relative mb-4">
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
              minLength={6}
              className='w-full p-2 pl-10 rounded bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg'
            />
          </div>
        </div>

        {error && (
          <p className='text-red-400 bg-red-900/50 p-2 rounded text-sm mb-2'>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-300 p-2 font-bold rounded text-xl mt-5 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-400 cursor-pointer'
          }`}
        >
          {loading ? 'Registering...' : 'Register'}
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