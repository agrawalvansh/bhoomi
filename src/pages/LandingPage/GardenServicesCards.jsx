import React from 'react';
import { useNavigate } from 'react-router-dom';

const GardenServicesCards = () => {
  const navigate = useNavigate();

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
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.primary }}>
        Need more help? We've got you covered.
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Garden Design Card */}
        <div 
          className="flex-1 rounded-lg p-8 shadow-md cursor-pointer transition-transform hover:scale-105" 
          style={{ backgroundColor: colors.background }}
          onClick={() => navigate('/user/service')}
          role="button"
          tabIndex={0}
        >
          <div className="flex justify-center mb-6">
            <img src="/imgs/landingPage/Garden-Setup.png" alt="Garden Design" className="w-24 h-24 rounded-full" />
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-center" style={{ color: colors.primary }}>
            Garden Setup
          </h3>
          
          <div className="flex justify-center mb-4">
            <div className="w-24 border-t-2" style={{ borderColor: colors.secondary }}></div>
          </div>
          
          <p className="text-center" style={{ color: colors.primary }}>
            Professional garden design and installation
          </p>
        </div>
        
        {/* Garden Maintenance Card */}
        <div 
          className="flex-1 rounded-lg p-8 shadow-md cursor-pointer transition-transform hover:scale-105" 
          style={{ backgroundColor: colors.background }}
          onClick={() => navigate('/user/service')}
          role="button"
          tabIndex={0}
        >
          <div className="flex justify-center mb-6">
            <img src="/imgs/landingPage/Garden-Maintenance.png" alt="Garden Installation" className="w-24 h-24 rounded-full" />
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-center" style={{ color: colors.primary }}>
            Garden Maintenance
          </h3>
          
          <div className="flex justify-center mb-4">
            <div className="w-24 border-t-2" style={{ borderColor: colors.secondary }}></div>
          </div>
          
          <p className="text-center" style={{ color: colors.primary }}>
            Regular maintenance and care for your garden
          </p>
        </div>
      </div>
    </div>
  );
};

export default GardenServicesCards;