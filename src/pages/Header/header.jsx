import React, { useState } from 'react';
import { FiUser, FiShoppingBag, FiSearch, FiChevronDown } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdHistory } from "react-icons/md";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  
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

  const mainNavItems = [    
    { label: "SERVICES", to: "/user/service"},
    { 
      label: "PLANTS", 
      to: "/user/shop"
    },
    { label: "POTS & PLANTERS", to: "/user/shop" },
    { label: "BLOG", to: "/user/community" },
  ];

  return (
    <div className="flex flex-col w-full relative">
      {/* Top Navigation */}
      <nav className="w-full bg-white shadow-sm relative z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <img 
              src="/imgs/logo/Bhoomi Logo.png" 
              alt="Bhoomi" 
              className="h-12"
              style={{ color: colors.deep }}
            />
          </Link>

          {/* Main Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {mainNavItems.map((item, index) => (
              <div 
                key={index}
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.to}
                  className="flex items-center px-3 py-2 text-sm font-medium hover:text-green-700 transition-colors duration-200 group"
                  style={{ color: colors.primary }}
                >
                  {item.label}
                  {item.subItems && (
                    <FiChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === index && (
                  <div 
                    className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1 animate-fadeIn"
                    style={{ 
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative flex-grow max-w-md mx-6">
            <div className="flex items-center border rounded-full overflow-hidden transition-all duration-300 focus-within:border-green-600 focus-within:shadow-sm hover:border-green-400"
              style={{ borderColor: '#e2e8f0' }}>
              <input
                type="text"
                placeholder="Search for plants, pots and planters ..."
                className="w-full py-2 px-4 focus:outline-none text-sm bg-transparent placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="p-2 bg-green-100 rounded-full m-1 transition-colors hover:bg-green-200">
                <FiSearch className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
          <Link to="/user/order-history">
              <button className="p-2 rounded-full hover:bg-green-50 transition-colors">
                <MdHistory className="h-6 w-6" style={{ color: colors.deep }} />
              </button>
            </Link>
            <Link to="/user/profile">
              <button className="p-2 rounded-full hover:bg-green-50 transition-colors">
                <FiUser className="h-6 w-6" style={{ color: colors.deep }} />
              </button>
            </Link>
            <Link to="/">
              <button className="p-2 rounded-full hover:bg-green-50 transition-colors relative">
                <FiShoppingBag className="h-6 w-6" style={{ color: colors.deep }} />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  3
              </span>
            </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;