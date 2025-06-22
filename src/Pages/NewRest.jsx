import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../libs/supabaseClient'

const NewReset = () => {

 
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, SetConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handlESubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        if(password !== confirmPassword) {
            setError("Passwords didn't match")
            setLoading(false)
            return
        }

        if (password.length < 6) {
            setError("Password must be atleast 6 characters")
             setLoading(false)
             return
        } 

        const { error: updatError} = await supabase.auth.updateUser({password})
        if(updatError) {
            setError(updatError.message)
            setLoading(fasle)
            return
        }
        alert('password updated successfully')
        navigate('/login')
        setPassword('')
        SetConfirmPassword('')
    }
  return (
    <div className=' pb-20'>
      <form method='Post' onSubmit={handlESubmit} className='container bg-blue-800 gap-1 mt-5 max-w-sm mx-auto p-4 flex flex-col text-white rounded-xl shadow-sm '>
        <h2 className='text-white font-bold text-center text-2xl'> NewReset Password</h2>
         <label>New Password </label>
        <input type="password"
          autoComplete='new-password'
          placeholder= "Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='p-2 rounded bg-black focus:outline-transparent'
        />
         <label>Confirm Password </label>
        <input type="password"
          autoComplete='new-password'
          placeholder= "Re-enter your new password"
          value={confirmPassword}
          onChange={(e) => SetConfirmPassword(e.target.value)}
          required
          className='p-2 rounded bg-black focus:outline-transparent'
        />
        {error && <p className='text-red-600 flex justify-center text-sm'>{error}</p> }

        <button type="submit"
        className={`bg-blue-300 p-2 font-bold rounded text-xl mt-2 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
        disabled={loading}
        >
         {loading ? "validating..." : "validate"}
        </button>
      </form>
    </div>
  )
}


export default NewReset
