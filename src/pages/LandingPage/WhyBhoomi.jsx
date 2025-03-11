import React from 'react';
import { motion } from 'framer-motion';
import {  FiDroplet, FiCheckCircle, FiHome } from 'react-icons/fi';

const WhyBhoomi = () => {
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

  const features = [
    {
      icon: <FiHome  className="w-12 h-12" />,
      title: 'Expert Design',
      description: 'AI-powered layout planning with human expertise review'
    },
    {
      icon: <FiDroplet className="w-12 h-12" />,
      title: 'On-Demand Maintenance',
      description: 'Flexible service plans for homes and commercial spaces'
    },
    {
      icon: <FiCheckCircle className="w-12 h-12" />,
      title: 'Quality Guarantee',
      description: '90-day plant survival assurance'
    }
  ];

 return (
    <>
      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors.deep, fontFamily: "'Gilda Display', serif" }}>
        Why Bhoomi?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: colors.background }}
              >
                <div className="mb-6" style={{ color: colors.tertiary }}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.deep, fontFamily: "'Gilda Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-lg" style={{ color: colors.primary }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyBhoomi;
