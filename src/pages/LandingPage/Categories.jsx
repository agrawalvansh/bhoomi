import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { categories } from '../../user/plantShopData';

const Categories = () => {
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

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full py-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 
            className="text-xl font-semibold uppercase tracking-wide"
            style={{ color: colors.primary }}
          >
            Order Plants
          </h2>
          
          <button 
            onClick={() => navigate('/user/cart')}
            className="relative p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            style={{ color: colors.primary }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span 
                className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full"
                style={{ backgroundColor: colors.secondary, color: colors.primary }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-4 gap-3">
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/user/shop/${category.slug}`)}
            >
              <div 
                className="relative w-full aspect-square rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-md"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.accent}20 0%, ${colors.tertiary}20 100%)`
                }}
              >
                {/* Semi-transparent plant image */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <p 
                className="text-center text-sm font-medium mt-2 transition-colors duration-300 group-hover:text-[#4A6741]"
                style={{ color: colors.primary }}
              >
                {category.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Categories;