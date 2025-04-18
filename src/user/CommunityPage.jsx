import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiMessageSquare, FiHeart, FiShare2, FiBookmark, FiPlayCircle,
  FiThumbsUp, FiMoreHorizontal, FiSearch, FiFilter, FiPlusCircle,
  FiHome, FiUser, FiShoppingBag, FiTool, FiUsers, FiMail
} from 'react-icons/fi';

const CommunityPage = () => {
  const colors = {
    primary: '#2d5a27',
    secondary: '#D4B982', 
    tertiary: '#2d5a27',
    background: '#f5f5f0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB',
    warm: '#E6BAA3'
  };
  
  const [activeTab, setActiveTab] = useState('discussions');
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('all');

  const discussions = [
    {
      id: 1,
      user: {
        name: 'Emma Gardner',
        avatar: '/api/placeholder/40/40',
        expertise: 'Master Gardener'
      },
      title: 'Help! My tomato plants have yellow leaves',
      content: 'I noticed some yellowing on my tomato plant leaves. They are mostly on the bottom of the plant. Any ideas what could be causing this?',
      topic: 'Plant Health',
      likes: 24,
      comments: 12,
      timeAgo: '2 hours ago',
      tags: ['Tomatoes', 'Plant Care', 'Disease']
    },
    {
      id: 2,
      user: {
        name: 'Mike Wilson',
        avatar: '/api/placeholder/40/40',
        expertise: 'Urban Farmer'
      },
      title: 'Best practices for composting in small spaces',
      content: 'Looking for advice on maintaining a compost bin on my balcony. What are your tips for avoiding odors and managing the process effectively?',
      topic: 'Composting',
      likes: 45,
      comments: 18,
      timeAgo: '5 hours ago',
      tags: ['Composting', 'Urban Gardening', 'Sustainability']
    }
  ];

  const blogs = [
    {
      id: 1,
      title: 'Essential Tips for Spring Garden Preparation',
      author: 'Sarah Johnson',
      date: 'Feb 1, 2025',
      readTime: '5 min read',
      image: '/api/placeholder/400/200',
      excerpt: 'Get your garden ready for spring with these essential preparation tips...',
      likes: 156,
      comments: 23
    },
    {
      id: 2,
      title: 'Urban Gardening: Making the Most of Small Spaces',
      author: 'David Chen',
      date: 'Jan 28, 2025',
      readTime: '7 min read',
      image: '/api/placeholder/400/200',
      excerpt: 'Transform your small urban space into a thriving garden with these creative solutions...',
      likes: 198,
      comments: 34
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Beginner's Guide to Indoor Plants",
      creator: 'Plant Care Basics',
      thumbnail: '/api/placeholder/400/225',
      duration: '12:34',
      views: '2.3K',
      likes: 245
    },
    {
      id: 2,
      title: 'DIY Garden Tool Organization',
      creator: 'Garden Craft',
      thumbnail: '/api/placeholder/400/225',
      duration: '8:45',
      views: '1.8K',
      likes: 189
    }
  ];

  const topics = [
    'All Topics',
    'Plant Health',
    'Composting',
    'Urban Gardening',
    'Indoor Plants',
    'Seasonal Care',
    'Tools & Equipment'
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: colors.background }}>
      <div className="flex-1">
        <div className="p-8 pb-0">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 
                className="text-4xl font-bold"
                style={{ color: colors.deep, fontFamily: "'Gilda Display', serif" }}
              >
                Community
              </h1>
            </div>

            <div className="flex gap-4 border-b" style={{ borderColor: colors.accent }}>
              {['Discussions', 'Blogs', 'Videos'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className="px-6 py-3 relative"
                  style={{ color: activeTab === tab.toLowerCase() ? colors.deep : colors.primary }}
                >
                  {tab}
                  {activeTab === tab.toLowerCase() && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{ backgroundColor: colors.tertiary }}
                      layoutId="activeTab"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-8">
              <div className="w-64 flex-shrink-0">
                <div className="p-4 rounded-xl" style={{ backgroundColor: colors.highlight }}>
                  <h2 className="font-bold mb-4" style={{ color: colors.deep }}>
                    Topics
                  </h2>
                  <div className="space-y-2">
                    {topics.map(topic => (
                      <button
                        key={topic}
                        onClick={() => setSelectedTopic(topic.toLowerCase())}
                        className="w-full text-left px-3 py-2 rounded-lg"
                        style={{
                          backgroundColor: selectedTopic === topic.toLowerCase() ? colors.accent : 'transparent',
                          color: colors.deep
                        }}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 flex items-center gap-2 p-3 rounded-lg" style={{ backgroundColor: colors.accent }}>
                    <FiSearch style={{ color: colors.deep }} />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      className="flex-1 bg-transparent outline-none"
                      style={{ color: colors.deep }}
                    />
                  </div>
                  <button className="p-3 rounded-lg" style={{ backgroundColor: colors.accent }}>
                    <FiFilter style={{ color: colors.deep }} />
                  </button>
                </div>

                {activeTab === 'discussions' && (
                  <div className="space-y-6">
                    {discussions.map(discussion => (
                      <motion.div
                        key={discussion.id}
                        className="p-6 rounded-xl"
                        style={{ backgroundColor: colors.accent }}
                        whileHover={{ y: -2 }}
                      >
                        <div className="flex gap-4">
                          <img
                            src={discussion.user.avatar}
                            alt={discussion.user.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-bold" style={{ color: colors.deep }}>
                                  {discussion.user.name}
                                </h3>
                                <p className="text-sm" style={{ color: colors.primary }}>
                                  {discussion.user.expertise} • {discussion.timeAgo}
                                </p>
                              </div>
                              <button>
                                <FiMoreHorizontal style={{ color: colors.deep }} />
                              </button>
                            </div>
                            <h4 className="text-lg font-bold mt-2" style={{ color: colors.deep }}>
                              {discussion.title}
                            </h4>
                            <p className="mt-2" style={{ color: colors.primary }}>
                              {discussion.content}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              {discussion.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 rounded-full text-sm"
                                  style={{ backgroundColor: colors.background, color: colors.deep }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-6 mt-4">
                              <button className="flex items-center gap-2" style={{ color: colors.deep }}>
                                <FiThumbsUp /> {discussion.likes}
                              </button>
                              <button className="flex items-center gap-2" style={{ color: colors.deep }}>
                                <FiMessageSquare /> {discussion.comments}
                              </button>
                              <button className="flex items-center gap-2" style={{ color: colors.deep }}>
                                <FiShare2 />
                              </button>
                              <button className="flex items-center gap-2" style={{ color: colors.deep }}>
                                <FiBookmark />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'blogs' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogs.map(blog => (
                      <motion.div
                        key={blog.id}
                        className="rounded-xl overflow-hidden"
                        style={{ backgroundColor: colors.accent }}
                        whileHover={{ y: -2 }}
                      >
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2" style={{ color: colors.deep }}>
                            {blog.title}
                          </h3>
                          <p className="text-sm mb-3" style={{ color: colors.primary }}>
                            By {blog.author} • {blog.date} • {blog.readTime}
                          </p>
                          <p style={{ color: colors.primary }}>
                            {blog.excerpt}
                          </p>
                          <div className="flex gap-4 mt-4">
                            <button className="flex items-center gap-2" style={{ color: colors.deep }}>
                              <FiHeart /> {blog.likes}
                            </button>
                            <button className="flex items-center gap-2" style={{ color: colors.deep }}>
                              <FiMessageSquare /> {blog.comments}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'videos' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map(video => (
                      <motion.div
                        key={video.id}
                        className="rounded-xl overflow-hidden"
                        style={{ backgroundColor: colors.accent }}
                        whileHover={{ y: -2 }}
                      >
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-48 object-cover"
                          />
                          <div 
                            className="absolute bottom-2 right-2 px-2 py-1 rounded"
                            style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: 'white' }}
                          >
                            {video.duration}
                          </div>
                          <button 
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                          >
                            <FiPlayCircle size={48} color="white" />
                          </button>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2" style={{ color: colors.deep }}>
                            {video.title}
                          </h3>
                          <p className="text-sm mb-3" style={{ color: colors.primary }}>
                            {video.creator} • {video.views} views
                          </p>
                          <div className="flex gap-4">
                            <button className="flex items-center gap-2" style={{ color: colors.deep }}>
                              <FiThumbsUp /> {video.likes}
                            </button>
                            <button className="flex items-center gap-2" style={{ color: colors.deep }}>
                              <FiShare2 />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
