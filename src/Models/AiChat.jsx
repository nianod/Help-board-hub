import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import axios from "axios";

const AiChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const session = {
    user: {
      user_metadata: { full_name: "user" },
    },
  }

  const send = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      user_name: session.user.user_metadata.full_name,
      message: input,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    try {
      
      const res = await axios.post(
        `${backendUrl}/api/chat`,
        { message: input }
      );

      const aiReply = {
        user_name: "AI Assistant",
        message: res.data.reply,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (error) {
      console.error("serious error occurred", error.message);
      setMessages((prev) => [
        ...prev,
        {
          user_name: "AI Assistant",
          message: "Sorry, An error occurred",
          timestamp: new Date().toLocaleTimeString(),
        },
      ])

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between h-[calc(100vh-120px)] p-4">
      <div className="border border-gray-500 rounded flex flex-col flex-grow overflow-hidden">
        <div className="p-3 flex flex-col overflow-y-auto flex-grow">
          {messages.map((msg, index) => {
            const isMyMessage =
              msg.user_name === session.user.user_metadata.full_name;

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

          {loading && (
            <div className="text-gray-400 text-sm mt-2 animate-pulse">
              AI Assistant is typing...
            </div>
          )}
        </div>

        <div className="p-3 border-t border-gray-400">
          <form onSubmit={send} className="flex gap-2">
            <input
              type="text"
              className="p-2 flex-grow bg-[#363535] rounded text-white"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="text-white flex gap-1 items-center bg-black p-2 rounded disabled:opacity-50"
            >
              Send <FaArrowUp />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
