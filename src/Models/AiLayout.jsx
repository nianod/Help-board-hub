import React from "react";

export const AiLayout = ({ AiMenu, setAiMenu }) => {
  return (
    <div>
      {AiMenu && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40"
          onClick={() => setAiMenu(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-70 sm:w-96 md:w-[30%] 
        bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950
        shadow-2xl shadow-blue-900/50 z-50 transform 
        transition-transform duration-300 ease-in-out
        ${AiMenu ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setAiMenu(false)}
          className="absolute top-3 right-3 text-2xl text-gray-300 cursor-pointer hover:text-white"
        >
          ×
        </button>
      </div>
      <div>
        <h2>Wel</h2>
      </div>
    </div>
  );
};
