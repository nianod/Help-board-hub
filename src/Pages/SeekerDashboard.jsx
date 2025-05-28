import React from 'react'
import { Link } from 'react-router-dom'
const SeekerDashboard = () => {
  return (
    <div>
      <button className='p-3 bg-red-400 rounded mt-5 m-4 cursor-pointer font-bold'>
      <Link to='/post'>
     
        Post help request
         </Link>
         </button>
    </div>
  )
}

export default SeekerDashboard
