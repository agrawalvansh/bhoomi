import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Linkedin,
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  const colors = {
    primary: "#2D3B2D",
    secondary: "#D4B982",
    tertiary: "#4A6741",
    background: "#F9F6F0",
    accent: "#A8C69F",
    deep: "#1B4D3E",
    highlight: "#F3E5AB",
    warm: "#E6BAA3",
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 sm:py-12 font-sans relative" style={{ backgroundColor: colors.primary, color: colors.background }}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand Column */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "'Gilda Display', serif", color: colors.secondary }}>
              Bhoomi
            </h4>
            <p className="opacity-90 mb-3 md:mb-4 text-sm md:text-base">
              Reimagining urban green spaces with sustainable solutions for homes and businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 opacity-90 text-sm md:text-base">
                <Mail size={16} />
                <a href="mailto:contact@bhoomi.com" className="hover:text-accent transition-colors">
                  contact@bhoomi.com
                </a>
              </div>
              <div className="flex items-center gap-2 opacity-90 text-sm md:text-base">
                <Phone size={16} />
                <a href="tel:+917378882317" className="hover:text-accent transition-colors">
                  +91 73788 82317
                </a>
              </div>
              <div className="flex items-center gap-2 opacity-90 text-sm md:text-base">
                <MapPin size={16} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="mt-6 sm:mt-0">
            <h5 className="text-lg font-semibold mb-3 md:mb-4" style={{ color: colors.secondary }}>
              Quick Links
            </h5>
            <ul className="space-y-2 md:space-y-3 opacity-90 text-sm md:text-base">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/user/service" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/user/shop" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  Shop Plants
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column - Full width on mobile, normal on larger screens */}
          <div className="mt-6 lg:mt-0 sm:col-span-2 lg:col-span-1">
            <h5 className="text-lg font-semibold mb-3 md:mb-4" style={{ color: colors.secondary }}>
              Stay Connected
            </h5>
            <p className="opacity-90 mb-3 md:mb-4 text-sm md:text-base">Subscribe to our newsletter for gardening tips and updates.</p>
            <form className="space-y-2 md:space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${colors.accent}`,
                  color: colors.background
                }}
              />
              <button
                type="submit"
                className="w-full px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors duration-200 text-sm md:text-base font-medium"
                style={{ 
                  backgroundColor: colors.secondary,
                  color: colors.primary
                }}
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-4 md:mt-6">
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="md:w-6 md:h-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="md:w-6 md:h-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="md:w-6 md:h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Fourth Column - Hidden on mobile, shows on larger screens */}
          <div className="hidden lg:block">
            <h5 className="text-lg font-semibold mb-4" style={{ color: colors.secondary }}>
              Business Hours
            </h5>
            <ul className="space-y-2 opacity-90 text-sm md:text-base">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            {/* <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm opacity-90">
                Visit our nursery in Bandra West for personalized gardening consultations.
              </p>
            </div> */}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-6 mt-6 md:pt-8 md:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 opacity-90 text-xs md:text-sm">
            <p>© {currentYear} Bhoomi. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;