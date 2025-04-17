import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const NavTile = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: 'GARDEN DESIGN',
      subtitle: 'From Expert Designers',
      offer: 'UPTO 15% OFF',
      image: '/imgs/landingPage/First-Div/Services/1.svg'
    },
    {
      title: 'INSTAGREEN',
      subtitle: 'Instant Garden Setup from Experts',
      offer: 'UPTO 20% OFF',
      image: '/imgs/landingPage/First-Div/Services/2.svg'
    },
    {
      title: 'CONSULTATION',
      subtitle: 'Expert Advice & Save More',
      offer: 'UPTO 25% OFF',
      image: '/imgs/landingPage/First-Div/Services/3.svg'
    }
  ];

  return (
    <div className="w-full relative overflow-hidden" style={{ backgroundColor: '#2d5a27' }}>
      {/* Header/Nav with animations */}
      <header className="w-full py-3 px-5 flex items-center justify-between sticky top-0 z-50 transition-all duration-300 hover:shadow-lg animate-fade-down">
        <div className="flex items-center space-x-2 animate-bounce-in">
          <div className="w-10 h-10 rounded-full bg-[#f5f5f0] p-1 hover:scale-110 transition-transform duration-300 cursor-pointer">
            <img src="/imgs/logo/Bhoomi Icon.svg" alt="Bhoomi Logo" className="w-full h-full object-contain" />
          </div>
          <a href="/" className="text-xl font-bold text-[#f5f5f0] tracking-tighter hover:text-[#D4B982] transition-colors duration-300 cursor-pointer">
            Bhoomi
          </a>
        </div>
        
        {/* Navigation buttons with animations */}
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <button 
              className="px-3 py-1 rounded-full text-[#f5f5f0] text-sm font-medium border border-[#D4B982] hover:bg-[#D4B982] hover:text-[#2d5a27] transition-all duration-300 animate-slide-left cursor-pointer"
              style={{ animationDelay: '0.2s' }}
            >
              App
            </button>
            <button 
              className="px-3 py-1 rounded-full text-[#f5f5f0] text-sm font-medium border border-[#D4B982] hover:bg-[#D4B982] hover:text-[#2d5a27] transition-all duration-300 animate-slide-left cursor-pointer"
              style={{ animationDelay: '0.4s' }}
              onClick={() => navigate('/login')}
            >
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with text animations */}
      <div className="container mx-auto px-4 pt-8 pb-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f5f5f0] leading-tight mb-4 max-w-3xl mx-auto">
            <span className="block mb-2 transition-all duration-500 animate-float-up">Transform your Space with Effortless Greenery</span>
            <span className="text-[#D4B982] block mb-2 transition-all duration-500 animate-float-up" style={{ animationDelay: '0.2s' }}>Expert Urban Gardening Solutions</span>
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold relative inline-block animate-underline">
            Grow With Bhoomi!
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D4B982] transition-all duration-700"></span>
            </span>
          </h2>
        </div>
        
        {/* Search Bar with scale animation */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-4xl mx-auto">
          <div className="relative flex items-center bg-[#f5f5f0] p-2 rounded-xl w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px] mb-2 sm:mb-0 animate-scale-in">
            <MapPin className="text-gray-500 ml-1 mr-1" size={18} />
            <input 
              type="text" 
              placeholder="Enter location" 
              className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500 text-sm"
            />
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="relative flex items-center bg-[#f5f5f0] p-2 rounded-xl w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px] animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Search className="text-gray-500 ml-1 mr-1" size={18} />
            <input 
              type="text" 
              placeholder="Search plants & services" 
              className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Services Section - Modified with enhanced animations */}
      <div className="container mx-auto px-4 pb-12 relative z-10">
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-2xl">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col bg-[#f5f5f0] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group animate-staggered-fade justify-between"
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  opacity: 0 // Initial state for animation
                }}
              >
                <div className="p-2 sm:p-4 hover:bg-gray-50 transition-colors duration-300">
                  <h3 className="text-xs sm:text-base font-bold mb-1 transform group-hover:translate-x-2 transition-transform duration-300 text-center sm:text-left" style={{ color: colors.primary }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xxs sm:text-xs mb-1 sm:mb-2 transform group-hover:translate-x-2 transition-transform duration-300 text-center sm:text-left">
                    {service.subtitle}
                  </p>
                  <p className="text-[#D4B982] text-xxs sm:text-sm font-medium transform group-hover:translate-x-2 transition-transform duration-300 text-center sm:text-left">
                    {service.offer}
                  </p>
                </div>
                <div className="relative overflow-hidden group">
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 z-10"></div>
                  <div className="absolute bottom-2 left-2 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="group w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#D4B982] hover:bg-opacity-90 transition-all shadow-md transform hover:scale-110 cursor-pointer"
                    onClick={() => navigate('/user/service')}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f5f5f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-20 sm:h-36 object-cover transition-transform duration-700 group-hover:scale-110 animate-image-fade"
                    style={{ opacity: 0 }} // Initial state for image animation
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Images with floating animation */}
      <div className="absolute left-0 top-1/4 z-0 opacity-80 mix-blend-multiply animate-float">
        <img 
          src="/imgs/landingPage/First-Div/1.svg" 
          alt="Garden plants" 
          className="w-32 sm:w-40 md:w-64 h-auto object-contain transform -rotate-12 hover:rotate-0 transition-transform duration-1000"
        />
      </div>
      <div className="absolute right-0 top-1/5 z-0 opacity-80 mix-blend-multiply animate-float" style={{ animationDelay: '0.5s' }}>
        <img 
          src="/imgs/landingPage/First-Div/2.svg" 
          alt="Beautiful garden" 
          className="w-32 sm:w-40 md:w-64 h-auto object-contain transform rotate-12 hover:rotate-0 transition-transform duration-1000"
        />
      </div>

      {/* Animation Keyframes - Enhanced with new animations */}
      <style>
        {`
        /* Text size for very small screens */
        .text-xxs {
          font-size: 0.65rem;
          line-height: 1rem;
        }
        
        @keyframes fade-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-in {
          0% { transform: scale(0.9); opacity: 0; }
          60% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes slide-left {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes float-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes staggered-fade {
          0% { 
            opacity: 0;
            transform: translateY(20px) rotate(3deg);
          }
          70% {
            opacity: 1;
            transform: translateY(-5px) rotate(-1deg);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) rotate(0);
          }
        }

        @keyframes image-fade {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-down { animation: fade-down 0.6s ease-out; }
        .animate-bounce-in { animation: bounce-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .animate-slide-left { animation: slide-left 0.5s ease-out forwards; }
        .animate-float-up { animation: float-up 0.6s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .animate-staggered-fade { 
          animation: staggered-fade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-image-fade {
          animation: image-fade 0.6s ease-out forwards;
          animation-delay: 0.4s; /* Delay to sync with card animation */
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        
        /* Add smooth transition for image loading */
        img {
          transition: opacity 0.3s ease-in-out;
        }
        `}
      </style>
    </div>
  );
};

export default NavTile;