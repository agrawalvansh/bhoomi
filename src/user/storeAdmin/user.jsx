import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiUsers, 
  FiBox, 
  FiShoppingBag, 
  FiMessageSquare, 
  FiBarChart2, 
  FiMail, 
  FiTool,
  FiEdit2, 
  FiEye, 
  FiPause, 
  FiSearch, 
  FiFilter, 
  FiChevronDown 
} from 'react-icons/fi';
import AdminSidebar from './navBar';

const AdminLayout = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);

  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  // Sample users data
  const users = [
    {
      id: "USR001",
      name: "John Smith",
      email: "john@example.com",
      phone: "+1 234-567-8900",
      registrationDate: "2024-01-15",
      accountType: "Residential",
      subscriptionStatus: "Active",
      totalOrdersValue: "$1,250",
      lastLogin: "2024-02-01"
    },
    {
      id: "USR002",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1 234-567-8901",
      registrationDate: "2024-01-20",
      accountType: "Commercial",
      subscriptionStatus: "Active",
      totalOrdersValue: "$3,450",
      lastLogin: "2024-02-02"
    }
  ];

  
  return (
    <div className="flex" style={{ backgroundColor: colors.background }}>
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.deep }}>Users</h2>
          
          {/* Search and Filter Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <button 
              className="px-4 py-2 flex items-center gap-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FiFilter />
              Filter
              <FiChevronDown className="ml-2" />
            </button>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">User Management</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">User ID</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Account Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Total Orders</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Last Login</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-4 py-3 text-sm">{user.id}</td>
                        <td className="px-4 py-3 text-sm">{user.name}</td>
                        <td className="px-4 py-3 text-sm">{user.email}</td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.accountType === 'Commercial' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {user.accountType}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.subscriptionStatus === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {user.subscriptionStatus}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm">{user.totalOrdersValue}</td>
                        <td className="px-4 py-3 text-sm">{user.lastLogin}</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex gap-2">
                            <button
                              className="p-1 hover:bg-gray-100 rounded"
                              onClick={() => {
                                setSelectedUser(user);
                                setShowUserDetails(true);
                              }}
                            >
                              <FiEye className="h-4 w-4" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <FiEdit2 className="h-4 w-4" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <FiPause className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* User Details Modal */}
        {showUserDetails && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">User Details</h3>
                <button 
                  onClick={() => setShowUserDetails(false)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <p>{selectedUser.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p>{selectedUser.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <p>{selectedUser.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Registration Date</label>
                  <p>{selectedUser.registrationDate}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLayout;