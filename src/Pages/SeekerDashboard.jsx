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
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 p-6">
            <button
              onClick={() => setShowPostModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 font-bold text-lg transition-colors"
            >
              ✕
            </button>
            <Post />
          </div>
        </div>
      )}
    </div>
  );
};

export default SeekerDashboard;