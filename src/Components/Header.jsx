import { useEffect, useState, useRef } from 'react';
import LogoutConfirmation from './Logout';
import { FaSignOutAlt, FaUserCircle, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const navContentes = {
  imag: "/download.jpg",
  title: "Help Hub"
};

const Header = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const navigate = useNavigate();  
  const menuRef = useRef(null);
  const userIconRef = useRef(null);  

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
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const toggles = () => {
    setSideMenu(prev => !prev);
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
    setSideMenu(false);
  };

  const confirmLogout = () => {
    navigate('/');
    setShowLogoutConfirmation(false);
  };

 
  const cancelLogout = () => {
    setShowLogoutConfirmation(false);

  };

  return (
    <>
<div className='bg-blue-700 flex items-center justify-between p-2 fixed top-0 left-0 right-0 z-50'>
        <div className='flex items-center gap-3'>
          <img
            src={navContentes.imag}
            alt={"Help hub Logo"}
            className='rounded-full object-cover h-14 w-14'
          />
          <h1 className='text-white text-2xl font-bold'>{navContentes.title}</h1>
        </div>
        <div className='relative'>
          <button
            onClick={toggles}
            className='text-white p-2 cursor-pointer'
            ref={userIconRef}
          >
            <FaUserCircle size={20} />
          </button>
          {sideMenu && (
            <div
              ref={menuRef}
              className='absolute right-0 w-40 bg-white rounded p-2 z-50 shadow-md mt-1'
            >
              <Link
                to="/userProfile"
                className='gap-1 px-4 py-2 hover:bg-gray-100 rounded flex items-center'
                onClick={() => setSideMenu(false)}
              >
                <FaUser />
                View Profile
              </Link>
              <button
                onClick={handleLogout}
                className='w-full gap-1 text-left px-4 py-2 hover:bg-gray-100 rounded flex items-center cursor-pointer'
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {showLogoutConfirmation && (
        <LogoutConfirmation onConfirm={confirmLogout} onCancel={cancelLogout} />
      )}
    </>
  );
};

export default Header;
