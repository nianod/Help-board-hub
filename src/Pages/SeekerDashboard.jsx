import { useState, useEffect } from 'react';
import { supabase } from '../libs/supabaseClient'; // Make sure to import supabase
import Post from '../Components/post';

const SeekerDashboard = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from Supabase on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
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

  const handleAddPost = async (newPost) => {
    try {
      // First add to Supabase
      const { data, error } = await supabase
        .from('posts')
        .insert([newPost])
        .select();

      if (error) throw error;

      // Then update local state with the post returned from Supabase (includes id)
      setPosts([data[0], ...posts]);
      setShowPostModal(false);
    } catch (err) {
      console.error('Error adding post:', err);
      setError('Failed to add post');
    }
  };

  return (
    <div className="relative min-h-screen p-4">
      <button
        onClick={() => setShowPostModal(true)}
        className="p-3 bg-red-400 rounded mt-20 m-4 cursor-pointer font-bold hover:bg-red-500 transition-colors"
      >
        Post help request
      </button>

      {showPostModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-30">
          <Post 
            onCancel={() => setShowPostModal(false)}
            onAddPost={handleAddPost}  
          />
        </div>
      )}

      <div className="mt-8 space-y-4">
        {loading ? (
          <p>Loading posts...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <p>No posts yet. Be the first to post!</p>
        ) : (
          posts.map(post => (
            <div key={post.id} className="border p-4 rounded-lg shadow-sm bg-white">
              <h3 className="font-bold text-lg capitalize">{post.category}</h3>
              <p className="mt-2 text-gray-700">{post.text}</p> {/* Changed from postText to text */}
              {post.contact_method && (
                <small className="block mt-2 text-gray-500">
                  Contact via: {post.contact_method} - {post.contact_details}
                </small>
              )}
              {post.created_at && (
                <small className="block mt-1 text-gray-400">
                  Posted on: {new Date(post.created_at).toLocaleString()}
                </small>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SeekerDashboard;