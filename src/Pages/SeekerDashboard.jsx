import { useState, useEffect } from 'react';
import { supabase } from '../libs/supabaseClient';  
import Post from '../Components/post';
import { useNavigate, Link } from 'react-router-dom'
import { FaMicrochip } from 'react-icons/fa'
import { AiLayout } from '../Models/AiLayout';
 
const SeekerDashboard = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [aiMenuOpen, setAiMenuOpen] = useState(false)



  const navigate = useNavigate()

   useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        const { data, error } = await supabase
          .from('postst')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleAddPost = (newPost) => {
       setPosts(prevPosts => [newPost, ...prevPosts]);
      setShowPostModal(false);
  }

      //Delete post
      const deletePost = async(postId) => {
        try {
          const { error } = await supabase
          .from('posts')
          .delete()
          .eq('id', postId)
          if (error) throw error

          setPosts(prevPosts => prevPosts.filter(post => post.id !== postId))

        } catch (err) {
          console.error("An error occurred", err.message)
          setError("Failed to  delete poat")
        }
      }  

      //View POst 
      const viewPost = (post) => {
        navigate('/view', { state: { post }})
      }
  return (
    <div className="relative min-h-screen p-4 pb-25">
      <div className="flex justify-between">
        <button
          onClick={() => setShowPostModal(true)}
          className="p-3 bg-red-400 rounded mt-20 m-4 cursor-pointer font-bold hover:bg-red-500 transition-colors"
        >
          Post help request
        </button>
        <button
          onClick={() => setAiMenuOpen(true)}
          className="back flex flex-col items-center justify-center p-3 transition-colors mt-20 cursor-pointer rounded"
        >
          <span className=" text-xl font-bold text-white">AI Assistant</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-white">
            Ask AI <FaMicrochip className="text-xs" />
          </span>
        </button>
      </div>
      
      {showPostModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-opacity-90 backdrop-blur-md">
          <Post
            onCancel={() => setShowPostModal(false)}
            onAddPost={handleAddPost}
          />
        </div>
      )}

      <div className="mt-8 space-y-4">
        {loading ? (
          <p className="text-white">Loading posts...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <p className="text-white">
            You have No posts yet. Make your first to post!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <h3 className="font-bold text-lg capitalize">
                Category: {post.category}
              </h3>
              <p className="mt-2 text-gray-700">{post.text}</p>
              <img src={post.image} alt="photo" />
              <p className="mt-2">Posted by: {post.user_name}</p>
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
              <div className="flex justify-between">
                {post.accepted_by ? (
                  <p className="text-green-500 font-semibold">
                    Accepted by: {" "}
                    <a
                      href={`mailto:${post.accepted_by}?subject=regarding your accepted post (ID: ${post.id}) &body=${encodeURIComponent}(Hi there you young Man!)`}
                      className="text-blue-500 cursor-pointer hover:underline"
                    >
                      {post.accepted_by}
                    </a>
                  </p>
                ) : (
                  <p className="text-red-500 font-semibold">
                    Pending accept...
                  </p>
                )}
                <div className="gap-2 flex">
                  <button
                    onClick={() => viewPost(post)}
                    className="p-1 rounded bg-blue-800 text-white cursor-pointer hover:bg-blue-700"
                  >
                    View
                  </button>
                  <button
                    onClick={
                      !post.accepted_by ? () => deletePost(post.id) : undefined
                    }
                    disabled={!!post.accepted_by}
                    className={`p-1 rounded text-white  ${
                      post.accepted_by
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-800 hover:bg-red-700 cursor-pointer"
                    }`}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <AiLayout aiMenuOpen={aiMenuOpen } setAiMenuOpen={setAiMenuOpen} />
    </div>
  );
};

export default SeekerDashboard;