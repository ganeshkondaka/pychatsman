import React, { useState, useRef, useEffect } from 'react';
import { FaMicrophone } from "react-icons/fa6";
import axios from 'axios';

export const Homebody = () => {
  const [text, setText] = useState("");
  const [conversations, setConversations] = useState([]);
  const textareaRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("pychatbot");
  const [loading, setLoading] = useState(false);
  const options = ["pychatbot", "refiner", "variants"];
  const messagesEndRef = useRef(null);

  const handleInputChange = (e) => {
    setText(e.target.value);
    // Adjust the height of the textarea dynamically
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const data = { text, selectedOption };
    console.log('Submitted:', data);

    // Add user message to conversations
    setConversations([...conversations, { role: 'user', content: text, model: selectedOption }]);
    setText("");
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/query', data);
      console.log('Response:', response.data);

      // Add AI response to conversations
      setConversations(prev => [...prev, { role: 'assistant', content: response.data.response || response.data.message }]);
    } catch (error) {
      console.error('Error submitting:', error);
      setConversations(prev => [...prev, { role: 'assistant', content: 'Error: Could not get response from AI' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col justify-between items-center w-full flex-1 px-52 transition-all duration-500 ease-in-out'>
      {conversations.length == 0 ? <div className='text-pink-300 font-bold text-2xl pt-5 transition-all duration-500 ease-in-out'>Hello, Welcome</div> : null}

      {/* Chat Container */}
      {conversations.length === 0 ? (
        // Centered Form when no conversations
        <div className='flex-1 flex items-center justify-center w-full transition-all duration-500 ease-in-out'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-between gap-1 w-full h-auto border border-gray-400 min-h-32 rounded-2xl p-4 max-w-2xl transition-all duration-500 ease-in-out transform hover:scale-105'>
            <div className='h-auto'>
              <textarea
                ref={textareaRef}
                value={text}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder='Type your message...'
                className='w-full outline-none h-auto border border-none resize-none text-white bg-transparent'
              />
            </div>
            <div className='flex justify-between items-center w-full'>
              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-transparent text-white border border-gray-400 rounded px-2 py-1 cursor-pointer flex items-center justify-between min-w-24"
                >
                  {selectedOption}
                  <span className="ml-2">{isDropdownOpen ? '▴' : '▾'}</span>
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-zinc-800 border border-gray-400 rounded shadow-lg z-10 min-w-24">
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleOptionSelect(option)}
                        className="px-2 py-1 hover:bg-zinc-700 cursor-pointer text-white"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='text-white cursor-pointer'><FaMicrophone /></div>
            </div>
          </form>
        </div>
      ) : (
        // Chat view with sticky form
        <>
          <div className='w-full flex-1 rounded-2xl p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-zinc-900 transition-all duration-500 ease-in-out'>
            {conversations.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-300 ease-in-out`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-zinc-800 text-white' : 'border border-zinc-800 text-gray-100'} transition-all duration-300 ease-in-out hover:scale-105`}>
                  {msg.role === 'user'
                    ? <p className='text-xs text-blue-200 mb-1 flex gap-1 items-center'>Me<span className='text-[7px] bg-zinc-600 rounded-2xl px-1 text-zinc-300'>{msg.model}</span></p>
                    : <p className='text-xs text-gray-400 mb-1'>AI<span className='text-[9px] bg-zinc-600 rounded-2xl'>{msg.model}</span></p>}
                  <p className='overflow-wrap'>{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className='flex justify-start transition-all duration-300 ease-in-out'>
                <div className='bg-gray-700 text-gray-100 px-4 py-2 rounded-lg animate-pulse'>
                  <p className='text-3xl'>...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Sticky Input Form */}
          <form onSubmit={handleSubmit} className='flex flex-col justify-between gap-1 w-full h-auto border border-gray-400 min-h-32 rounded-2xl p-4 mt-5 sticky bottom-0  z-50 transition-all duration-500 '>
            <div className='h-auto'>
              <textarea
                ref={textareaRef}
                value={text}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder='Type your message...'
                className='w-full outline-none h-auto border border-none resize-none text-white bg-transparent'
              />
            </div>
            <div className='flex justify-between items-center w-full'>
              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="bg-transparent text-white border border-gray-400 rounded px-2 py-1 cursor-pointer flex items-center justify-between min-w-24"
                >
                  {selectedOption}
                  <span className="ml-2">{isDropdownOpen ? '▴' : '▾'}</span>
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-zinc-800 border border-gray-400 rounded shadow-lg z-10 min-w-24">
                    {options.map((option) => (
                      <div
                        key={option}
                        onClick={() => handleOptionSelect(option)}
                        className="px-2 py-1 hover:bg-zinc-700 cursor-pointer text-white"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className='text-white cursor-pointer'><FaMicrophone /></div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
