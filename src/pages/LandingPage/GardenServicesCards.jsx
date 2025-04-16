import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Flower2, Flower } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GardenServicesGold = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView();

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

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative overflow-hidden pt-10 pb-10 bg-[#f5f5f0]">
      {/* Top Curve (Symmetrical) */}
      <div className="w-full h-30 overflow-hidden relative">
        <svg
          className="absolute bottom-0 w-full"
          height="100%"
          width="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
        >
          <path
            d="M0,0 
               C360,40 720,80 1080,40 
               C1260,20 1350,0 1440,0 
               L1440,80 L0,80 Z"
            fill={colors.primary}
          />
        </svg>

        {/* Icons near the start of the top curve - positioned to be clearly visible */}
        <motion.div 
          className="absolute left-16 top-2 z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.accent }}
            >
              <Leaf size={32} color={colors.primary} />
            </div>
          </motion.div>
        </motion.div>

        {/* Icons near the end of the top curve - positioned to be clearly visible */}
        <motion.div 
          className="absolute right-16 top-2 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.accent }}
            >
              <Flower2 size={32} color={colors.primary} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div 
        className="w-full relative px-4"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="py-6 flex flex-col items-center" ref={ref}>
          <motion.h2
            className="text-center mb-4 text-white text-4xl font-bold"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
          >
            Garden Services
          </motion.h2>

          <motion.div 
            className="text-center mb-10 max-w-md"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
            style={{ color: colors.secondary }}
          >
            <p className="text-lg">India's Top Garden Services for Nature Lovers</p>
          </motion.div>

          {/* Services Section */}
          <motion.div 
            className="flex flex-col md:flex-row justify-center w-full max-w-3xl gap-8 mb-12"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
            onClick={() => navigate('/user/service')}
          >
            {['Garden Setup', 'Garden Maintenance'].map((service, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4 flex-1 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-opacity-20"
                whileHover={{ scale: 1.02 }}
                style={{ backgroundColor: 'rgba(168, 198, 159, 0.1)' }}
              >
                <div 
                  className="p-4 rounded-lg bg-opacity-30"
                  style={{ backgroundColor: `${colors.accent}30` }}
                >
                  {/* Updated image container size */}
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img 
                      src={`/imgs/landingPage/${service.replace(' ', '-')}.png`} 
                      alt={service}
                      className="w-16 h-16 rounded-full transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service}</h3>
                  <p style={{ color: colors.secondary }}>
                    {index === 0 
                      ? 'At all locations in your City'
                      : 'At 20,000+ Experts Team'}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div 
            className="flex items-center justify-center mb-12 w-full"
            variants={fadeIn}
            initial="hidden"
            animate={controls}
          >
            <div className="h-px flex-1 bg-secondary bg-opacity-30"></div>
            <span className="px-4 text-xl font-bold text-white">
              Need more help? We've got you covered.
            </span>
            <div className="h-px flex-1 bg-secondary bg-opacity-30"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Curve (Symmetrical) */}
      <div className="w-full h-28 overflow-hidden relative">
        <svg
          className="absolute top-0 w-full"
          height="100%"
          width="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
        >
          <path
            d="M0,80 
               C360,40 720,0 1080,40 
               C1260,60 1350,80 1440,80 
               L1440,0 L0,0 Z"
            fill={colors.primary}
          />
        </svg>
        
        {/* Bottom Left Icon */}
        <motion.div 
          className="absolute left-16 bottom-0 z-10"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: colors.accent }}
            >
              <Leaf size={32} color={colors.primary} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GardenServicesGold;