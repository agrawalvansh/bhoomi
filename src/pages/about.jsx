import React from 'react';
import { 
  FiUsers, FiMap, FiAward, FiHeart,
  FiTrendingUp, FiThumbsUp, FiSun, FiDroplet
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

  const stats = [
    { icon: FiUsers, label: 'Happy Clients', value: '500+' },
    { icon: FiMap, label: 'Cities', value: '2' },
    { icon: FiAward, label: 'Projects Completed', value: '1000+' },
    { icon: FiHeart, label: 'Plants Nurtured', value: '10000+' }
  ];

  const founders = [
    {
      name: 'Khushi Sutar',
      role: 'Founder',
      image: '/api/placeholder/300/300',
      bio: 'Gitam University graduate with a passion for sustainable urban development. Khushi combined her engineering expertise with her love for nature to create Bhoomi.',
      expertise: 'Urban Planning & Business Strategy'
    },
    {
      name: 'Vansh Agrawal',
      role: 'Founder',
      image: '/api/placeholder/300/300',
      bio: 'A computer science graduate from Gitam University, Vansh developed Bhoomi\'s smart garden monitoring system. He believes in using technology to enhance our connection with nature.',
      expertise: 'Technology & Innovation'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundColor: colors.deep }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27, 77, 62, 0.8)' }}>
          <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bringing Nature Closer to Urban Lives
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Founded in 2023, Bhoomi is revolutionizing urban gardening with sustainable solutions 
              and smart technology for homes and offices across Mumbai and Bangalore.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-white shadow-sm"
              >
                <stat.icon 
                  className="w-8 h-8 mx-auto mb-4"
                  style={{ color: colors.tertiary }}
                />
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: colors.deep }}
                >
                  {stat.value}
                </div>
                <div style={{ color: colors.primary }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.deep }}>
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Team working in garden" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg" style={{ color: colors.primary }}>
                Born from a shared vision during our engineering days, Bhoomi started as a weekend
                project to help our college maintain its green spaces. What began as a passion
                project quickly evolved into a mission to transform urban spaces into thriving
                gardens.
              </p>
              <p className="text-lg" style={{ color: colors.primary }}>
                Today, we're proud to serve hundreds of clients across Mumbai and Bangalore,
                helping them create and maintain their own pieces of paradise. Our combination
                of traditional gardening wisdom and modern technology has made us a trusted name
                in urban gardening solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.deep }}>
            Meet Our Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-48 h-48 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: colors.deep }}>
                      {founder.name}
                    </h3>
                    <p className="mb-4" style={{ color: colors.tertiary }}>
                      {founder.role}
                    </p>
                    <p className="mb-4" style={{ color: colors.primary }}>
                      {founder.bio}
                    </p>
                    <p className="font-medium" style={{ color: colors.deep }}>
                      Expertise: {founder.expertise}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: colors.deep }}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <FiSun 
                className="w-8 h-8 mb-4"
                style={{ color: colors.tertiary }}
              />
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.deep }}>
                Sustainability First
              </h3>
              <p style={{ color: colors.primary }}>
                Every decision we make prioritizes environmental sustainability and 
                long-term ecological balance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <FiTrendingUp 
                className="w-8 h-8 mb-4"
                style={{ color: colors.tertiary }}
              />
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.deep }}>
                Innovation Driven
              </h3>
              <p style={{ color: colors.primary }}>
                We combine traditional gardening wisdom with modern technology to 
                create optimal growing conditions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <FiThumbsUp 
                className="w-8 h-8 mb-4"
                style={{ color: colors.tertiary }}
              />
              <h3 className="text-xl font-bold mb-2" style={{ color: colors.deep }}>
                Customer Success
              </h3>
              <p style={{ color: colors.primary }}>
                Your garden's success is our success. We're committed to providing 
                ongoing support and education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;