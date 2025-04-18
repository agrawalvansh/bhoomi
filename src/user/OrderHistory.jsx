import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, getProductById } from './plantShopData';

const OrderHistory = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [serviceBookings, setServiceBookings] = useState([]);
  const [activeTab, setActiveTab] = useState('orders');
  const [loading, setLoading] = useState(true);

  const colors = {
    primary: '#2d5a27',
    secondary: '#D4B982', 
    tertiary: '#2d5a27',
    background: '#f5f5f0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB',
    warm: '#E6BAA3'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const loadData = () => {
      try {
        const savedOrders = localStorage.getItem('orders');
        const parsedOrders = savedOrders ? JSON.parse(savedOrders) : [];
        
        const updatedOrders = parsedOrders.map(order => {
          if (order.items && order.items.length > 0) {
            const updatedItems = order.items.map(item => {
              const productData = getProductById(item.id);
              if (productData) {
                return { ...item, image: productData.image };
                return { ...item, image: productData.image };
              }
              return item;
            });
            return { ...order, items: updatedItems };
          }
          return order;
        });
        
        setOrders(updatedOrders);
        
        const savedBookings = localStorage.getItem('bookings');
        const parsedBookings = savedBookings ? JSON.parse(savedBookings) : [];
        setServiceBookings(parsedBookings);
      } catch (error) {
        console.error('Error loading data:', error);
        setOrders([]);
        setServiceBookings([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderOrders = () => {
    const productOrders = orders.filter(order => !order.service);
    
    if (productOrders.length === 0) {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.tertiary }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="text-lg mb-4" style={{ color: colors.primary }}>No orders yet</h2>
          <button 
            onClick={() => navigate('/user/shop/indoor-plants')}
            className="px-6 py-2 rounded cursor-pointer"
            style={{ backgroundColor: colors.tertiary, color: colors.background }}
          >
            Start Shopping
          </button>
        </motion.div>
      );
    }

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        {productOrders.map((order) => (
          <motion.div 
            key={order.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-4 border-b" style={{ borderColor: colors.accent + '20' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-medium" style={{ color: colors.primary }}>{order.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium" style={{ color: colors.primary }}>
                    {formatDate(order.createdAt)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="font-medium" style={{ color: colors.primary }}>
                    {order.totalAmount ? `₹${order.totalAmount}` : 
                     order.service?.price ? `₹${order.service.price}` : 
                     'N/A'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status || 'pending')}`}>
                    {(order.status || 'Pending').charAt(0).toUpperCase() + (order.status || 'pending').slice(1)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium mb-3" style={{ color: colors.primary }}>Items</h3>
              <div className="space-y-3">
                {order.items && order.items.length > 0 ? (
                  order.items.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <div className="h-12 w-12 rounded overflow-hidden mr-3 flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate" style={{ color: colors.primary }}>{item.name}</p>
                        <div className="flex justify-between">
                          <span className="text-xs" style={{ color: colors.tertiary }}>Qty: {item.quantity}</span>
                          <span className="text-sm" style={{ color: colors.primary }}>₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm italic" style={{ color: colors.primary }}>
                    {order.service ? 'Service booking - no items' : 'No items found'}
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
              <div className="w-full sm:w-auto">
                <p className="text-sm text-gray-500">Shipping Address</p>
                <p className="text-sm" style={{ color: colors.primary }}>
                  {order.shippingAddress?.address || order.contactDetails?.address || 'No address provided'}
                  {order.shippingAddress?.city ? `, ${order.shippingAddress.city}` : ''}
                  {order.shippingAddress?.pincode ? ` ${order.shippingAddress.pincode}` : ''}
                </p>
              </div>
              <button 
                onClick={() => navigate(`/user/order-confirmation/${order.id}`)}
                className="px-4 py-2 text-sm rounded w-full sm:w-auto cursor-pointer"
                style={{ backgroundColor: colors.tertiary, color: colors.background }}
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const renderServiceBookings = () => {
    const allServiceBookings = [
      ...serviceBookings,
      ...orders.filter(order => order.service)
    ];
    
    if (allServiceBookings.length === 0) {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: colors.tertiary }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h2 className="text-lg mb-4" style={{ color: colors.primary }}>No service bookings yet</h2>
          <button 
            onClick={() => navigate('/user/service')}
            className="px-6 py-2 rounded cursor-pointer"
            style={{ backgroundColor: colors.tertiary, color: colors.background }}
          >
            Book a Service
          </button>
        </motion.div>
      );
    }

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        {allServiceBookings.map((booking) => (
          <motion.div 
            key={booking.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-4 border-b" style={{ borderColor: colors.accent + '20' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Booking ID</p>
                  <p className="font-medium" style={{ color: colors.primary }}>{booking.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service Date</p>
                  <p className="font-medium" style={{ color: colors.primary }}>
                    {formatDate(booking.date)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service</p>
                  <p className="font-medium truncate" style={{ color: colors.primary }}>{booking.service.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium mb-3" style={{ color: colors.primary }}>Service Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Service Type</p>
                  <p className="font-medium" style={{ color: colors.primary }}>
                    {booking.service.type === 'gardening' ? 'Gardening' : 
                     booking.service.type === 'setup' ? 'Garden Setup' : 
                     booking.service.type || 'Standard Service'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time Slot</p>
                  <p className="font-medium" style={{ color: colors.primary }}>{booking.timeSlot}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium" style={{ color: colors.primary }}>₹{booking.service.price}</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
                <div className="w-full sm:w-auto">
                  <p className="text-sm text-gray-500">Service Address</p>
                  <p className="text-sm" style={{ color: colors.primary }}>
                    {booking.contactDetails?.address || booking.address}
                  </p>
                </div>
                <button 
                  onClick={() => navigate(`/user/service`)}
                  className="px-4 py-2 text-sm rounded w-full sm:w-auto cursor-pointer"
                  style={{ backgroundColor: colors.tertiary, color: colors.background }}
                >
                  Book Again
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center mr-4 cursor-pointer"
            style={{ color: colors.primary }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          
          <h1 className="text-xl font-bold" style={{ color: colors.primary }}>
            Order History
          </h1>
        </div>
        
        <div className="flex border-b mb-6 overflow-x-auto" style={{ borderColor: colors.accent }}>
          <button
            className={`px-4 py-2 font-medium cursor-pointer ${activeTab === 'orders' ? 'border-b-2' : 'text-gray-500'} cursor-pointer`}
            style={{ 
              borderColor: activeTab === 'orders' ? colors.tertiary : 'transparent',
              color: activeTab === 'orders' ? colors.tertiary : null 
            }}
            onClick={() => handleTabChange('orders')}
          >
            Product Orders
          </button>
          <button
            className={`px-4 py-2 font-medium cursor-pointer ${activeTab === 'services' ? 'border-b-2' : 'text-gray-500'} cursor-pointer`}
            style={{ 
              borderColor: activeTab === 'services' ? colors.tertiary : 'transparent',
              color: activeTab === 'services' ? colors.tertiary : null 
            }}
            onClick={() => handleTabChange('services')}
          >
            Service Bookings
          </button>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2" style={{ borderColor: colors.tertiary }}></div>
          </div>
        ) : (
          <div>
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'services' && renderServiceBookings()}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;