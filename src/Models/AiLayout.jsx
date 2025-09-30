import React, { useState } from "react";
import AiChat from "./AiChat";
import { FaRobot } from "react-icons/fa";

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
        shadow-2xl shadow-blue-900/50 z-90 transform 
        transition-transform duration-300 ease-in-out
        ${aiMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            if (isChat) {
              setIsChat(false);
            } else {
              setAiMenuOpen(false);
            }
          }}
          className="absolute top-2 right-3 text-2xl text-gray-300 cursor-pointer hover:text-white"
        >
          {isChat ? "←" : "×"}
        </button>

        <div className="mt-10 ">
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
              <div className="font-semibold mb-2 bg-black p-4">
                <div className="justify-between flex items-center gap-6">
                  <div className="text-white text-md flex items-center gap-1">
                    Ask AI
                    <span className="text-white">
                      <FaRobot />
                    </span>
                  </div>
                  <h2 className="text-sm text-gray-500">
                    Help hub AI assistant is now available
                  </h2>
                </div>
                <div className="items-center gap-1 flex">
                  <span className="absolute inline-flex w-2.5 h-2.5 rounded-full bg-green-400 opacity-75 animate-ping "></span>
                  <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-500 ">
                   
                  </span>
                   <span className="text-green-500 text-sm flex items-center">online</span>
                </div>
              </div>
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
