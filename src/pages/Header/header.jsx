import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
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
    <div style={{ backgroundColor: colors.background, fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold cursor-pointer" style={{ fontFamily: "'Gilda Display', serif", color: colors.deep }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Bhoomi</Link>
        </div>
          <div className="hidden md:flex gap-8">
            <Link to="/home" className="text-lg text-[#2D3B2D] hover:text-[#D4B982] transition-colors duration-300">
              Home
            </Link>
            <Link to="/login" className="text-lg text-[#2D3B2D] hover:text-[#D4B982] transition-colors duration-300">
              Services
            </Link>
            <Link to="/about" className="text-lg text-[#2D3B2D] hover:text-[#D4B982] transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-lg text-[#2D3B2D] hover:text-[#D4B982] transition-colors duration-300">
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
