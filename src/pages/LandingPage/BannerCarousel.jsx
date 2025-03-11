import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  
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

  const banners = [
    {
      id: 1,
      title: "New Arrivals",
      subtitle: "Check out our latest products",
      promoCode: "NEWARRIVALS15",
      buttonText: "SHOP NOW",
      imageUrl: "/imgs/landingPage/Img-2.webp",
      backgroundColor: colors.background
    },
    {
      id: 2,
      title: "Best Sellers",
      subtitle: "Most loved by plant Parents",
      promoCode: "BESTSELLER15",
      buttonText: "EXPLORE NOW",
      imageUrl: "/imgs/landingPage/Img-1.jpeg",
      backgroundColor: colors.background
    },
    {
      id: 3,
      title: "Planter Sale",
      subtitle: "Buy 2 Get 1 Free",
      promoCode: "PLANTER321",
      buttonText: "VIEW OFFERS",
      imageUrl: "/imgs/landingPage/Img-3.webp",
      backgroundColor: colors.background
    }
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(intervalRef.current);
  }, [banners.length]);

  const navigateSlide = (direction) => {
    clearInterval(intervalRef.current);
    setCurrentSlide(prev => (prev + direction + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: colors.accent }}>
      <div className="container mx-auto px-4 py-12">
        <div className="relative rounded-2xl overflow-hidden shadow-xl" 
             style={{ backgroundColor: colors.background }}>
          <div className="relative h-96 md:h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-between p-8">
                  {/* Text Content */}
                  <div className="md:w-1/2 space-y-6 text-center md:text-left mb-8 md:mb-0">
                    <motion.p 
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      className="text-xl font-light tracking-wider"
                      style={{ color: colors.secondary }}
                    >
                      {banners[currentSlide].title}
                    </motion.p>
                    
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-4xl md:text-5xl font-bold leading-tight"
                      style={{ color: colors.deep }}
                    >
                      {banners[currentSlide].subtitle}
                    </motion.h2>

                    <div className="flex items-center justify-center md:justify-start space-x-3">
                      <span className="text-lg" style={{ color: colors.tertiary }}>
                        Use code:
                      </span>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full font-medium"
                        style={{ 
                          backgroundColor: colors.secondary,
                          color: colors.deep
                        }}
                      >
                        {banners[currentSlide].promoCode}
                      </motion.span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-full font-medium text-lg mx-auto md:mx-0"
                      style={{
                        backgroundColor: colors.tertiary,
                        color: colors.background
                      }}
                    >
                      {banners[currentSlide].buttonText}
                    </motion.button>
                  </div>

                  {/* Image Container */}
                  <motion.div 
                    className="md:w-1/2 h-full flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img 
                      src={banners[currentSlide].imageUrl} 
                      alt={banners[currentSlide].title}
                      className="h-full w-full object-contain transform transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          {/* <div className="absolute inset-0 flex items-center justify-between px-4">
            <button 
              onClick={() => navigateSlide(-1)}
              className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              style={{ 
                backgroundColor: colors.background + 'CC',
                color: colors.deep
              }}
            >
              <span className="text-2xl font-bold">‹</span>
            </button>
            
            <button 
              onClick={() => navigateSlide(1)}
              className="p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              style={{ 
                backgroundColor: colors.background + 'CC',
                color: colors.deep
              }}
            >
              <span className="text-2xl font-bold">›</span>
            </button>
          </div> */}

          {/* Progress Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index ? 'scale-150' : 'scale-100'
                }`}
                style={{
                  backgroundColor: currentSlide === index 
                    ? colors.deep 
                    : colors.secondary,
                  opacity: currentSlide === index ? 1 : 0.5
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;