// Body.js
import React from 'react';
import { motion } from 'framer-motion';
import {  FiDroplet, FiCheckCircle, FiHome, FiTool } from 'react-icons/fi';
import { FiBriefcase } from "react-icons/fi";
// import * as FiIcons from 'react-icons/fi';

const LandingPage = () => {
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

  const solutions = [
    {
      icon: <FiHome className="w-8 h-8" />,
      title: 'Residential Solutions',
      description: 'Balcony to backyard transformations'
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: 'Commercial Spaces',
      description: 'Office greenery solutions'
    },
    {
      icon: <FiTool className="w-8 h-8" />,
      title: 'Maintenance Plans',
      description: 'Flexible care schedules'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold mb-8"
              style={{ color: colors.deep, fontFamily: "'Gilda Display', serif" }}
            >
              Transform Your Space with
              <span style={{ color: colors.secondary }}> Smart Urban Gardening</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl mb-12"
              style={{ color: colors.primary }}
            >
              Expert-designed green spaces powered by AI and sustainable practices
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold"
                style={{ 
                  backgroundColor: colors.tertiary,
                  color: colors.background
                }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-bold border-2"
                style={{
                  borderColor: colors.deep,
                  color: colors.deep
                }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors.deep, fontFamily: "'Gilda Display', serif" }}>
        Our Unique Approach
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

      {/* Solutions Section */}
      <section className="py-20" style={{ backgroundColor: `${colors.accent}33` }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: colors.deep, fontFamily: "'Gilda Display', serif" }}>
            Tailored Green Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4" style={{ color: colors.tertiary }}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: colors.deep }}>
                  {solution.title}
                </h3>
                <p className="text-lg" style={{ color: colors.primary }}>
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: colors.deep }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-8" style={{ color: colors.highlight, fontFamily: "'Gilda Display', serif" }}>
              Ready to Grow Your Urban Oasis?
            </h2>
            <p className="text-xl mb-12" style={{ color: colors.background }}>
              Schedule a free consultation with our gardening experts
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-xl font-bold"
              style={{
                backgroundColor: colors.secondary,
                color: colors.deep
              }}
            >
              Book Free Session
            </motion.button>
          </div>
        </div>
      </section>

    </>
  );
};

export default LandingPage;
