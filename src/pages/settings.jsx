import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, FiUsers, FiBox, FiShoppingBag, FiMessageSquare, FiBarChart2, FiMail, FiTool, FiLock, FiDollarSign, FiMap, FiTruck, FiBell, FiCreditCard, FiLink,
  FiShield, FiClock, FiXCircle, FiRefreshCcw, FiFileText, FiChevronRight
} from 'react-icons/fi';

const SettingsPage = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const navItems = [
    { to: '/home', icon: <FiHome />, label: 'Dashboard' },
    { to: '/admin/users', icon: <FiUsers />, label: 'Users' },
    { to: '/admin/products', icon: <FiBox />, label: 'Products' },
    { to: '/admin/orders', icon: <FiShoppingBag />, label: 'Orders' },
    { to: '/admin/community', icon: <FiMessageSquare />, label: 'Community' },
    { to: '/admin/analytics', icon: <FiBarChart2 />, label: 'Analytics' },
    { to: '/admin/messages', icon: <FiMail />, label: 'Messages' },
    { to: '/admin/settings', icon: <FiTool />, label: 'Settings' },
    { to: '/admin/team', icon: <FiUsers />, label: 'Team Management' },
    { to: '/admin/supplies', icon: <FiTool />, label: 'Supplies' }
  ];


  const location = useLocation();

  // NavItem component renders each individual link with an active style.
  const NavItem = ({ to, icon, label }) => {
    const isActive = location.pathname === to;
    return (
      <motion.li
        whileHover={{ x: 5 }}
        className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
          isActive ? 'bg-white shadow' : 'hover:bg-white/50'
        }`}
      >
        <Link to={to} className="flex items-center w-full">
          <span className="mr-3" style={{ color: isActive ? colors.tertiary : colors.primary }}>
            {icon}
          </span>
          <span className={`font-medium ${isActive ? 'text-gray-800' : 'text-gray-600'}`}>
            {label}
          </span>
        </Link>
      </motion.li>
    );
  };



  const [activeTab, setActiveTab] = useState('system');

  const settingsSections = {
    system: [
      { icon: <FiLock />, title: 'User Roles & Permissions', description: 'Manage access levels and permissions' },
      { icon: <FiDollarSign />, title: 'Pricing Rules', description: 'Configure pricing and discounts' },
      { icon: <FiMap />, title: 'Service Areas', description: 'Define service coverage areas' },
      { icon: <FiTruck />, title: 'Delivery Zones', description: 'Set up delivery regions and fees' },
      { icon: <FiUsers />, title: 'Team Management', description: 'Manage staff and assignments' }
    ],
    app: [
      { icon: <FiBell />, title: 'Notification Rules', description: 'Configure notification settings' },
      { icon: <FiCreditCard />, title: 'Payment Gateways', description: 'Set up payment methods' },
      { icon: <FiLink />, title: 'Integration Settings', description: 'Manage third-party integrations' },
      { icon: <FiShield />, title: 'Backup & Security', description: 'Configure security settings' }
    ],
    business: [
      { icon: <FiClock />, title: 'Service Hours', description: 'Set business hours and availability' },
      { icon: <FiXCircle />, title: 'Cancellation Policies', description: 'Define cancellation rules' },
      { icon: <FiRefreshCcw />, title: 'Refund Rules', description: 'Set refund policies' },
      { icon: <FiFileText />, title: 'Terms & Conditions', description: 'Manage legal documents' }
    ]
  };

  return (
    <div className="min-h-screen">
      <div className="flex" style={{ backgroundColor: colors.background }}>
        {/* Sidebar Navigation */}
        <motion.nav 
          className="w-64 p-6 border-r-2 overflow-y-auto h-screen sticky top-0"
          style={{ backgroundColor: colors.background, borderColor: colors.accent }}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
        >
          <div className="mb-8">
          </div>
          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <NavItem key={index} to={item.to} icon={item.icon} label={item.label} />
            ))}

          </ul>
        </motion.nav>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold" style={{ color: colors.deep }}>Settings</h2>
            <p className="text-lg mt-2" style={{ color: colors.tertiary }}>
              Manage system configurations and business rules
            </p>
          </div>

          {/* Settings Navigation */}
          <div className="mb-8 border-b" style={{ borderColor: colors.accent }}>
            <div className="flex space-x-8">
              {[
                { id: 'system', label: 'System Configuration' },
                { id: 'app', label: 'App Settings' },
                { id: 'business', label: 'Business Rules' }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`pb-4 relative ${activeTab === tab.id ? 'font-semibold' : ''}`}
                  style={{ color: activeTab === tab.id ? colors.deep : colors.tertiary }}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: colors.deep }}
                      layoutId="activeTab"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Settings Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {settingsSections[activeTab].map((setting, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                style={{ borderLeft: `4px solid ${colors.accent}` }}
              >
                <div className="flex items-start">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: colors.background }}
                  >
                    <span style={{ color: colors.deep }}>{setting.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: colors.deep }}>
                      {setting.title}
                    </h3>
                    <p style={{ color: colors.tertiary }}>{setting.description}</p>
                  </div>
                  <FiChevronRight  
                    className="ml-auto"
                    style={{ color: colors.tertiary }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Save Settings Button */}
          <div className="mt-8 flex justify-end">
            <button
              className="px-6 py-2 rounded text-white font-medium"
              style={{ backgroundColor: colors.deep }}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;