import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, FiUsers, FiBox, FiShoppingBag, FiMessageSquare, FiBarChart2, FiMail, FiTool,
  FiInbox, FiStar, FiAlertCircle, FiMessageCircle, FiSettings, FiEdit, FiChevronRight,
  FiSearch, FiFilter, FiPlusCircle
} from 'react-icons/fi';
import AdminSidebar from './navBar';

const MessagesPage = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Sample messages data
  const messages = [
    {
      id: 1,
      category: 'inquiry',
      subject: 'Plant Care Question',
      sender: 'John Doe',
      preview: 'I need help with my indoor plants...',
      time: '10:30 AM',
      unread: true
    },
    {
      id: 2,
      category: 'maintenance',
      subject: 'Garden Maintenance Request',
      sender: 'Sarah Smith',
      preview: 'Requesting monthly maintenance service...',
      time: '9:15 AM',
      unread: false
    },
    {
      id: 3,
      category: 'emergency',
      subject: 'Urgent: Plant Disease',
      sender: 'Mike Johnson',
      preview: 'My plants are showing signs of disease...',
      time: 'Yesterday',
      unread: true
    }
  ];

  // Sample templates
  const templates = [
    { id: 1, name: 'Welcome Message', category: 'General' },
    { id: 2, name: 'Maintenance Confirmation', category: 'Maintenance' },
    { id: 3, name: 'Emergency Response', category: 'Emergency' }
  ];

 
  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
          {/* Message Categories and List */}
          <div className="w-full md:w-80 border-r overflow-y-auto" style={{ borderColor: colors.accent }}>
            {/* Search Bar */}
            <div className="sticky top-0 p-4 border-b bg-[#F9F6F0] z-10" style={{ borderColor: colors.accent }}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full p-2 pl-8 border rounded focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{ borderColor: colors.accent, focusRingColor: colors.tertiary }}
                />
                <FiSearch className="absolute left-2 top-3" style={{ color: colors.tertiary }} />
              </div>
            </div>

            {/* Message Categories */}
            <div className="p-4">
              <h3 className="font-medium mb-2 text-sm md:text-base" style={{ color: colors.deep }}>Categories</h3>
              <ul className="space-y-2">
                <li 
                  className={`flex items-center p-2 rounded cursor-pointer transition-colors duration-200 ${
                    selectedCategory === 'all' ? 'bg-opacity-10' : ''
                  }`}
                  style={{ 
                    backgroundColor: selectedCategory === 'all' ? colors.accent : 'transparent',
                    color: colors.primary 
                  }}
                  onClick={() => setSelectedCategory('all')}
                >
                  <FiInbox className="mr-2 flex-shrink-0" />
                  <span className="truncate">All Messages</span>
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                </li>
                {['General Inquiries', 'Maintenance Requests', 'Emergency Support', 'Feedback'].map((category, index) => (
                  <li
                    key={index}
                    className={`flex items-center p-2 rounded cursor-pointer transition-colors duration-200 ${
                      selectedCategory === category ? 'bg-opacity-10' : ''
                    }`}
                    style={{ 
                      backgroundColor: selectedCategory === category ? colors.accent : 'transparent',
                      color: colors.primary 
                    }}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <FiMessageCircle className="mr-2" />
                    <span className="truncate">{category}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Message List */}
            <div className="border-t overflow-y-auto" style={{ borderColor: colors.accent }}>
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                    message.unread ? 'font-semibold' : ''
                  } ${selectedMessage?.id === message.id ? 'bg-gray-50' : ''}`}
                  style={{ borderColor: colors.accent }}
                  onClick={() => setSelectedMessage(message)}
                >
                  <div className="flex justify-between mb-1">
                    <span className="truncate mr-2" style={{ color: colors.deep }}>{message.subject}</span>
                    <span className="text-sm flex-shrink-0" style={{ color: colors.tertiary }}>{message.time}</span>
                  </div>
                  <div className="text-sm truncate" style={{ color: colors.tertiary }}>
                    {message.sender} - {message.preview}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Content and Tools */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {/* Message Toolbar */}
            <div className="sticky top-0 p-4 border-b bg-[#F9F6F0] z-10 flex justify-between items-center" style={{ borderColor: colors.accent }}>
              <div className="flex space-x-2 md:space-x-4">
                <button className="p-2 rounded hover:bg-gray-100 transition-colors duration-200">
                  <FiFilter style={{ color: colors.tertiary }} />
                </button>
                <button className="p-2 rounded hover:bg-gray-100 transition-colors duration-200">
                  <FiStar style={{ color: colors.tertiary }} />
                </button>
              </div>
              <div className="flex space-x-2 md:space-x-4">
                <button 
                  className="px-3 md:px-4 py-2 rounded text-white text-sm transition-colors duration-200 hover:opacity-90"
                  style={{ backgroundColor: colors.deep }}
                >
                  <span className="hidden md:inline">New Template</span>
                  <FiPlusCircle className="md:hidden" />
                </button>
                <button 
                  className="px-3 md:px-4 py-2 rounded text-white text-sm transition-colors duration-200 hover:opacity-90"
                  style={{ backgroundColor: colors.tertiary }}
                >
                  <span className="hidden md:inline">Compose</span>
                  <FiEdit className="md:hidden" />
                </button>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 p-4 md:p-6 overflow-y-auto">
              {selectedMessage ? (
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-xl md:text-2xl font-semibold mb-4" style={{ color: colors.deep }}>
                    {selectedMessage.subject}
                  </h2>
                  <div className="mb-4">
                    <span className="font-medium" style={{ color: colors.deep }}>From: </span>
                    <span style={{ color: colors.tertiary }}>{selectedMessage.sender}</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border shadow-sm" style={{ borderColor: colors.accent }}>
                    {selectedMessage.preview}
                  </div>
                </div>
              ) : (
                <div className="text-center mt-20" style={{ color: colors.tertiary }}>
                  Select a message to view its content
                </div>
              )}
            </div>

            {/* Quick Response Templates */}
            <div className="sticky bottom-0 p-4 border-t bg-[#F9F6F0]" style={{ borderColor: colors.accent }}>
              <h3 className="font-medium mb-2 text-sm md:text-base" style={{ color: colors.deep }}>Quick Response Templates</h3>
              <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
                {templates.map(template => (
                  <button
                    key={template.id}
                    className="px-3 md:px-4 py-2 rounded whitespace-nowrap text-sm transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: colors.background, color: colors.deep }}
                  >
                    {template.name}
                  </button>
                ))}
                <button
                  className="px-3 md:px-4 py-2 rounded flex items-center text-sm transition-colors duration-200 hover:opacity-90"
                  style={{ backgroundColor: colors.background, color: colors.tertiary }}
                >
                  <FiPlusCircle className="mr-2" />
                  Add Template
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;