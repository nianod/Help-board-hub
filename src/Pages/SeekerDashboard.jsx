import React, { useState } from 'react';
import Post from '../Components/post';

const SeekerDashboard = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowPostModal(true)}
        className="p-3 bg-red-400 rounded mt-20 m-4 cursor-pointer font-bold hover:bg-red-500 transition-colors"
      >
        Post help request
      </button>

      {showPostModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-30">
            <Post onCancel = {() => setShowPostModal(false)}/>
        </div>
      )}
    </div>
  );
};

export default SeekerDashboard;