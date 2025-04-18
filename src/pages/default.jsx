import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Default = () => {
  const colors = {
    primary: '#2d5a27',
    secondary: '#D4B982',
    tertiary: '#2d5a27',
    background: '#f5f5f0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F6F0]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold" style={{ color: colors.primary }}>
          404
        </h1>
        <h2 className="text-2xl mt-4" style={{ color: colors.tertiary }}>
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all"
            style={{
              backgroundColor: colors.tertiary,
              color: colors.background
            }}
          >
            <FiHome className="w-5 h-5" />
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Default;