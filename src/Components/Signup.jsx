import { FaUser, FaLock } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'

const SignUp = () => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("")


  const handlESubmit = (event) => {
    event.preventDefault();

     if(password1 !== password2) {
      alert("Password did not match")
      return
    }

    alert("registered succesfully")
    
  }
 
  
 

  return (
    <div>
      <form onSubmit={handlESubmit} className='bg-blue-800 gap-1 mt-5 max-w-xl mx-auto p-6 flex flex-col text-white rounded-xl bodaree'>
        <h2 className='text-center p-2   text-white font-bold text-xl'>Sign Up</h2>
        <label>Email: </label>
        <input type="email"
          placeholder= "Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className='p-3 rounded bg-black focus:outline-transparent'
        />
        <label>Username: </label>
        <input type="text"
          placeholder= "Enter your Usename"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='p-3 rounded bg-black focus:outline-transparent'
        />
        <label>Password: </label>
        <input type="password"
          placeholder= "Eter a password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          required
          className='p-3 rounded bg-black focus:outline-transparent'
        />
        <label>Confrim Password: </label>
        <input type="password"
          placeholder= "Re-enter password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
          className='p-3 rounded bg-black focus:outline-transparent shadow-lg'
        />
        <button otype="submit"
        className='bg-blue-300'
        >
          Register
        </button>
      </form>
    </div>
  )
}



export default SignUp 