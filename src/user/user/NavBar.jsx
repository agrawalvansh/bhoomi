//Not usingf we are using the header.jsx file for the navbar


import React, { useState } from 'react';
import { FiUser, FiShoppingBag, FiSearch } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  
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

  // Main navigation items from the image
  const mainNavItems = [
    { label: "PLANTS", to: "/plants" },
    { label: "SEEDS", to: "/seeds" },
    { label: "POTS & PLANTERS", to: "/pots-planters" },
    { label: "PLANT CARE", to: "/plant-care" },
    { label: "GIFTING", to: "/gifting" },
    { label: "BLOG", to: "/blog" },
    { label: "OFFERS", to: "/offers" }
  ];

  // Sub navigation items shown in the lighter green section
  const subNavItems = [
    { label: "Indoor Plants", to: "/plants/indoor" },
    { label: "Flowering Plants", to: "/plants/flowering" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Navigation */}
      <nav className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/placeholder-logo.png" 
                alt="Ugaoo" 
                className="h-12"
                style={{ color: colors.deep }}
              />
              {/* This is where you'd put your actual logo - I've used a placeholder */}
            </Link>
          </div>

          {/* Main Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.to}
                className="text-sm font-medium hover:text-green-700 transition-colors duration-200"
                style={{ color: colors.primary }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative flex-grow max-w-md mx-6">
            <div className="flex items-center border rounded-full overflow-hidden pr-2" style={{ borderColor: '#e2e8f0' }}>
              <input
                type="text"
                placeholder="Search for plants, seeds and planters ..."
                className="w-full py-2 px-4 focus:outline-none text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="p-1 rounded-full">
                <FiSearch className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className="p-1">
              <BiRupee className="h-6 w-6" style={{ color: colors.deep }} />
            </button>
            <button className="p-1">
              <FiUser className="h-6 w-6" style={{ color: colors.deep }} />
            </button>
            <button className="p-1">
              <FiShoppingBag className="h-6 w-6" style={{ color: colors.deep }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sub Navigation */}
      <div className="w-full" style={{ backgroundColor: colors.accent, opacity: 0.8 }}>
        <div className="container mx-auto px-4 py-3 flex items-center space-x-8">
          {subNavItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.to}
              className="text-sm font-medium hover:text-white transition-colors duration-200"
              style={{ color: colors.deep }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;