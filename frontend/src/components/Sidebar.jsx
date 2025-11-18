import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
      >
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <div
        className={`fixed left-0 top-0 w-64 h-screen bg-gray-100 p-4 border-r border-gray-300 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h3 className="text-lg font-bold mb-4">Sidebar Menu</h3>
        <ul className="space-y-2">
          <li className="hover:bg-gray-200 p-2 rounded transition-colors duration-200">Home</li>
          <li className="hover:bg-gray-200 p-2 rounded transition-colors duration-200">About</li>
          <li className="hover:bg-gray-200 p-2 rounded transition-colors duration-200">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
