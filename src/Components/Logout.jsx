
import React from 'react';

const LogoutConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-opacity-50 z-50" data-aos="zoom-in">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Are you sure you want to logout?</p>
        <div className="mt-4 flex justify-between">
          <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Yes</button>
          <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer">No</button>
        </div>
      </div>
    </div>
  )
}

export default LogoutConfirmation;
