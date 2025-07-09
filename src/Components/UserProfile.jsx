import { UserAuth } from "../Supabase/AuthContext"
import useFetchPosts from "../Hooks/useFetchPosts"

const UserProfile = () => {
  const { session } = UserAuth()
  const user = session?.user

  const { posts, loading, error } = useFetchPosts(user?.id)

  return (
    <>
      <div className="mt-20">
        <h2 className='mt-6 text-white font-bold'>Welcome, {user?.user_metadata?.email || user?.email}</h2>
      </div>

      <div className="mt-4">
        <h1>Your Previous Posts</h1>
        {loading && <p>Loading posts...</p>}
        {error && <p>Error: {error}</p>}
        {posts.length === 0 && !loading && <p>No posts found.</p>}
        {posts.map((post) => (
          <div key={post.id} className="bg-gray-800 text-white p-4 rounded mb-2">
            <span>{post.category}</span>
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserProfile;
