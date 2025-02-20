// NavigationBar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "../../components/ui/button";
import {
  Bell,
  Box,
  ClipboardList,
  Home,
  LogOut,
  Package,
  Settings,
  Truck,
  User
} from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [notifications] = React.useState(3);

  const handleLogout = () => {
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <>
      <ToastContainer />
      <nav className="bg-[#2D3B2D] text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Box className="w-6 h-6" />
              <span className="font-bold text-lg">
                <Link to="/product/stock-overview">Inventory System</Link>
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
                            
              <Link to="/product/reorder" className="flex items-center space-x-2 hover:text-[#D4B982] transition-colors">
                <ClipboardList className="w-4 h-4" />
                <span>Reorder</span>
              </Link>
              
              <Link to="/product/order-prep" className="flex items-center space-x-2 hover:text-[#D4B982] transition-colors">
                <Package className="w-4 h-4" />
                <span>Order Prep</span>
              </Link>
              
              <Link to="/product/suppliers" className="flex items-center space-x-2 hover:text-[#D4B982] transition-colors">
                <Truck className="w-4 h-4" />
                <span>Suppliers</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="relative hover:bg-[#4A6741]" onClick={() => navigate('/notifications')}>
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D4B982] text-[#2D3B2D] text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>

            <Button variant="ghost" className="hover:bg-[#4A6741]" onClick={() => navigate('/product/profile')}>
              <User className="w-5 h-5" />
            </Button>

            <Button variant="ghost" className="hover:bg-[#4A6741]" onClick={() => navigate('/product/settings')}>
              <Settings className="w-5 h-5" />
            </Button>

            <Button 
              className="bg-[#D4B982] text-[#2D3B2D] hover:bg-[#F3E5AB]"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-[#2D3B2D]">Product Manager Dashboard</h1>
        <p className="text-[#4A6741] mt-2">Welcome to the inventory management system.</p>
      </div>
    </>
  );
};

export default NavBar;