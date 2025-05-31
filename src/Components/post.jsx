import { useState } from 'react';

const Post = ( {onCancel, post } ) => {
  const [postText, setPostText] = useState('');
  const [category, setCategory] = useState('general');
  const [contact, setContact] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the data to your backend
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
          <label className="block text-sm font-medium text-black mb-2">
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
        
        <div className="mb-1">
          <label className="block text-sm font-medium text-black mb-2">
            Category
          </label>
          <select
          required
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select a category</option>
            <option value="Tech">Tech</option>
            <option value="Health">Health</option>
            <option value="Electronics">Electronics</option>
            <option value="Academic">Academic</option>
            <option value="Errands">Errands</option>
            <option value="General">General</option>
          </select>
        </div>
        <div className='mt-4 mb-4'>
          <label className='block text-sm font-medium text-black mb-2' >
            How can people contact you</label>
            <select id="contact"
            className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300'
            value={contact}
             onChange={(e) => setContact(e.target.value)}
            >
              <option value="" disabled>Choose contact method</option>
              <option value="Email">Email</option>
              <option value="SMS">SMS</option>
              <option value="Call">Call</option>
              <option value="Whatsapp">Whatsapp</option>
            </select>
        </div>
        <label className="block mb-2 text-black text-sm font-medium">Upload Image <span className='text-gray-400'>(optional)</span></label> 
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
            className="cursor-pointer rounded-md bg-blue-900 text-white w-20 font-bold"
          >
            Cancel
          </button>
          <button
            type='submit'
           className=" cursor-pointer rounded-md bg-blue-900 text-white w-20 p-1 font-bold"
          >
            Post
        </button>
        </div>
      </form>
    </div>
  );
};

export default Post;