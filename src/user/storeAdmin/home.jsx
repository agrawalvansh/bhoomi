import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, FiUsers, FiShoppingBag, FiBox, 
  FiMessageSquare, FiBarChart2, FiTool, FiMail, FiDollarSign, FiPackage, FiClock, FiTrendingUp
} from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import AdminSidebar from './navBar';
import { IndianRupee } from 'lucide-react';

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

  // Sample revenue data
  const revenueData = [
    { month: 'Jan', revenue: 45000 },
    { month: 'Feb', revenue: 52000 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 61000 },
    { month: 'May', revenue: 55000 },
    { month: 'Jun', revenue: 67000 }
  ];
  
  const metrics = [
    { icon: <FiUsers />, label: 'Total Users', value: '2,846', trend: '+12%' },
    { icon: <FiShoppingBag />, label: 'Total Orders', value: '1,234', trend: '+8%' },
    { icon: <IndianRupee  />, label: 'Revenue', value: '₹89,432', trend: '+15%' },
    { icon: <FiPackage />, label: 'Products', value: '156', trend: '+5%' }
  ];

  const recentActivities = [
    { type: 'order', user: 'Rahul M.', action: 'placed an order', time: '2 minutes ago', amount: '₹2,400' },
    { type: 'user', user: 'Priya S.', action: 'registered', time: '15 minutes ago' },
    { type: 'product', user: 'Admin', action: 'added new product', time: '1 hour ago', product: 'Organic Seeds' },
    { type: 'order', user: 'Amit K.', action: 'placed an order', time: '2 hours ago', amount: '₹1,800' }
  ];

  // Sample top products data with images
  const topProducts = [
    { name: 'Organic Tomato Seeds', price: '₹199', sales: 45, image: '/imgs/storeAdminImgs/Organic Tomato Seeds.jpg' },
    { name: 'Natural Fertilizer', price: '₹299', sales: 38, image: '/imgs/storeAdminImgs/Natural Fertilizer.jpeg' },
    { name: 'Garden Tools Set', price: '₹399', sales: 32, image: '/imgs/storeAdminImgs/Garden Tools Set.jpg' }
  ];

  return (
    <div className="flex" style={{ backgroundColor: colors.background }}>
      <AdminSidebar />

      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>Revenue Trend</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke={colors.tertiary} 
                      strokeWidth={2}
                      dot={{ fill: colors.tertiary }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>Top Products</h2>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div>
                        <p className="font-medium" style={{ color: colors.deep }}>{product.name}</p>
                        <p className="text-sm text-gray-500">{product.price}</p>
                      </div>
                    </div>
                    <span className="text-sm" style={{ color: colors.tertiary }}>{product.sales} sales</span>
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