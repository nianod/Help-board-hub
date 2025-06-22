import { supabase } from "../libs/supabaseClient";


const UserProfile = () => {
  const fetchUsers = async () => {
    const {data, error } = await supabase
    .from('users')
    .select(user.email)
  }
  fetchUsers()
  return (
    <div>
      <h2 className='mt-25 text-white font-bold'>Welcome to your profile  </h2>
    </div>
  )
}

export default UserProfile