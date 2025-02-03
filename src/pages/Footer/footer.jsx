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
    <footer className="py-12 font-sans relative" style={{ backgroundColor: colors.primary, color: colors.background }}>
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h4 className="text-2xl font-bold" style={{ fontFamily: "'Gilda Display', serif", color: colors.secondary }}>
              Bhoomi
            </h4>
            <p className="opacity-90 mb-4">
              Reimagining urban green spaces with sustainable solutions for homes and businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 opacity-90">
                <Mail size={16} />
                <a href="mailto:contact@bhoomi.in" className="hover:text-accent transition-colors">
                  contact@bhoomi.in
                </a>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Phone size={16} />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="text-lg font-semibold mb-4" style={{ color: colors.secondary }}>
              Our Services
            </h5>
            <ul className="space-y-3 opacity-90">
              <li>
                <Link to="/services/3d-garden-design" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  3D Garden Design
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  Garden Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  Commercial Spaces
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  Expert Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h5 className="text-lg font-semibold mb-4" style={{ color: colors.secondary }}>
              Quick Links
            </h5>
            <ul className="space-y-3 opacity-90">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
                  <ArrowRight size={16} />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-accent transition-colors duration-200 flex items-center gap-2">
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

          {/* Newsletter Column */}
          <div>
            <h5 className="text-lg font-semibold mb-4" style={{ color: colors.secondary }}>
              Stay Connected
            </h5>
            <p className="opacity-90 mb-4">Subscribe to our newsletter for gardening tips and updates.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${colors.accent}`,
                  color: colors.background
                }}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg transition-colors duration-200"
                style={{ 
                  backgroundColor: colors.secondary,
                  color: colors.primary
                }}
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-all hover:scale-110"
                >
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-all hover:scale-110"
                >
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-all hover:scale-110"
                >
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 opacity-90">
            <p>© {currentYear} Bhoomi. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">
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