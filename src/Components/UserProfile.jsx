import { UserAuth } from "../Supabase/AuthContext"
import useFetchPosts from "../Hooks/useFetchPosts"

const UserProfile = () => {
  const { session } = UserAuth()
  const user = session?.user

  const { posts, loading, error } = useFetchPosts(user?.id)

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
