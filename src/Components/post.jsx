import { useState } from 'react';
import { supabase } from '../libs/supabaseClient';

const Post = ( {onCancel, onAddPost } ) => {
  const [postText, setPostText] = useState('');
  const [category, setCategory] = useState('general');
  const [contact, setContact] = useState("")
  const [contactDetails, setContactDetails] = useState("null")
  const [files, setFiles] = useState("")
  const [warning, setWarning] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the data to backend 

    try {
      
      const { data, error } = await supabase.from('posts').insert([
        {
          text: postText,
          category: category,
          contact_method: contact,
          contact_detail: contactDetails
        }
      ])
      .select(); ///This runs when insert recorded

        if(error) {
          console.log(error)
          setWarning("Failed to submit the post")
        } else {
          onAddPost(data[0])
          setWarning("Post submitted successfully")
          setPostText('');
          setContact("")
          setContactDetails("")
          setCategory('general');
        }
      } catch(err) {
            console.error("Error inserting post: ", err.message);
            setWarning("Failed to submit the post");
      }    

    const newPost = {
      id: Date.now(), //Unique id
      postText,
      category,
      contact,
      contactDetails
    }
   };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mb-20 mt-20 overflow-y-auto max-h-[600px]">
      <h2 className="text-2xl font-bold text-center mb-6">Post New Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-black mb-2">
            Describe your Issue
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
            <option value="general">Tech</option>
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
            {contact && (
              <div className='mt-4 mb-4'>
                <label className='block text-sm font-medium'>
                  Enter your {contact === 'Email' ? 'Email address' : 'Phone number'}
                </label>
                <input type={contact === 'Email' ? 'email' : 'tel'} 
                  required
                  value={contactDetails}
                  onChange={(e) =>setContactDetails(e.target.value) }
                  className='w-full p-3 mt-2 border border-gray-300 focus:outline-none rounded-md focus:ring-blue-500 focus:ring-2'
                />
              </div>
            )}
        </div>
        <label className="block mb-2 text-black text-sm font-medium">Upload Image <span className='text-gray-400'>(optional)</span></label> 
        <input
          type="file"
          onChange={(e) => setFiles(e.target.value)}
          accept="image/*"
          className="bg-blue-400 p-2 rounded"
        />
        {warning && (
          <p className='text-red-500 mt-3 flex items-center justify-center'> {warning} </p>
        )}
        <div className='flex gap-3 mt-5'>
          <button
            type="button"
            onClick={onCancel}
            className="cursor-pointer rounded-md bg-blue-900 text-white w-20 p-1 font-bold"
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