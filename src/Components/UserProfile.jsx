import { useEffect, useState } from 'react';
import { FaTrash, FaHistory } from 'react-icons/fa';
import { supabase } from '../libs/supabaseClient';
import { UserAuth } from '../Supabase/AuthContext'
import UserInfo from './UserInfo';
import DeleteAccount from './DeleteAccount'; 
import DeleteContext from '../Supabase/DeleteContext';
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [profilePosts, setProfilePosts] = useState([])
  const [role, setRole] = useState(null)
  const { session } = UserAuth()
  const user = session?.user
  const userId = user?.id

  const navigate = useNavigate()

  const fetchProfilePosts = async() => {
    try {
      let fetch = supabase
      .from('postst')
      .select()
      .order('created_at', { ascending: false })

      if(userId) {
        fetch = fetch.eq('user_id', userId)
      }
      const { data, error } = await fetch
      if(error) throw error;
      setProfilePosts(data || [])
 
    } catch(err) {
      setError(err.message || 'Failed to fetch posts')
      console.log(err.message)
    } finally {
      setLoading(false)
    }

  }
  useEffect(() => {
    fetchProfilePosts();
  }, [userId])

  //Fetch Role from user's table
  const fetchRole = async() => {
    if(!userId) {
      console.log('No such user found brother')
      return;
    }
      
    try {
      const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .maybeSingle()

      if(error) {
        console.log('Error occurred during fetching role', error.message)
        return;
      }
      if(data) {
        setRole(data.role)
        console.log('Role is', data.role)
      } else {
        console.log('No role data found')
      }
     
    }catch (err) {
      console.error(err.message)
    }  
      

  }
  useEffect(() => {
    fetchRole()
  }, [])
  //Delete account
    const handledelete = () => {
      setShowDeleteModal(true)
    }
    const confirmDelete = async () => {
      try{
        await DeleteContext()
        console.log('deleted successfully')
        navigate('/')
      } catch (error) {
        console.error('Account could not be deleted', error)
        setError(error)
      }
    }
    const cancelDelete = () => {
      console.log('Nice decision')
      setShowDeleteModal(false)
    }
    const makepost = () => {
      navigate('/dashboard/seeker')
    }

  return (
    <>
      <div className="mt-15 justify-center flex ">
        <h2 className='mt-6 text-white font-bold text-2xl'>Welcome to your Profile {" "}
           <span className="capitalize text-3xl text-blue-200">{user?.user_metadata?.username || user?.email}</span></h2>
      </div>

        <div>
          {role === 'seeker' && (
            <div className="mt-4">
               <h1 className='text-center text-white'>Your Previous Posts</h1>
                {loading && <p>Loading posts...</p>}
                {error && <p className='text-red-500'>Error: {error}</p>}
                {profilePosts.length === 0 && !loading && <p className='text-gray-400 text-center'>No posts found. 
                  <button onClick={makepost}>
                    <span className='text-blue-400 cursor-pointer'> Make your first request</span>
                  </button>
                </p>}
                {profilePosts.map((post) => (
                  <div key={post.id} className="bg-[#556576] shadow-2xl text-[#f5e7e7] p-4 rounded mb-2">
                    <span className='font-semibold'>{post.category} Category</span>
                    <p>Description: {post.text}</p>
                    <span>Posted on: {new Date(post.created_at).toLocaleString()}</span>
                  </div>
                ))}
                <div className='bg-gray-800 rounded-lg max-w-sm m-auto mt-5'>
                  <UserInfo />
                </div>
              </div>            
          )}

        </div>
        {role === 'helper' && (
          <div> <p className='text-xl text-white flex justify-center mt-10'>We are Glad you stood out to volunteer for providing Help Support</p>
            <div className="mt-6 border-gray-700 pt-4 flex justify-center gap-5 border">
              <div className='bg-gray-700 rounded-lg p-6 mb-6'>
                <h3 className="font-semibold text-gray-300 mb-2 flex items-center gap-2">
                    <FaHistory /> Recent Activity
                  </h3>
                <p className="text-gray-400">Your recent interactions will appear here</p>
              </div>
              <div className='bg-gray-800 rounded-lg p-6 mb-6'>
                <UserInfo />
              </div>
           </div>
          </div>
          
        )}
      {showDeleteModal && (
        <DeleteAccount onConfirm={confirmDelete} onCancel={cancelDelete}/>
      )} 
       <div className="pb-25 max-w-4xl mx-auto p-4 mt-6">
        <div className="border-2 border-red-700 rounded-lg p-4 bg-red-900/20">
          <h3 className="text-xl font-bold text-red-300 mb-3">Danger Zone</h3>
          <button
           onClick={handledelete}
           className="text-red-400 hover:bg-red-900/50 hover:transition flex items-center gap-2 cursor-pointer border rounded p-1">
            <FaTrash /> Delete Account
          </button>
          <p className="text-sm text-red-300 mt-2">
            Warning: This action cannot be undone. All your data will be permanently deleted.
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
