import { supabase } from '../libs/supabaseClient'

const ownerProfile = async() => {
  const { data: { user } } = await supabase.auth.getUser()

  const { error } = await supabase
  .from('users')
  .insert({
    id: user.id,
    username:  user.username,
    email: user.email,
    role: 'seeker'
  })

  if(error) {
    console.error("Error fetching user data: ", error.message)
  }
}
ownerProfile()

const UserProfile = () => {
  return (
    <div>
      <h2 className='mt-25 text-white font-bold'>Welcome to your profile  </h2>
    </div>
  )
}

export default UserProfile
