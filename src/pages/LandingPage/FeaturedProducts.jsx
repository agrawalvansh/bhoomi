import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
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

  const products = [
    {
      name: "Monstera",
      description: "Add tropical vibes to your space with this popular houseplant",
      bgColor: colors.background,
      iconBgColor: colors.accent,
      image: "/imgs/landingPage/Products/3.svg" // Image placeholder for Monstera at 175x175px
    },
    {
      name: "Snake Plant",
      description: "Low-maintenance perfection for beginners",
      bgColor: colors.highlight,
      iconBgColor: colors.secondary,
      image: "/imgs/landingPage/Products/1.svg" // Image placeholder for Snake Plant at 175x175px
    },
    {
      name: "Peace Lily",
      description: "Natural air purification for indoor spaces",
      bgColor: colors.warm,
      iconBgColor: colors.tertiary,
      image: "/imgs/landingPage/Products/2.svg" // Image placeholder for Peace Lily at 175x175px
    },
    {
      name: "Fiddle Leaf",
      description: "Dramatic foliage for statement interiors",
      bgColor: colors.background,
      iconBgColor: colors.deep,
      image: "/imgs/landingPage/Products/7.svg" // Image placeholder for Fiddle Leaf at 175x175px
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  return (
    <div className="w-full bg-[#f5f5f0] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center mb-20"
        >
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-center" 
            style={{ color: '#2d5a27' }}
          >
            Our Green Best Sellers
          </h1>
          <div className="flex items-center mb-6">
            <div 
              className="h-px w-16 bg-current mr-4" 
              style={{ color: colors.secondary }}
            ></div>
            <h2 
              className="text-lg tracking-wide text-center font-medium uppercase" 
              style={{ color: colors.tertiary }}
            >
              Nurturing Life, One Plant at a Time
            </h2>
            <div 
              className="h-px w-16 bg-current ml-4" 
              style={{ color: colors.secondary }}
            ></div>
          </div>
        </motion.div>

        {/* Products Grid - Updated to 2 columns for mobile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <Link key={index} to="/user/shop/indoor-plants" className="h-full">
              <motion.div 
                variants={itemVariants}
                className="rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col items-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer h-full"
                style={{ 
                  backgroundColor: product.bgColor,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)'
                }}
              >
                <motion.div 
                  className="rounded-2xl overflow-hidden mb-4 md:mb-6 lg:mb-8"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  <motion.img 
                    src={product.image}
                    alt={product.name}
                    width="175"
                    height="175"
                    className="w-auto h-auto"
                    animate={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                
                <h3 
                  className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 lg:mb-4 text-center" 
                  style={{ color: colors.primary }}
                >
                  {product.name}
                </h3>
                
                <p 
                  className="text-xs md:text-sm lg:text-base text-center mb-3 md:mb-4 lg:mb-6 leading-relaxed" 
                  style={{ color: colors.tertiary }}
                >
                  {product.description}
                </p>
                
                <motion.div 
                  className="flex items-center group mt-auto"
                  whileHover={{ x: 5 }}
                >
                  <span 
                    className="text-xs md:text-sm font-semibold tracking-wide" 
                    style={{ color: colors.primary }}
                  >
                    Discover More
                  </span>
                  <svg 
                    width="16" 
                    height="14" 
                    viewBox="0 0 20 16" 
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    style={{ fill: colors.primary }}
                  >
                    <path d="M12.5 1L19 8L12.5 15" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M0 8H19" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>                 
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProducts;