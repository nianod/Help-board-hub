import React, { useState } from 'react';

const Post = ( {onCancel} ) => {
  const [postText, setPostText] = useState('');
  const [category, setCategory] = useState('general');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ postText, category });
    alert(`Post submitted!\nText: ${postText}\nCategory: ${category}`);
    setPostText('');
    setCategory('general');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mb-20 mt-20">
      <h2 className="text-2xl font-bold text-center mb-6">Post New Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-green-300 mb-2">
            Post Content
          </label>
          <textarea
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Description"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="electronics">Tech</option>
            <option value="health">Health</option>
            <option value="general">Electronics</option>
            <option value="general">Academic</option>
            <option value="general">Errands</option>
            <option value="general">General</option>
            <option value="general">Other</option>
          </select>
        </div>
        <label htmlFor="imageUpload" className="block mb-2">Upload Image</label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          className="bg-blue-400 p-2 rounded"
        />
        <div className='flex gap-3 mt-5'>
          <button
            type="button"
            onClick={onCancel}
            className="cursor-pointer rounded-md bg-blue-900 text-white p-1 font-bold"
          >
            Cancel
          </button>
          <button
            type='submit'
           className=" cursor-pointer rounded-md bg-blue-900 text-white p-1 font-bold"
          >
            Post
        </button>
        </div>
      </form>
    </div>
  );
};

export default Post;