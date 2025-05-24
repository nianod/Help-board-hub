import { useState } from 'react'
import { FaLeaf, FaUser } from 'react-icons/fa'
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
     <div className='bg-blue-700 flex  items-center justify-between p-2'>
        <div className='flex items-center'>
          <img src= {navContentes.imag}
          alt={"Help hub Logo"}
          className='rounded-full object-cover h-14 w-14'
          />
          <h1 className='text-white text-2xl font-bold'>{navContentes.title}</h1>
        </div>
        <div>
          <button onClick={toggles}> {<FaUser />} </button>
          {sideMenu && ( <div className='absolue right-0 w-30 bg-white rounded p-2 z-50'>
            <Link to="/userProfile" className='block px-4 py-2' onClick={() => setSideMenu(false)}>
            view Profile
            </Link>
            <button 
              onClick={handleLogout}
              className='w-full text-left px-4'
            ></button>
          </div>
         )}
        </div>
      </div>
   </>   
  )
}

export default Header
