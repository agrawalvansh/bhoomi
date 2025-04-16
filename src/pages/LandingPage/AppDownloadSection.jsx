import React from 'react';
import { motion } from 'framer-motion';

const AppDownloadSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const phoneVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  return (
    <div className="flex items-center justify-center p-8 bg-[#f5f5f0] pb-12">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className="w-full max-w-4xl mx-auto rounded-3xl border-2 border-[#2d5a27] backdrop-blur-lg overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #f5f5f0 20%, #2d5a27 100%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between p-8">
          {/* Left side - Download text and buttons */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <motion.h2 
              variants={containerVariants}
              className="text-2xl md:text-3xl font-bold mb-4 leading-tight" 
              style={{ color: '#2d5a27' }}
            >
              Download the app now!
            </motion.h2>
            
            <motion.p 
              variants={containerVariants}
              className="text-base mb-6 opacity-90" 
              style={{ color: '#2d5a27' }}
            >
              Experience seamless online ordering only on the Bhoomi app
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="flex justify-center md:justify-start items-center space-x-4 pt-4"
            >
              <a href="#" className="inline-block transition-transform hover:scale-95">
                <img
                  src="/imgs/landingPage/AppSection/google_play.png"
                  alt="Get it on Google Play"
                  className="h-10 w-auto object-contain"
                  style={{ maxWidth: '141px', height: '42px' }}
                />
              </a>
              <a href="#" className="inline-block transition-transform hover:scale-95">
                <img
                  src="/imgs/landingPage/AppSection/apple.png"
                  alt="Download on the App Store"
                  className="h-10 w-auto object-contain"
                  style={{ maxWidth: '132px', height: '44px' }}
                />
              </a>
            </motion.div>
          </div>

          {/* Right side - Animated Phone */}
          <motion.div 
            variants={phoneVariants}
            className="w-full md:w-1/2 flex justify-center items-end mt-8 md:mt-0 relative"
          >
            <div className="relative transform">
              <div className="relative" style={{ width: "320px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
                <img 
                  src="/imgs/landingPage/AppSection/mobile.png" 
                  alt="Smartphone" 
                  className="w-full rounded-3xl transform translate-y-6" 
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
                  <p className="text-center mb-3 text-sm font-medium opacity-90 text-[#2d5a27]">
                    Scan the QR code to 
                    <br />
                    download the app
                  </p>
                  <div className="w-36 h-36 bg-[#f5f5f0] p-2 rounded-lg flex items-center justify-center shadow-sm border-2 border-[#2d5a27]">
                    <div className="w-full h-full border border-gray-100 rounded flex items-center justify-center">
                      <img 
                        src="/imgs/landingPage/AppSection/adobe-express-qr-code.svg" 
                        alt="QR Code" 
                        className="w-full h-full animate-pulse-slow" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppDownloadSection;