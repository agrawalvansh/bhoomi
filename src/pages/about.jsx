import React from 'react';
import { 
  FiUsers, FiMap, FiAward, FiHeart,
  FiTrendingUp, FiThumbsUp, FiSun, FiDroplet,
  FiTarget, FiTrello, FiBarChart2, FiArrowDown,
  FiShield, FiBox, FiCoffee, FiStar
} from 'react-icons/fi';

const AboutPage = () => {
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

  const values = [
    {
      icon: FiSun,
      title: 'Sustainability First',
      description: 'Every decision we make prioritizes environmental sustainability and long-term ecological balance.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation Driven',
      description: 'We combine traditional gardening wisdom with modern technology to create optimal growing conditions.'
    },
    {
      icon: FiThumbsUp,
      title: 'Customer Success',
      description: "Your garden's success is our success. We're committed to providing ongoing support and education."
    }
  ];

  const businessModel = [
    {
      icon: FiBox,
      title: 'Product Sales',
      description: 'High-quality plants, soil, fertilizers, and essential plant care tools/accessories to meet all gardening needs.'
    },
    {
      icon: FiBarChart2,
      title: 'Maintenance Services',
      description: 'Expert plant care with flexible one-time visits or subscription plans for maintenance, pruning, and health checks.'
    },
    {
      icon: FiStar,
      title: 'Consultation',
      description: 'Personalized gardening advice from our experts, tailored to your space, lifestyle, and gardening goals.'
    }
  ];

  const uniqueFeatures = [
    {
      icon: FiShield,
      title: 'Complete Solution',
      description: 'From planning to maintenance, we handle every aspect of your urban garden.'
    },
    {
      icon: FiCoffee,
      title: 'Stress-Free Experience',
      description: 'Our experts take care of all the complicated parts, letting you simply enjoy your garden.'
    },
    {
      icon: FiHeart,
      title: 'Chemical-Free Plants',
      description: 'All our plants are grown organically without harmful chemicals for a healthier living space.'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      {/* Hero Section */}
      <div className="relative py-32" style={{ 
        background: `linear-gradient(160deg, ${colors.deep} 0%, ${colors.tertiary} 100%)`
      }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Bringing Nature Closer<br />to Urban Lives
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Founded in 2025, Bhoomi is revolutionizing urban gardening with sustainable solutions 
            and smart technology for homes and offices across Bangalore.
          </p>
          <a 
            href="#learn-more" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all"
            style={{ backgroundColor: colors.secondary, color: colors.deep }}
          >
            Learn More <FiArrowDown />
          </a>
        </div>
        
        {/* Decorative plant elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.5,-76.3C55.9,-69.9,62.2,-54.5,68.2,-39.9C74.2,-25.4,79.9,-12.7,79.6,-0.2C79.3,12.4,73,24.7,65.5,35.7C58.1,46.7,49.4,56.2,38.7,63.9C28,71.5,14,77.3,-0.2,77.6C-14.4,77.9,-28.8,72.7,-39.2,64.1C-49.6,55.6,-56,43.7,-63.1,31.6C-70.1,19.5,-77.8,7.3,-78.4,-5.5C-79,-18.3,-72.3,-31.5,-63.3,-41.6C-54.3,-51.7,-42.8,-58.7,-31,-62.9C-19.1,-67.1,-6.9,-68.5,7,-74.3C20.9,-80.1,33.1,-82.7,44.5,-76.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M37.6,-64.1C47.8,-57.9,54.6,-45.8,62.4,-33.3C70.2,-20.8,79,-8,79.8,5.5C80.6,19,73.5,33.2,64.1,44.6C54.8,56,43.3,64.7,30.3,71.1C17.3,77.6,2.9,81.8,-11.9,80.3C-26.7,78.9,-41.8,71.7,-54.1,61.1C-66.3,50.5,-75.7,36.5,-79.8,21C-83.9,5.6,-82.7,-11.3,-76.6,-25.5C-70.5,-39.7,-59.5,-51.3,-46.5,-56.6C-33.4,-61.9,-18.3,-61,-3.5,-55.4C11.2,-49.9,27.3,-70.3,37.6,-64.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      {/* Company Description */}
      <div id="learn-more" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-10 text-center relative" style={{ color: colors.deep }}>
              <span className="inline-block relative">
                Who We Are
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
                  style={{ backgroundColor: colors.secondary }}></span>
              </span>
            </h2>
            <div className="space-y-6" style={{ color: colors.primary }}>
              <p className="text-lg leading-relaxed">
                Bhoomi is an urban gardening solution. We provide end-to-end garden arrangements with healthy, chemical-free plants and all necessary equipment, tailor-made for your location.
              </p>
              <div className="border-l-4 pl-6 my-8 py-4 rounded-r-lg" 
                style={{ 
                  borderColor: colors.tertiary,
                  backgroundColor: `${colors.accent}20`
                }}>
                <p className="font-semibold text-xl mb-2" style={{ color: colors.tertiary }}>
                  Our Promise:
                </p>
                <p className="text-lg">
                  Making urban gardening easy, accessible, and sustainable through complete solutions from design to maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem & Solution Section */}
      <div className="py-20 px-4" style={{ backgroundColor: `${colors.deep}05` }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center relative" style={{ color: colors.deep }}>
            <span className="inline-block relative">
              The Urban Gardening Challenge
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
                style={{ backgroundColor: colors.secondary }}></span>
            </span>
          </h2>
          <div className="space-y-8">
            <div className="flex items-start gap-5 p-6 rounded-lg transition-all hover:shadow-md"
              style={{ backgroundColor: 'white' }}>
              <div className="w-3 h-3 mt-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors.tertiary }}></div>
              <p className="text-lg leading-relaxed" style={{ color: colors.primary }}>
                Urban residents struggle with gardening due to limited time, space, and expert guidance.
              </p>
            </div>
            <div className="flex items-start gap-5 p-6 rounded-lg transition-all hover:shadow-md"
              style={{ backgroundColor: 'white' }}>
              <div className="w-3 h-3 mt-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors.tertiary }}></div>
              <p className="text-lg leading-relaxed" style={{ color: colors.primary }}>
                Existing solutions lack reliable advice and space-efficient strategies.
              </p>
            </div>
            <div className="flex items-start gap-5 p-6 rounded-lg transition-all hover:shadow-md"
              style={{ backgroundColor: 'white' }}>
              <div className="w-3 h-3 mt-2 rounded-full flex-shrink-0" style={{ backgroundColor: colors.tertiary }}></div>
              <p className="text-lg leading-relaxed" style={{ color: colors.primary }}>
                Finding high-quality plants, suitable for specific indoor and outdoor conditions, remains a significant challenge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center relative" style={{ color: colors.deep }}>
            <span className="inline-block relative">
              What Sets Us Apart
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
                style={{ backgroundColor: colors.secondary }}></span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm transition-all hover:shadow-md border border-transparent hover:border-gray-200">
                <div className="w-12 h-12 flex items-center justify-center rounded-full mb-6" 
                  style={{ backgroundColor: `${colors.tertiary}15` }}>
                  <feature.icon 
                    className="w-6 h-6"
                    style={{ color: colors.tertiary }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.deep }}>
                  {feature.title}
                </h3>
                <p style={{ color: colors.primary }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-lg text-center" style={{ color: colors.primary }}>
              Bhoomi offers a complete gardening solution with custom planning, expert consultations, and long-term care. 
              Our on-demand maintenance, vertical gardening, and 3D garden designs make urban gardening stress-free. 
              Our fast setup, sustainable methods, and organic, chemical-free plants set us apart.
            </p>
          </div>
        </div>
      </div>

      {/* Business Model */}
      <div className="py-20 px-4" style={{ backgroundColor: colors.highlight }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: colors.deep }}>
            <span className="inline-block relative">
              Our Services
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
                style={{ backgroundColor: colors.tertiary }}></span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {businessModel.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-14 h-14 flex items-center justify-center rounded-full mb-6" 
                  style={{ backgroundColor: `${colors.tertiary}15` }}>
                  <item.icon 
                    className="w-7 h-7"
                    style={{ color: colors.tertiary }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.deep }}>
                  {item.title}
                </h3>
                <p style={{ color: colors.primary }}>
                  {item.description}
                </p>
                <a 
                  href="#" 
                  className="inline-block mt-6 text-sm font-medium"
                  style={{ color: colors.tertiary }}
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: colors.deep }}>
            <span className="inline-block relative">
              Our Values
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full"
                style={{ backgroundColor: colors.secondary }}></span>
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm transition-all hover:shadow-md">
                <div className="w-14 h-14 flex items-center justify-center rounded-full mb-6" 
                  style={{ backgroundColor: `${colors.deep}10` }}>
                  <value.icon 
                    className="w-7 h-7"
                    style={{ color: colors.deep }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.deep }}>
                  {value.title}
                </h3>
                <p style={{ color: colors.primary }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 px-4" style={{ 
        background: `linear-gradient(160deg, ${colors.deep} 0%, ${colors.tertiary} 100%)`
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join the urban gardening revolution and bring nature closer to your daily life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="px-8 py-3 rounded-full font-medium transition-all"
              style={{ backgroundColor: colors.secondary, color: colors.deep }}
            >
              Get Started
            </a>
            <a 
              href="/" 
              className="px-8 py-3 rounded-full font-medium transition-all border-2 border-white/30 text-white hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;