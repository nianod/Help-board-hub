import { UserAuth } from "../Supabase/AuthContext";
import { FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { supabase } from '../libs/supabaseClient';

const UserProfile = () => {
  const { session } = UserAuth();
  const user = session?.user;
  const [userRole, setUserRole] = useState('');
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.id) {
        try {
          const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('id', user.id)
            .single();

          if (error) throw error;
          
          setUserData(data);
          setUserRole(data?.role || '');
          setLoadingUserData(false);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setLoadingUserData(false);
        }
      }
    };

    fetchUserData();
  }, [user]);


  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <FaUser /> Personal Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          <div>
            <h3 className="font-semibold text-gray-300">Username</h3>
            <p>{userData?.username || user?.user_metadata?.username || 'Not set'}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-300">Email</h3>
            <p>{user?.email}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-300">Account Type</h3>
            <p className="capitalize">{userRole}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-300">Member Since</h3>
            <p>{new Date(user?.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      <button
        className="flex justify-center"
      >
        edit
     </button>
    </div>
  );


};

export default UserProfile;