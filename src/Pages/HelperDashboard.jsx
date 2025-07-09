import { useState, useEffect } from 'react';
import { supabase } from '../libs/supabaseClient';  
import { useNavigate } from 'react-router-dom'
import useFetchPosts from '../Hooks/useFetchPosts';

const HelperDashboard = () => {
  //const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)
  const [loadingAccept, setLoadingAccept] = useState(null)

  const navigate = useNavigate()

    const { posts, loading, error } = useFetchPosts()
  //  useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const { data, error } = await supabase
  //         .from('postst')
  //         .select('*')
  //         .order('created_at', { ascending: false });

  //       if (error) throw error;

  //       setPosts(data);
  //     } catch (err) {
  //       console.error('Error fetching posts:', err);
  //       setError('Failed to load posts');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

 

      //Accept post
      const acceptPost = async(postId) => {
       setLoadingAccept(postId)
        const {data: { user } } = await supabase.auth.getUser()

      // if(!user?.email) {
      //   console.log('no user email found')
      // }

        const { error } = await supabase 
        .from('postst')
        .update({ accepted_by: user.email })
        .eq('id', postId)
      
        if(error) {
          console.log("there was an error here brother", error);
          
        } else {
          window.location.reload()
        }

         //Disable Accepted Post
          // setPosts((prev) => 
          // prev.map((post) =>
          //   post.id === postId ? { ...post, accepted_by: user.email} :post
          // ))
        setLoadingAccept(null)
      }  

      //View POst 
      const viewPost = (post) => {
        navigate('/view', { state: { post }})
      }

  return (
    <div className="relative min-h-screen p-4 pb-25 mt-20">
      <h2 className='text-center font-bold text-xl text-green-500'>Available help Requests</h2>
      <div className="mt-2 space-y-4">
        {loading ? (
          <p className='text-white'>Loading Help requests...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <p className='text-white'>No requests yet.</p>
        ) : (
          posts.map(post => (
            <div key={post.id} className="border p-4 rounded-lg shadow-sm bg-white">
              <h3 className="font-bold text-lg capitalize">Category: {post.category}</h3>
              <p className="mt-2 text-gray-700">{post.text}</p>  
              <p className='mt-2'>Posted by: {post.user_name}</p>
              {post.contact_method && (
                <small className="block mt-1 text-gray-500">
                  Contact via: {post.contact_method} - {post.contact_details}
                </small>
              )}
              {post.created_at && (
                <small className="block mt-1 text-gray-400">
                  Posted on: {new Date(post.created_at).toLocaleString()}
                </small>
              )}
              {post.accepted_by ? (
                <p className='text-red-700 mt-2 font-semibold'>This post has been accepted</p>
              ) : (
              <div className='flex gap-1 justify-end  '>
                <button onClick={() => viewPost(post)} className='p-1 rounded bg-blue-800 text-white cursor-pointer hover:bg-blue-700'>View</button>
                <button
                 onClick={() => acceptPost(post.id)}
                 disabled={loadingAccept === post.id}
                 className={`p-1 text-white rounded bg-green-700 hover:bg-green-800 ${loadingAccept === post.id ? "cursor-not-allowed opacity-50" : "   cursor-pointer"}`}
                >
                  {loadingAccept ? "Accepting..." : "Accept"}
                </button>
              </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HelperDashboard;