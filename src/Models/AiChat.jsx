import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const AiChat = () => {
   const [messages, setMessages] = useState([])
   const [input, setInput] = useState("")

  const session = {
    user: {
      user_metadata: { full_name: "user" }, 
    },
  };

  const send = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

   
    const newMessage = {
      user_name: session.user.user_metadata.full_name,
      message: input,
      timestamp: new Date().toLocaleTimeString(),
     };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");  
  };

  return (
    <div className=" p-5">
      <div className="border w-full  border-gray-500 rounded flex flex-col">
        
        <div className="p-3 h-[350px] flex flex-col overflow-y-auto flex-grow">
          {messages.map((msg, index) => {
            const isMyMessage =
              msg?.user_name === session?.user?.user_metadata?.full_name;

            return (
              <div
                key={index}
                className={`w-full flex items-start ${
                  isMyMessage ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex flex-col max-w-xs ${
                    isMyMessage ? "items-end" : "items-start"
                  }`}
                >
                  <p
                    className={`text-white p-2 mt-2 rounded-lg ${
                      isMyMessage ? "bg-blue-500" : "bg-gray-700"
                    }`}
                  >
                    {msg.message}
                  </p>
                  <span className="mt-1 text-gray-300 text-xs">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 p-3 border-t-[1.5px] border-gray-700">
          <form onSubmit={send} className="gap-5 flex flex-col sm:flex-row">
            <input
              type="text"
              className="p-2 w-full bg-[#363535] rounded text-white"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="text-white flex gap-1 items-center bg-black p-2 rounded h-full cursor-pointer"
            >
              Send <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
