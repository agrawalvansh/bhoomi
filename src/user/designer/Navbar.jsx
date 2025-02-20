import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

const colors = {
  primary: '#2D3B2D',
  secondary: '#D4B982',
  tertiary: '#4A6741',
  background: '#F9F6F0',
  accent: '#A8C69F',
  deep: '#1B4D3E',
  highlight: '#F3E5AB'
};

const Navbar = () => {
  return (
    <nav className="w-full bg-[#2D3B2D] text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/designer/home" className="text-xl font-bold text-[#D4B982]">
            GreenSpace
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/designer/design-hub" className="hover:text-[#A8C69F] transition-colors">
              3D Hub
            </Link>
            <Link to="/designer/customization" className="hover:text-[#A8C69F] transition-colors">
              Customization
            </Link>
            <Link to="/designer/budget" className="hover:text-[#A8C69F] transition-colors">
              Budget
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/notifications" className="hover:text-[#A8C69F] transition-colors">
            <Bell size={20} />
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-[#A8C69F] transition-colors">
              <User size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>
                <Link to="/designer/profile" className="text-[#2D3B2D]">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/logout" className="text-[#2D3B2D] flex items-center">
                  <LogOut size={16} className="mr-2" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;