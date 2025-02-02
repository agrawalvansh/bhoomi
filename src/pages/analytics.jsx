import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiBox, FiShoppingBag, FiMessageSquare, FiBarChart2, FiMail, FiTool,
         FiDollarSign, FiTrendingUp, FiUserPlus, FiRepeat, FiClock, FiThumbsUp } from 'react-icons/fi';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
         ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AnalyticsPage = () => {
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


  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 5000 },
    { month: 'Mar', revenue: 4800 },
    { month: 'Apr', revenue: 6000 },
    { month: 'May', revenue: 5500 }
  ];

  const categoryData = [
    { name: 'Plants', value: 400 },
    { name: 'Tools', value: 300 },
    { name: 'Seeds', value: 200 },
    { name: 'Services', value: 278 }
  ];

  const COLORS = [colors.primary, colors.secondary, colors.tertiary, colors.accent];

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
            <h2 className="text-3xl font-bold" style={{ color: colors.deep }}>Analytics Dashboard</h2>
            <p className="text-lg mt-2" style={{ color: colors.tertiary }}>
              Track business performance and metrics
            </p>
          </div>

          {/* Business Metrics Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4" style={{ color: colors.deep }}>Business Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <FiDollarSign className="mr-2" style={{ color: colors.tertiary }} />
                  <span className="font-medium">Revenue</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: colors.deep }}>$24,500</div>
                <div className="text-sm" style={{ color: colors.tertiary }}>+12% from last month</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <FiUserPlus className="mr-2" style={{ color: colors.tertiary }} />
                  <span className="font-medium">CAC</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: colors.deep }}>$45</div>
                <div className="text-sm" style={{ color: colors.tertiary }}>Per customer</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <FiRepeat className="mr-2" style={{ color: colors.tertiary }} />
                  <span className="font-medium">CLV</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: colors.deep }}>$850</div>
                <div className="text-sm" style={{ color: colors.tertiary }}>Lifetime value</div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <FiThumbsUp className="mr-2" style={{ color: colors.tertiary }} />
                  <span className="font-medium">CSAT</span>
                </div>
                <div className="text-2xl font-bold" style={{ color: colors.deep }}>4.8</div>
                <div className="text-sm" style={{ color: colors.tertiary }}>Out of 5.0</div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Trend */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-4" style={{ color: colors.deep }}>Revenue Trend</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke={colors.tertiary} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Sales by Category */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium mb-4" style={{ color: colors.deep }}>Sales by Category</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Custom Report Builder */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4" style={{ color: colors.deep }}>Custom Report Builder</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <select className="p-2 border rounded" style={{ borderColor: colors.accent }}>
                <option>Select Metrics</option>
                <option>Revenue</option>
                <option>Sales</option>
                <option>Customer Satisfaction</option>
              </select>
              <select className="p-2 border rounded" style={{ borderColor: colors.accent }}>
                <option>Time Period</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
              <button 
                className="p-2 text-white rounded"
                style={{ backgroundColor: colors.deep }}
              >
                Generate Report
              </button>
            </div>
          </div>

          {/* Export Options */}
          <div className="flex justify-end space-x-4">
            <button 
              className="px-4 py-2 border rounded"
              style={{ borderColor: colors.accent, color: colors.deep }}
            >
              Export as PDF
            </button>
            <button 
              className="px-4 py-2 border rounded"
              style={{ borderColor: colors.accent, color: colors.deep }}
            >
              Export as CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;