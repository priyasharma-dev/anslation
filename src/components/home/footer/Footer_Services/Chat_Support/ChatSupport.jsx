import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageCircle,
  ChevronDown,
  ChartBarIcon,
  MessageSquare,
} from "lucide-react";

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messages, setMessages] = useState([]);
  const [chatData, setChatData] = useState({});
  const [selectedSolution, setSelectedSolution] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        const res = await fetch("/ChatSupportQuestions/ChatSupportData.json");
        const data = await res.json();
        setChatData(data.Solutions || {});
      } catch (error) {
        console.error("Error loading chat data:", error);
      }
    };
    fetchChatData();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen((prev) => !prev);
  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);
  const isFormValid = formData.name.trim() && isEmailValid(formData.email);

  const handleSend = (e) => {
    e.preventDefault();
    const messageText = formData.message.trim();
    if (!messageText) return;

    const userMessage = { sender: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setFormData({ ...formData, message: "" });

    setTimeout(() => {
      if (messages.length === 0) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Hello ${formData.name}! How can I help you?`,
          },
          { sender: "bot", text: "Please select one from the dropdown below." },
        ]);
      } else if (selectedSolution && !selectedCategory) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `You selected ${selectedSolution}. Now please choose a category.`,
          },
        ]);
      } else if (selectedCategory) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `You selected "${selectedCategory}". Thanks, our team will contact you soon!`,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Please type 'Hi' to begin." },
        ]);
      }
    }, 600);
  };

  const handleSolutionSelect = (e) => {
    const selected = e.target.value;
    setSelectedSolution(selected);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: selected },
      {
        sender: "bot",
        text: `Great! Please select a category under ${selected}.`,
      },
    ]);
  };

  const handleCategorySelect = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: selected },
      {
        sender: "bot",
        text: `You selected "${selected}". Thanks, our team will get in touch with you soon!`,
      },
    ]);
  };

  const solutionOptions = Object.keys(chatData);

  return (
    <div className="fixed bottom-6 right-2 z-[9999] flex flex-col items-end">
      {/* Floating Chat Button */}
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="chat-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-2  sm:bottom-6 sm:right-6 z-50"
          >
            {/* Glowing pulse effect */}

            {/* Chat Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleChat}
              className="
    fixed z-[3000] 
    flex items-center justify-center
    rounded-full focus:outline-none cursor-pointer transition-all duration-300
    bg-blue-600 hover:bg-blue-700 text-white
    shadow-md sm:shadow-l transition:2s

    /* 📍 Responsive positioning */
    bottom-3 right-3                /* Safe space on mobile */
    sm:bottom-4 sm:right-4
    md:bottom-6 md:right-6
    lg:bottom-1 lg:right-2         /* Tight to edge on full screen */
    
    /* 🟦 Responsive size */
    w-12 h-12 p-2
    sm:w-12 sm:h-12 sm:p-3
    md:w-14 md:h-14 md:p-4
    lg:w-16 lg:h-16 lg:p-5
  "
            >
              <MessageSquare
                className="
      text-white
      w-5 h-5
      sm:w-6 sm:h-6
      md:w-7 md:h-7
      lg:w-8 lg:h-8
    "
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-box"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            className="
              fixed bottom-5 right-6 w-[370px] sm:w-[420px]
              bg-blue-100 backdrop-blur-md bg-opacity-90
              rounded-3xl shadow-4xl 
              flex flex-col h-[500px] max-h-[85vh] overflow-hidden
              max-sm:inset-0 max-sm:w-full max-sm:h-screen max-sm:max-h-none 
              max-sm:rounded-none  max-sm:z-[9999]
            "
          >
            {/* Header */}
            <div className="bg-blue-900 text-white px-6 py-6 flex items-center justify-between sticky top-0 z-[9999] shadow rounded-xl">
              <div className="flex items-center gap-3">
                <img
                  src="/logo/logo.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-full border border-white bg-blue-600"
                />
                <div className="flex flex-col w-full">
                  <h2 className="text-lg sm:text-xl font-semibold tracking-wide">
                    Chat With Us
                  </h2>
                  <p className="tetx-xl font-semibold">Leave a meesage</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-md transition-all cursor-pointer"
              >
                <ChevronDown size={22} />
              </button>
            </div>

            {/* Sub Header Text */}
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-center text-[16px] text-blue-900 bg-blue-50 py-2 border-b border-blue-200 font-medium"
            >
              I'm always happy to assist — what can I do for you?
            </motion.p>

            {/* Messages Area */}
            <div
              className="flex-1 overflow-y-auto px-6 py-6 space-y-6 max-sm:px-4 max-sm:py-3 scroll-smooth"
              style={{ paddingBottom: "7rem" }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-xl text-sm sm:text-base leading-relaxed max-w-[80%] ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-800 border border-gray-200 shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Dropdowns */}
              {messages.length > 0 && !selectedSolution && (
                <select
                  onChange={handleSolutionSelect}
                  className="w-full border px-4 py-3 rounded-lg text-sm sm:text-base focus:outline-blue-500 
                  bg-blue-600 text-white hover:bg-blue-700 transition-all cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-white text-gray-600">
                    Select Enquiry Type
                  </option>
                  {solutionOptions.map((solution) => (
                    <option
                      key={solution}
                      value={solution}
                      className="bg-white text-gray-800"
                    >
                      {solution}
                    </option>
                  ))}
                </select>
              )}

              {selectedSolution &&
                chatData[selectedSolution] &&
                !selectedCategory && (
                  <select
                    onChange={handleCategorySelect}
                    className="w-full border px-4 py-3 rounded-lg text-sm sm:text-base focus:outline-blue-500 
                    bg-blue-500 text-white hover:bg-blue-800 transition-all cursor-pointer"
                    defaultValue=""
                  >
                    <option
                      value=""
                      disabled
                      className="bg-white text-gray-600"
                    >
                      Select Category
                    </option>
                    {chatData[selectedSolution].Category.map((cat) => (
                      <option
                        key={cat}
                        value={cat}
                        className="bg-white text-gray-800"
                      >
                        {cat}
                      </option>
                    ))}
                  </select>
                )}
              <div ref={chatEndRef}></div>
            </div>

            {/* Input Area */}
            <div className="mt-2 px-6 py-4 bg-blue-50 shadow-inner flex flex-col gap-3 max-sm:sticky max-sm:bottom-0">
              {messages.length === 0 && (
                <>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="px-5 py-3 text-sm sm:text-base focus:outline-none w-full bg-gray-200 rounded-xl text-blue-800"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="px-5 py-3 text-sm sm:text-base focus:outline-none w-full bg-gray-200 rounded-xl text-blue-800"
                  />
                </>
              )}

              <form onSubmit={handleSend} className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder={
                    messages.length === 0
                      ? "Type 'Hi' to start chat..."
                      : "Ask your question..."
                  }
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="px-5 py-4 text-sm sm:text-base focus:outline-none w-full bg-gray-200 rounded-3xl text-blue-700 flex-1"
                />
                <button
                  type="submit"
                  disabled={!isFormValid && messages.length === 0}
                  className={`flex cursor-pointer items-center justify-center px-5 py-3 rounded-lg transition-all font-medium text-sm sm:text-base ${
                    messages.length === 0
                      ? isFormValid
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatSupport;
