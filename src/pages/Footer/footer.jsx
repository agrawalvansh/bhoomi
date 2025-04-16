import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter
} from "lucide-react";

const Footer = () => {
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
  
  const currentYear = new Date().getFullYear();
  
  // Data arrays with navigation items and URLs
  const navLinks = {
    company: [
      { name: 'About Us', url: '/about-us' },
      { name: 'FAQs', url: '/faqs' },
      { name: 'Careers', url: '/' },
      { name: 'Team', url: '/' }
    ],
    contactUs: [
      { name: 'Leave a Message', url: '/contact-us' },
      { name: 'Help & Support', url: '/' },
      { name: 'Partner With Us', url: '/' },
      { name: 'Join Us', url: '/' }
    ],
    cities: [
      { name: 'Bangalore', url: '/' },
      { name: 'Gurgaon', url: '/' },
      { name: 'Hyderabad', url: '/' },
      { name: 'Delhi', url: '/' },
      { name: 'Mumbai', url: '/' },
      { name: 'Pune', url: '/' }
    ],
    lifeAtBhoomi: [
      { name: 'Explore With Bhoomi', url: '/' },
      { name: 'Bhoomi News', url: '/' },
      { name: 'Gardening Tips', url: '/' },
      { name: 'Our Events', url: '/' }
    ],
    legal: [
      { name: 'Terms & Conditions', url: '/' },
      { name: 'Cookie Policy', url: '/' },
      { name: 'Privacy Policy', url: '/' }
    ],
    social: [
      { icon: Linkedin, url: '/' },
      { icon: Instagram, url: '/' },
      { icon: Facebook, url: '/' },
      { icon: Twitter, url: '/' }
    ]
  };

  return (
    <footer className="bg-[#2D3B2D] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section with Logo and Copyright */}
        <div className="mb-10">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center" 
              style={{ backgroundColor: colors.secondary }}
            >
              <img src="/imgs/logo/Bhoomi Icon.svg" alt="Bhoomi Logo" className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold text-[#F9F6F0]">Bhoomi</h2>
          </div>
          <p className="text-sm text-[#F9F6F0] mt-2">© {currentYear} Bhoomi Plants Limited</p>
        </div>

        {/* Main Footer Links - Using Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10">
          {/* Company Column */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[#F9F6F0]">Company</h3>
            <ul className="space-y-3">
              {navLinks.company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-[#F9F6F0] hover:text-[#F3E5AB] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[#F9F6F0]">Contact us</h3>
            <ul className="space-y-3">
              {navLinks.contactUs.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-[#F9F6F0] hover:text-[#F3E5AB] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Available in Column */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[#F9F6F0]">Available in:</h3>
            <ul className="space-y-3">
              {navLinks.cities.map((city, index) => (
                <li key={index}>
                  <Link 
                    to={city.url} 
                    className="text-[#F9F6F0] hover:text-[#F3E5AB] transition-colors text-sm"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Life at Bhoomi Column */}
          <div>
            <h3 className="text-2xl font-medium mb-4 text-[#F9F6F0]">Life at Bhoomi</h3>
            <ul className="space-y-3">
              {navLinks.lifeAtBhoomi.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-[#F9F6F0] hover:text-[#F3E5AB] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Social Links */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-2xl font-medium mb-4 text-[#F9F6F0]">Legal</h3>
              <ul className="space-y-3">
                {navLinks.legal.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.url} 
                      className="text-[#F9F6F0] hover:text-[#F3E5AB] transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-medium mb-4 text-[#F9F6F0]">Social Links</h3>
              <div className="flex gap-5">
                {navLinks.social.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a 
                      key={index}
                      href={item.url} 
                      className="text-[#F9F6F0] hover:text-[#F3E5AB] transition-colors"
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F9F6F0] mb-14" />

        {/* Bottom App Download Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <p className="text-xl md:text-2xl font-medium text-[#F9F6F0]">
            For better experience, download the Bhoomi app now
          </p>
          
          <div className="flex gap-4">
            <a href="/" className="inline-block hover:opacity-90 transition-opacity">
              <img 
                src="/imgs/landingPage/AppSection/apple.png" 
                alt="App Store" 
                className="h-11 w-32"
              />
            </a>
            <a href="/" className="inline-block hover:opacity-90 transition-opacity">
              <img 
                src="/imgs/landingPage/AppSection/google_play.png" 
                alt="Google Play" 
                className="h-11 w-36"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;