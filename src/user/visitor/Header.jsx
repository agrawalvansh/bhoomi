import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FiBell,
  FiLogOut,
  FiMenu,
  FiSettings,
  FiUser,
  FiX,
  FiShoppingCart
} from 'react-icons/fi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemsCount] = useState(5); // Replace with actual cart count

  const handleLogout = () => {
    // Add logout logic here
    navigate('/login');
  };

  const MobileNavItem = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => setIsMobileMenuOpen(false)}
      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#4A6741] transition-colors"
    >
      {children}
    </Link>
  );

  return (
    <div className="sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-[#2D3B2D] text-white rounded-md mb-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 font-bold text-xl text-[#D4B982]">
                <Link 
                  to="/visitor/home" 
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/logo.png" 
                    className="h-8 w-8 mr-2"
                  />
                  Bhoomi
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="relative text-white hover:bg-[#4A6741]"
                    aria-label="Notifications"
                  >
                    <FiBell className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 bg-[#D4B982] text-[#2D3B2D]">
                      3
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72 bg-white">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex flex-col items-start gap-1">
                    <span className="font-medium">New order received</span>
                    <span className="text-sm text-gray-500">2 minutes ago</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col items-start gap-1">
                    <span className="font-medium">Payment confirmed</span>
                    <span className="text-sm text-gray-500">1 hour ago</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white hover:bg-[#4A6741]"
                    aria-label="User Account"
                  >
                    <FiUser className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/visitor/profile')}>
                    <FiUser className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/visitor/settings')}>
                    <FiSettings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-red-600 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    <FiLogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="md:hidden text-white hover:bg-[#4A6741]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2D3B2D] border-t border-[#4A6741]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavItem to="/visitor/home">Home</MobileNavItem>
            <MobileNavItem to="/visitor/shop">Shop</MobileNavItem>
            <MobileNavItem to="/visitor/cart">Cart ({cartItemsCount})</MobileNavItem>
            <MobileNavItem to="/visitor/orders">Orders</MobileNavItem>
            <MobileNavItem to="/visitor/profile">Profile</MobileNavItem>
            <MobileNavItem to="/visitor/settings">Settings</MobileNavItem>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;