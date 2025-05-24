import { useState } from 'react'
import { FaSignOutAlt, FaUserCircle, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const navContentes = {
  imag: "/download.jpg",
  title: "Help Hub"
}

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false)
  const toggles = () => {
    setSideMenu(prev => !prev)
  }

  const handleLogout = () => {
    alert("Logged out")
    setSideMenu(false)
  }

  return (
    <>
      <div className='bg-blue-700 flex items-center justify-between p-2 relative'>  
        <div className='flex items-center gap-3'>
          <img src={navContentes.imag}
            alt={"Help hub Logo"}
            className='rounded-full object-cover h-14 w-14'
          />
          <h1 className='text-white text-2xl font-bold'>{navContentes.title}</h1>
        </div>
        <div className='relative'>
          <button onClick={toggles} className='text-white p-2 cursor-pointer'> 
            <FaUserCircle size={20} /> 
          </button>
          {sideMenu && (
            <div className='absolute right-0 w-40 bg-white rounded p-2 z-50 shadow-md mt-1'> 
              <Link 
                to="/userProfile" 
                className='block px-4 py-2 hover:bg-gray-100 rounded flex items-center' 
                onClick={() => setSideMenu(false)}
              >
                {<FaUser />}
                View Profile
              </Link>
              <button 
                onClick={handleLogout}
                className='w-full text-left px-4 py-2 hover:bg-gray-100 rounded flex items-center cursor-pointer'
              >
                {<FaSignOutAlt />}
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>   
  )
}

export default Header