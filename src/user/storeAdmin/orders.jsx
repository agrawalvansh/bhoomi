import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, FiUsers, FiBox, FiShoppingBag, FiMessageSquare, 
  FiBarChart2, FiMail, FiTool, FiEye, FiSearch, FiFilter, 
  FiChevronDown, FiClock, FiTruck, FiCheckCircle, FiXCircle, 
  FiCalendar, FiMapPin, FiDollarSign, FiPackage, FiClipboard
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import AdminSidebar from './navBar';

const OrdersPage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [activeStatus, setActiveStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB'
  };

  const orderStatuses = [
    { id: 'new', name: 'New Orders', count: 12, color: 'blue' },
    { id: 'in-progress', name: 'In Progress', count: 8, color: 'yellow' },
    { id: 'scheduled', name: 'Scheduled', count: 15, color: 'purple' },
    { id: 'completed', name: 'Completed', count: 45, color: 'green' },
    { id: 'cancelled', name: 'Cancelled', count: 3, color: 'red' }
  ];

  const orders = [
    {
      id: "ORD001",
      customer: {
        name: "John Smith",
        email: "john@example.com",
        phone: "+1 234-567-8900"
      },
      status: "New Orders",
      items: [
        { name: "Snake Plant", quantity: 2, price: 29.99 },
        { name: "Ceramic Pot - Large", quantity: 1, price: 34.99 }
      ],
      total: 94.97,
      deliveryAddress: "123 Garden Street, Springfield, IL",
      installationRequired: true,
      paymentStatus: "Paid",
      assignedTeam: "Team A",
      scheduledDate: "2024-02-15",
      specialInstructions: "Please deliver before noon",
      orderDate: "2024-02-01"
    },
    {
      id: "ORD002",
      customer: {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        phone: "+1 234-567-8901"
      },
      status: "In Progress",
      items: [
        { name: "DIY Garden Kit", quantity: 1, price: 49.99 },
        { name: "Fertilizer Pack", quantity: 2, price: 15.99 }
      ],
      total: 81.97,
      deliveryAddress: "456 Park Avenue, Springfield, IL",
      installationRequired: false,
      paymentStatus: "Pending",
      assignedTeam: "Team B",
      scheduledDate: "2024-02-16",
      specialInstructions: "Leave at front door",
      orderDate: "2024-02-02"
    }
  ];

  
  const getStatusIcon = (status) => {
    switch(status) {
      case 'New Orders': return <FiShoppingBag />;
      case 'In Progress': return <FiClock />;
      case 'Scheduled': return <FiCalendar />;
      case 'Completed': return <FiCheckCircle />;
      case 'Cancelled': return <FiXCircle />;
      default: return <FiShoppingBag />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'New Orders': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Scheduled': return 'bg-purple-100 text-purple-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const OrderDetailsModal = ({ order, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Order Details - {order.id}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Customer Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <FiUsers className="text-gray-600" />
              Customer Information
            </h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Name</label>
                <p className="font-medium">{order.customer.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Email</label>
                <p className="font-medium">{order.customer.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Phone</label>
                <p className="font-medium">{order.customer.phone}</p>
              </div>
            </div>
          </div>

          {/* Order Status & Assignment */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <FiClipboard className="text-gray-600" />
              Order Status
            </h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Current Status</label>
                <div className={`mt-1 px-3 py-1 rounded-full text-sm w-fit ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="ml-2">{order.status}</span>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500">Assigned Team</label>
                <p className="font-medium">{order.assignedTeam}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Payment Status</label>
                <div className={`mt-1 px-3 py-1 rounded-full text-sm w-fit ${getPaymentStatusColor(order.paymentStatus)}`}>
                  <FiDollarSign className="inline mr-1" />
                  {order.paymentStatus}
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <FiTruck className="text-gray-600" />
              Delivery Details
            </h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Delivery Address</label>
                <p className="font-medium">{order.deliveryAddress}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Scheduled Date</label>
                <p className="font-medium">{order.scheduledDate}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Installation Required</label>
                <p className="font-medium">{order.installationRequired ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <FiPackage className="text-gray-600" />
              Additional Information
            </h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500">Special Instructions</label>
                <p className="font-medium">{order.specialInstructions}</p>
              </div>
              <div>
                <label className="text-sm text-gray-500">Order Date</label>
                <p className="font-medium">{order.orderDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-4">Order Items</h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Item</th>
                  <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">Quantity</th>
                  <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">Price</th>
                  <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {order.items.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2 text-right">{item.quantity}</td>
                    <td className="px-4 py-2 text-right">${item.price.toFixed(2)}</td>
                    <td className="px-4 py-2 text-right">${(item.quantity * item.price).toFixed(2)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td colSpan="3" className="px-4 py-2 text-right font-medium">Total</td>
                  <td className="px-4 py-2 text-right font-medium">${order.total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => {
              // Handle update status
              onClose();
            }}
          >
            Update Status
          </button>
        </div>
      </div>
    </div>
  );

 
  return (
    <div className="flex" style={{ backgroundColor: colors.background }}>
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.deep }}>Orders</h2>

          {/* Order Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {orderStatuses.map((status) => (
              <button
                key={status.id}
                className={`p-4 rounded-lg bg-white shadow-sm hover:shadow transition-shadow ${
                  activeStatus === status.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveStatus(status.id)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">{status.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full bg-${status.color}-100 text-${status.color}-800`}>
                    {status.count}
                  </span>
                </div>
                <div className="text-2xl font-bold" style={{ color: colors.deep }}>
                  {status.count}
                </div>
              </button>
            ))}
          </div>

          {/* Search and Filter Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 flex items-center gap-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FiFilter />
                Filter
                <FiChevronDown />
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                Export
              </button>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Order Management</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Order ID</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Customer</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Total</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Delivery</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orders
                      .filter(order => 
                        order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        order.id.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm">{order.id}</td>
                          <td className="px-4 py-3">
                            <div>
                              <div className="font-medium text-sm">{order.customer.name}</div>
                              <div className="text-xs text-gray-500">{order.customer.email}</div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 w-fit ${getStatusColor(order.status)}`}>
                              {getStatusIcon(order.status)}
                              {order.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">${order.total.toFixed(2)}</td>
                          <td className="px-4 py-3 text-sm">{order.orderDate}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1 text-sm">
                              <FiMapPin className="text-gray-400" />
                              <span className="truncate max-w-[200px]">{order.deliveryAddress}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2">
                              <button
                                className="p-1 hover:bg-gray-100 rounded text-gray-600 hover:text-gray-900"
                                onClick={() => {
                                  setSelectedOrder(order);
                                  setShowOrderDetails(true);
                                }}
                              >
                                <FiEye className="h-4 w-4" />
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

        {/* Render Order Details Modal */}
        {showOrderDetails && selectedOrder && (
          <OrderDetailsModal
            order={selectedOrder}
            onClose={() => {
              setShowOrderDetails(false);
              setSelectedOrder(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default OrdersPage;