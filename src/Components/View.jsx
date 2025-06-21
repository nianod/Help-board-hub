import { useLocation, useNavigate } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'
import { useState } from 'react'

const View = () => {
  
  const location = useLocation()
  const post = location.state?.post
  //const [error, setError] = useState(false)

  const navigate = useNavigate()

  const storedRole = localStorage.getItem('role')
  const handleBack = () => {
     if(storedRole === 'helper') {
        navigate('/dashboard/helper')
    } else if(storedRole === 'seeker') {
    navigate('/dashboard/seeker')
    } else {
        console.log("location not found")
    }
  }

  if (!post) {
    return <p className="text-center text-red-500">No post data found!</p>
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white mt-20 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Category: {post.category}</h1>
      <span className='underline italic'>Description:</span>
      <p className="text-gray-700 mb-3">{post.text}</p>
      <p>Author: {post.user_name}</p>
      <p className="text-sm text-gray-500">Contact via: {post.contact_method} - {post.contact_detail}</p>
      <p className="text-sm text-gray-400 mt-2">Posted on: {new Date(post.created_at).toLocaleString()}</p>
      <button onClick={handleBack} className='flex items-center gap-0.5 bg-blue-500 p-1 rounded mt-5 cursor-pointer hover:bg-blue-600'><FaBackward /> Back </button>
      
     </div>
  )
}

export default View
