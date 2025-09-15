import React, { useState } from "react";
import AiChat from "./AiChat";

export const AiLayout = ({ aiMenuOpen, setAiMenuOpen }) => {
  const [isChat, setIsChat] = useState(false);

  return (
    <div>
      {aiMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40"
          onClick={() => setAiMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-70 sm:w-96 md:w-[30%] 
        bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950
        shadow-2xl shadow-blue-900/50 z-50 transform 
        transition-transform duration-300 ease-in-out
        ${aiMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            if (isChat) {
              setIsChat(false) 
            } else {
              setAiMenuOpen(false) 
            }
          }}
          className="absolute top-2 right-3 text-2xl text-gray-300 cursor-pointer hover:text-white"
        >
          {isChat ? "←" : "×"}
        </button>

        <div className="mt-10 p-4">
          {!isChat ? (
            <>
              <h2 className="text-center text-xl font-semibold text-amber-100">
                Welcome to Help Hub AI assistant
              </h2>
              <p className="text-center text-sm text-gray-300 max-w-xs m-auto mt-20">
                Ask minor and non-technical assists here. You can get quick
                guidance, tips, or clarifications without needing full technical
                support.
              </p>
              <button
                onClick={() => setIsChat(true)}
                className="bg-blue-600 p-3 font-bold text-white rounded-lg px-3 flex justify-center cursor-pointer transition hover:bg-blue-700 m-auto mt-6"
              >
                Use AI
              </button>
            </>
          ) : (
            <>
              <h2 className="text-center text-xl font-semibold text-amber-100 mb-2">
                Ask AI
              </h2>
              <div>
                 <AiChat />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
