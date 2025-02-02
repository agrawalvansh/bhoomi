import React from 'react';
import { Link } from "react-router-dom";

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

  return (
    <div style={{ backgroundColor: colors.background, fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Enhanced Footer */}
      <footer className="py-12" style={{ backgroundColor: colors.primary }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            {/* Bhoomi Branding */}
            <div>
              <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Gilda Display', serif" }}>
                Bhoomi
              </h4>
              <p className="opacity-90">Reimagining urban green spaces</p>
            </div>

            {/* Solutions Section */}
            <div>
              <h5 className="text-lg font-bold mb-4">Solutions</h5>
              <ul className="space-y-2 opacity-90">
                <li><Link to="/residential-gardens" className="hover:opacity-100 transition-opacity">Residential Gardens</Link></li>
                <li><Link to="/commercial-spaces" className="hover:opacity-100 transition-opacity">Commercial Spaces</Link></li>
                <li><Link to="/maintenance-plans" className="hover:opacity-100 transition-opacity">Maintenance Plans</Link></li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h5 className="text-lg font-bold mb-4">Company</h5>
              <ul className="space-y-2 opacity-90">
                <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
                <li><Link to="/careers" className="hover:opacity-100 transition-opacity">Careers</Link></li>
                <li><Link to="/press" className="hover:opacity-100 transition-opacity">Press</Link></li>
              </ul>
            </div>

            {/* Social Media Links (External Links) */}
            <div>
              <h5 className="text-lg font-bold mb-4">Connect</h5>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                  Instagram
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className="border-t border-white/20 mt-12 pt-8 text-center opacity-90">
            <p>© {new Date().getFullYear()} Bhoomi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
