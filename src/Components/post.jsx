import React from 'react'

const Post = () => {
  return (
    <div>
      <h2 className='flex items-center justify-center text-xl font-bold'>Post new update</h2>
      <input type="text" className='p-5' />Category
      <select className='p-3 focus:to-blue-600 focus:ring-transparent'>
        <option value="electronics">electronics</option>
        <option value="health">health</option>
        <option value="general">general</option>
      </select>
    </div>
  )
}

export default Post
