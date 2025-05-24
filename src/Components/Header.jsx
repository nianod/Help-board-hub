import React from 'react'
import { FaLeaf, FaUser } from 'react-icons/fa'
const navContentes = {
  imag: "/download.jpg",
  title: "Help Hub"
}

const Header = () => {
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
          {<FaUser />}
        </div>
      </div>
   </>   
  )
}

export default Header
