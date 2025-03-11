import React from 'react';
import { motion } from 'framer-motion';

export const Loading = ({ size = 'medium', color = 'green' }) => {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  const colors = {
    green: 'border-green-600',
    gray: 'border-gray-600',
    white: 'border-white'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ 
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
      className={`
        ${sizes[size]}
        ${colors[color]}
        border-2
        border-t-transparent
        rounded-full
      `}
    />
  );
};
