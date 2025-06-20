import { useEffect } from 'react'
import { supabase } from '../libs/supabaseClient'

const ownerProfile = async() => {
  const [userInfo, setUserInfo] = (null)
  useEffect(() => {
    const fetchUserInfo = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if(!user) return

      const { data, error} = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()
    }
  })
}

const UserProfile = () => {
  return (
    <div>
      <h2 className='mt-25 text-white font-bold'>Welcome to your profile  </h2>
    </div>
  )
}

export default UserProfile
