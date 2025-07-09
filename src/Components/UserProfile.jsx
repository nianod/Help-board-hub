import useFetchPosts from "../Hooks/useFetchPosts";

const UserProfile = () => {
  
  const {posts, loading, error} = useFetchPosts()

  return (
    <div>
      <h2 className='mt-25 text-white font-bold'>Welcome to your profile  </h2>
      <p>{posts.map(post => (
        <div key={post.id}>
          <span>{post.category}</span>
        </div>
      ))}</p>
    </div>
  )
}

export default UserProfile