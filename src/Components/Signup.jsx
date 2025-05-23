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

     if(setPassword1 !== setPassword2) {
      alert("Password did not match")
      return
    }
    setRegister(true)
    alert("registered succesfully")
    
  }
 
  
 

  return (
    <div>
      <form onSubmit={handlESubmit} >
        <label>Email: </label>
        <input type="email"
          placeholder= "Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Username: </label>
        <input type="text"
          placeholder= "Enter your Usename"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password: </label>
        <input type="password"
          placeholder= "Eter a password"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
          required
        />
        <label>Confrim Password: </label>
        <input type="password"
          placeholder= "Re-enter password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        <button otype="submit">
          Register
        </button>
      </form>
    </div>
  )
}



export default SignUp 