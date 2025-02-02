import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiHome, FiAlertCircle } from 'react-icons/fi';

const NotFoundPage = () => {
  // Using the same color palette as your signup page
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB',
    warm: '#E6BAA3'
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl text-center"
        style={{
          border: `2px solid ${colors.accent}30`,
          boxShadow: `0 10px 30px ${colors.accent}20`
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <FiAlertCircle 
            className="w-24 h-24 mx-auto mb-6"
            style={{ color: colors.tertiary }}
          />
        </motion.div>

        <div className="space-y-4">
          <h1 
            className="text-4xl font-bold"
            style={{ color: colors.deep }}
          >
            404
          </h1>
          <h2 
            className="text-2xl font-semibold"
            style={{ color: colors.primary }}
          >
            Page Not Found
          </h2>
          <p 
            className="text-lg"
            style={{ color: colors.primary }}
          >
            Oops! It looks like this page has gone to seed. 
            Let's get you back to growing.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
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
        </motion.div>

        <div 
          className="text-sm mt-6"
          style={{ color: colors.primary }}
        >
          Need help? <a 
            href="/contact"
            className="font-semibold hover:underline"
            style={{ color: colors.deep }}
          >
            Contact Support
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;