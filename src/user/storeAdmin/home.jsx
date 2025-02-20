import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, FiUsers, FiShoppingBag, FiBox, 
  FiMessageSquare, FiBarChart2, FiTool, FiMail, FiDollarSign, FiPackage, FiClock, FiTrendingUp
} from "react-icons/fi";
import AdminSidebar from './navBar';

const HomePage = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  
  const metrics = [
    { icon: <FiUsers />, label: 'Total Users', value: '2,846', trend: '+12%' },
    { icon: <FiShoppingBag />, label: 'Total Orders', value: '1,234', trend: '+8%' },
    { icon: <FiDollarSign />, label: 'Revenue', value: '₹89,432', trend: '+15%' },
    { icon: <FiPackage />, label: 'Products', value: '156', trend: '+5%' }
  ];

  const recentActivities = [
    { type: 'order', user: 'Rahul M.', action: 'placed an order', time: '2 minutes ago', amount: '₹2,400' },
    { type: 'user', user: 'Priya S.', action: 'registered', time: '15 minutes ago' },
    { type: 'product', user: 'Admin', action: 'added new product', time: '1 hour ago', product: 'Organic Seeds' },
    { type: 'order', user: 'Amit K.', action: 'placed an order', time: '2 hours ago', amount: '₹1,800' }
  ];


  return (
    <div className="flex" style={{ backgroundColor: colors.background }}>
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Welcome Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold" style={{ color: colors.primary }}>
              Welcome to Bhoomi Dashboard
            </h1>
            <p className="text-gray-600">Here's what's happening with your store today.</p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-white shadow-sm"
                style={{ borderLeft: `4px solid ${colors.tertiary}` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: colors.background }}>
                    <span className="text-xl" style={{ color: colors.tertiary }}>{metric.icon}</span>
                  </div>
                  <span className="text-sm px-2 py-1 rounded" 
                    style={{ backgroundColor: colors.highlight, color: colors.deep }}>
                    {metric.trend}
                  </span>
                </div>
                <h3 className="text-sm text-gray-600">{metric.label}</h3>
                <p className="text-2xl font-bold mt-1" style={{ color: colors.primary }}>{metric.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full" style={{ backgroundColor: colors.background }}>
                        <FiClock style={{ color: colors.tertiary }} />
                      </div>
                      <div>
                        <p className="text-sm">
                          <span className="font-medium" style={{ color: colors.deep }}>{activity.user}</span>
                          {' '}{activity.action}
                          {activity.amount && <span className="font-medium"> • {activity.amount}</span>}
                          {activity.product && <span className="font-medium"> • {activity.product}</span>}
                        </p>
                        <span className="text-xs text-gray-500">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            {/* Chart placeholder */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>Revenue Trend</h2>
              <div className="h-64 flex items-center justify-center" style={{ color: colors.tertiary }}>
                <FiTrendingUp size={48} />
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>Top Products</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded bg-gray-200"></div>
                      <div>
                        <p className="font-medium" style={{ color: colors.deep }}>Product {item}</p>
                        <p className="text-sm text-gray-500">₹1,{item}99</p>
                      </div>
                    </div>
                    <span className="text-sm" style={{ color: colors.tertiary }}>{item}0 sales</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
