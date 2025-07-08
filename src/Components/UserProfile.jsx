import useFetchPosts from "../Hooks/useFetchPosts";

const UserProfile = () => {
  
  const {posts, loading, error} = useFetchPosts()

  return (
    <div>
      <h2 className='mt-25 text-white font-bold'>Welcome to your profile  </h2>
    </div>
  )
}

export default UserProfile