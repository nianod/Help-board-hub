import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { supabase } from '../libs/supabaseClient';

const UserProfile = () => {
  
  const [error, setError] = useState("false")
  const [loading, setLoading] = useState(true)
  const [profilePosts, setProfilePosts] = useState(null)

  const fetchProfilePosts = async() => {
    try {
      let fetch = supabase
      .from('posts')
      .select()
      .order('cretaed_at ', { ascending: false })

      if(userId) {
        fetch = fetch.eq('User_id', userId)
      }

    } catch(err) {
      console.error("Error fetching posts ", err)
    }

  }
  useEffect(() => {
    fetchProfilePosts();
  }, [])

  return (
    <>
      <div className="mt-15 justify-center flex ">
        <h2 className='mt-6 text-white font-bold text-2xl'>Welcome to your Profile, <span className="capitalize text-3xl text-blue-200">{user?.user_metadata?.username || user?.email}</span></h2>
      </div>

      <div className="mt-4">
        <h1>Your Previous Posts</h1>
        {loading && <p>Loading posts...</p>}
        {error && <p>Error: {error}</p>}
        {posts.length === 0 && !loading && <p>No posts found.</p>}
        {posts.map((post) => (
          <div key={post.id} className="bg-amber-500 text-green-600 p-4 rounded mb-2">
            <span>{post.category} Category</span>
            <p>Description: {post.text}</p>
            <span>Posted on: {new Date(post.created_at).toLocaleString}</span>
          </div>
        ))}
      </div>
      <div className="border-2 w-50 border-red-500 p-3 rounded flex items-center gap-2">
        <button conc className="text-red-400 flex items-center gap-2 cursor-pointer">Delete Account <FaTrash /></button>
      </div>
    </>
  );
};

export default UserProfile;
