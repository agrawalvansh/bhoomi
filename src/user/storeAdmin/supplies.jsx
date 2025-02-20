import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiBox, FiShoppingBag, FiMessageSquare, FiBarChart2, FiMail, FiTool,
         FiUserCheck, FiClipboard, FiPieChart, FiTruck, FiDollarSign } from 'react-icons/fi';

import AdminSidebar from './navBar';  
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

  
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: colors.background }}>
      {/* Sidebar Navigation */}
      <AdminSidebar />

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