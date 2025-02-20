import React from 'react';
import { FiHome, FiUser, FiPlus, FiSearch, FiClipboard } from 'react-icons/fi';
import { Leaf } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';

const Navbar = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  return (
    <header className="sticky top-0 z-50 w-full" style={{ backgroundColor: colors.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Leaf className="w-8 h-8" style={{ color: colors.secondary }} />
            <span className="ml-2 text-xl font-bold" style={{ color: colors.secondary }}>
              PlantExpert
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            {[
              { icon: FiHome, label: 'Home', path: '/plant/home' },
              { icon: FiPlus, label: 'Upload', path: '/plant/plant-upload' },
              { icon: FiSearch, label: 'Browse', path: '/plant/plant-selection' },
              { icon: FiClipboard, label: 'Quality', path: '/plant/quality-check' },
              { icon: FiUser, label: 'Profile', path: '/plant/profile' },
            ].map(({ icon: Icon, label, path }) => (
              <Button
                key={path}
                variant="ghost"
                className="flex items-center gap-2"
                style={{ color: colors.secondary }}
                onClick={() => window.location.href = path}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Button>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/api/placeholder/32/32" />
              <AvatarFallback style={{ backgroundColor: colors.tertiary }}>PE</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;