import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiBox, FiShoppingBag, FiMessageSquare, FiBarChart2, FiMail, FiTool,
         FiUserCheck, FiClipboard, FiPieChart, FiTruck, FiDollarSign } from 'react-icons/fi';

const SupplierPortalPage = () => {
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


  const supplierSections = [
    {
      title: 'Supplier Management',
      icon: <FiUserCheck />,
      description: 'Manage supplier profiles, contracts, and performance evaluations.',
      actions: ['View Suppliers', 'Add New Supplier', 'Update Contracts']
    },
    {
      title: 'Purchase Orders',
      icon: <FiClipboard />,
      description: 'Create and track purchase orders, manage approvals and order status.',
      actions: ['Create PO', 'Track Orders', 'View History']
    },
    {
      title: 'Quality Metrics',
      icon: <FiPieChart />,
      description: 'Monitor supplier performance metrics and quality compliance standards.',
      actions: ['View Metrics', 'Quality Reports', 'Set Benchmarks']
    },
    {
      title: 'Delivery Scheduling',
      icon: <FiTruck />,
      description: 'Schedule and track deliveries, manage logistics and timelines.',
      actions: ['Schedule Delivery', 'Track Shipments', 'View Calendar']
    },
    {
      title: 'Payment Processing',
      icon: <FiDollarSign />,
      description: 'Process payments, manage invoices, and track financial transactions.',
      actions: ['Process Payment', 'View Invoices', 'Payment History']
    }
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


  return (
    <div className="flex min-h-screen" style={{ backgroundColor: colors.background }}>
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
          <h2 className="text-3xl font-bold" style={{ color: colors.deep }}>
            Supplier Portal
          </h2>
          <p className="mt-2" style={{ color: colors.tertiary }}>
            Manage supplier relationships, orders, and transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supplierSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow duration-300"
              style={{ borderColor: colors.accent }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-xl mr-3" style={{ color: colors.tertiary }}>
                    {section.icon}
                  </span>
                  <h3 className="text-xl font-semibold" style={{ color: colors.deep }}>
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm mb-4" style={{ color: colors.primary }}>
                  {section.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {section.actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      className="text-sm px-3 py-1 rounded-full transition-colors duration-200"
                      style={{
                        backgroundColor: colors.background,
                        color: colors.tertiary,
                        border: `1px solid ${colors.accent}`
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = colors.accent;
                        e.currentTarget.style.color = colors.background;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = colors.background;
                        e.currentTarget.style.color = colors.tertiary;
                      }}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplierPortalPage;