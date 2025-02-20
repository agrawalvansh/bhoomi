import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiBox, FiShoppingBag, FiMessageSquare, FiBarChart2, FiMail, FiTool, 
         FiEdit, FiThumbsUp, FiMessageCircle, FiStar, FiBookOpen } from 'react-icons/fi';
import AdminSidebar from './navBar';

const CommunityPage = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const [activeTab, setActiveTab] = useState('blog-posts');

  const tabs = [
    { id: 'blog-posts', label: 'Blog Posts' },
    { id: 'gardening-tips', label: 'Gardening Tips' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'user-reviews', label: 'User Reviews' },
    { id: 'expert-articles', label: 'Expert Articles' }
  ];

  


  return (
    <div className="min-h-screen">
      <div className="flex" style={{ backgroundColor: colors.background }}>
        {/* Sidebar Navigation */}
        <AdminSidebar />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold" style={{ color: colors.deep }}>Community Hub</h2>
            <p className="text-lg mt-2" style={{ color: colors.tertiary }}>
              Manage and moderate community content
            </p>
          </div>

          {/* Custom Tabs */}
          <div className="mb-6">
            <div className="flex space-x-4 border-b" style={{ borderColor: colors.accent }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'border-b-2 text-deep' 
                      : 'text-tertiary hover:text-deep'
                  }`}
                  style={{ 
                    borderColor: activeTab === tab.id ? colors.deep : 'transparent',
                    color: activeTab === tab.id ? colors.deep : colors.tertiary
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center mb-4">
              <FiEdit className="mr-2" style={{ color: colors.deep }} />
              <h3 className="text-xl font-semibold" style={{ color: colors.deep }}>
                {tabs.find(tab => tab.id === activeTab)?.label} Management
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg" style={{ borderColor: colors.accent }}>
                <h4 className="font-semibold mb-4">Latest Content</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span>Urban Gardening Tips</span>
                    <div className="flex items-center space-x-2">
                      <FiThumbsUp />
                      <span>24</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Engagement Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Comments */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <FiMessageCircle className="mr-2" style={{ color: colors.deep }} />
                <h3 className="text-xl font-semibold" style={{ color: colors.deep }}>
                  Recent Comments
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-3 border rounded" style={{ borderColor: colors.accent }}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">User Comment</span>
                    <span className="text-sm" style={{ color: colors.tertiary }}>2h ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <FiStar className="mr-2" style={{ color: colors.deep }} />
                <h3 className="text-xl font-semibold" style={{ color: colors.deep }}>
                  Featured Content
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-3 border rounded" style={{ borderColor: colors.accent }}>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Featured Article</span>
                    <FiBookOpen style={{ color: colors.tertiary }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;