import React, { useState, useRef } from 'react';
import { FaMicrophone } from "react-icons/fa6";
import axios from 'axios';

export const Homebody = () => {
  const [text, setText] = useState("");
  const [airesponse, setAiresponse] = useState("");
  const textareaRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("pychatsman");
  const options = ["pychatsman", "coolie"];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { text, selectedOption };
    console.log('Submitted:', data);
    try {
      const response = await axios.post('http://127.0.0.1:8000/query', data);
      console.log('Response:', response.data);
      setAiresponse(response.data.response);
      // Optionally clear the text after submit
      setText("");
    } catch (error) {
      console.error('Error submitting:', error);
    }
  };

  return (
    <div className='space-y-5 flex flex-col justify-center items-center w-full h-full px-52 '>
      <div className='text-pink-300 font-bold text-2xl'>Hello, Welcome</div>
      <form onSubmit={handleSubmit} className='flex flex-col justify-between gap-1 w-full h-auto border border-gray-400 min-h-32 rounded-2xl p-4'>
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
            className='w-full outline-none h-auto border border-none resize-none'
          />
        </div>
        <div className='flex justify-between items-center w-full '>
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
                    className="px-2 py-1 hover:bg-zinc-800 cursor-pointer text-white"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div><FaMicrophone /></div>
        </div>
      </form>
      <div className='w-full'>
        <h2 className='text-xl font-bold mb-2'>AI Response:</h2>
        <div className='w-full h-auto min-h-20 border border-gray-400 h-full rounded-2xl p-4'>
          {airesponse && airesponse }
        </div>
      </div>
    </div>
  );
};
