import { useEffect, useState, useRef } from 'react';
import LogoutConfirmation from './Logout';
import { FaSignOutAlt, FaUserCircle, FaUser, FaBell } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Supabase/AuthContext';
import * as motion from 'motion/react-client'
import { scale } from 'motion';

const navContentes = {
  imag: "/download.jpg",
  title: "Help Hub"
};

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true); // for example
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const userIconRef = useRef(null);

  const { session, signOut } = UserAuth();

  useEffect(() => {
    const clickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        userIconRef.current &&
        !userIconRef.current.contains(event.target)
      ) {
        setSideMenu(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, []);

  const toggles = () => setSideMenu((prev) => !prev);

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
    setSideMenu(false);
  };

  const confirmLogout = async (event) => {
    event.preventDefault();
    try {
      await signOut();
      navigate('/');
      setShowLogoutConfirmation(false);
    } catch (err) {
      console.error(err);
    }
  };

  const cancelLogout = () => setShowLogoutConfirmation(false);

  const box = {
    width: 2 ,
    height: 2 ,
    borderRadius: 5,
  }

  return (
    <>
      <header className="bg-blue-700 flex items-center justify-between p-2 fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-md">
      
        <div className="flex items-center gap-3">
          <img
            src={navContentes.imag}
            alt="Help Hub Logo"
            className="rounded-full object-cover h-12 w-12"
          />
          <h1 className="text-white text-2xl font-bold tracking-wide">{navContentes.title}</h1>
        </div>
    
        <div className="flex items-center gap-4 relative">
        
          <motion.button
            className="relative p-2 cursor-pointer text-white hover:text-yellow-300 transition"
            aria-label="Notifications"
              whileHover={{ scale: 1.2 }}
              whileTop={{ scale: 0.8 }}
              style={box}
          >
            <FaBell size={18} />
            {hasNotifications && (
              <span
               className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"
              ></span>
            )}
          </motion.button>

          <button
            onClick={toggles}
            className="text-white p-2 cursor-pointer hover:text-yellow-300 transition"
            ref={userIconRef}
          >
            {session?.user?.user_metadata?.avatar_url ? (
              <img
                src={session.user.user_metadata.avatar_url}
                alt="User Avatar"
                className="rounded-full h-8 w-8 object-cover border border-yellow-400"
              />
            ) : (
              <FaUserCircle size={22} />
            )}
          </button>

         
          {sideMenu && (
            <div
              ref={menuRef}
              className="absolute right-0 top-10 w-44 bg-white rounded-md shadow-lg p-2 text-gray-700"
            >
              <div className="border-b pb-2 mb-2 text-sm text-gray-500 truncate">
                {session?.user?.email || 'Guest User'}
              </div>
              <Link
                to="/userProfile"
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded"
                onClick={() => setSideMenu(false)}
              >
                <FaUser />
                View Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 text-left px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {showLogoutConfirmation && (
        <LogoutConfirmation onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </>
  );
};

export default Header;
