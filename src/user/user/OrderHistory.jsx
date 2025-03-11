import React, { useState, useEffect } from 'react';
import { FiClock, FiCalendar, FiMapPin, FiPhone, FiPackage, FiShoppingBag } from 'react-icons/fi';
import { Card } from '../../components/ui/card';
import { useNavigate } from 'react-router-dom';

const OrderHistoryPage = () => {
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB',
    warm: '#E6BAA3',
    error: '#FF6B6B'
  };

  // Replace Firebase auth with mock user
  const user = {
    id: '123',
    email: 'user@example.com',
    name: 'Test User'
  };

  const [serviceBookings, setServiceBookings] = useState([]);
  const [shopOrders, setShopOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        // Load from localStorage instead of Firebase
        const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');

        // Format the dates
        const bookingsData = savedBookings.map(booking => ({
          ...booking,
          type: 'service',
          createdAt: new Date(booking.createdAt)
        }));

        const ordersData = savedOrders.map(order => ({
          ...order,
          type: 'shop',
          createdAt: new Date(order.createdAt)
        }));

        // Sort the data
        const sortedBookings = bookingsData.sort((a, b) => 
          (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
        );
        
        const sortedOrders = ordersData.sort((a, b) => 
          (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
        );

        setServiceBookings(sortedBookings);
        setShopOrders(sortedOrders);
        setError(null);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('Failed to load order history. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllOrders();
  }, []);

  const ServiceBookingCard = ({ booking }) => (
    <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold" style={{ color: colors.deep }}>
            {booking.service?.name || 'Service Booking'}
          </h3>
          <p className="text-green-600 font-medium mt-1">
            {booking.service?.price || 'Price not available'}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          booking.status === 'completed' ? 'bg-green-100 text-green-800' :
          'bg-red-100 text-red-800'
        }`}>
          {booking.status || 'Status not available'}
        </span>
      </div>
      
      <div className="space-y-3">
        {booking.date && (
          <div className="flex items-center text-gray-600">
            <FiCalendar className="mr-2" />
            <span>{new Date(booking.date).toLocaleDateString()}</span>
          </div>
        )}
        {booking.time && (
          <div className="flex items-center text-gray-600">
            <FiClock className="mr-2" />
            <span>{booking.time}</span>
          </div>
        )}
        {booking.phone && (
          <div className="flex items-center text-gray-600">
            <FiPhone className="mr-2" />
            <span>{booking.phone}</span>
          </div>
        )}
        {booking.address && (
          <div className="flex items-center text-gray-600">
            <FiMapPin className="mr-2" />
            <span>{booking.address}</span>
          </div>
        )}
      </div>

      {booking.specialInstructions && (
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Special Instructions:</span><br />
            {booking.specialInstructions}
          </p>
        </div>
      )}

      {booking.createdAt && (
        <div className="mt-4 pt-4 border-t text-sm text-gray-500">
          Booked on: {booking.createdAt.toLocaleDateString()} at {booking.createdAt.toLocaleTimeString()}
        </div>
      )}
    </Card>
  );

  const ShopOrderCard = ({ order }) => (
    <Card className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold" style={{ color: colors.deep }}>
            Order #{order.id.slice(0, 8)}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {order.createdAt?.toLocaleDateString()} at {order.createdAt?.toLocaleTimeString()}
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-sm"
          style={{
            backgroundColor: 
              order.status === 'completed' ? colors.accent :
              order.status === 'pending' ? colors.highlight :
              colors.error,
            color: colors.primary
          }}>
          {order.status?.charAt(0).toUpperCase() + order.status?.slice(1) || 'Status not available'}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        {order.items?.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b">
            <div className="flex items-center">
              <FiPackage className="mr-2" style={{ color: colors.tertiary }} />
              <span>{item.name}</span>
            </div>
            <div className="text-right">
              <p className="font-medium">${item.price} × {item.quantity}</p>
              <p className="text-sm text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center pt-4 font-bold">
          <span>Total</span>
          <span style={{ color: colors.tertiary }}>${order.total?.toFixed(2) || '0.00'}</span>
        </div>
      </div>
    </Card>
  );

  const CustomTabs = () => {
    const tabs = [
      { id: 'all', label: 'All Orders' },
      { id: 'services', label: 'Service Bookings' },
      { id: 'shop', label: 'Shop Orders' }
    ];

    return (
      <div className="flex space-x-2 mb-8 border-b">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium transition-colors duration-200 ${
              activeTab === tab.id 
                ? 'border-b-2 text-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            style={{ 
              borderColor: activeTab === tab.id ? colors.tertiary : 'transparent',
              color: activeTab === tab.id ? colors.deep : undefined
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  };

  const renderContent = () => {
    const allOrders = [...serviceBookings, ...shopOrders]
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));

    // Check if there are no orders based on the active tab
    const noOrders = (activeTab === 'services' && serviceBookings.length === 0) ||
                     (activeTab === 'shop' && shopOrders.length === 0) ||
                     (activeTab === 'all' && allOrders.length === 0);

    if (noOrders) {
      return (
        <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-md">
          <FiShoppingBag size={48} style={{ color: colors.tertiary }} />
          <h3 className="mt-6 text-xl font-semibold" style={{ color: colors.deep }}>
            No orders found
          </h3>
          <p className="mt-2 text-gray-600 text-center">
            {activeTab === 'services' 
              ? "You haven't booked any services yet."
              : activeTab === 'shop' 
                ? "You haven't placed any shop orders yet."
                : "You haven't placed any orders or booked any services yet."}
          </p>
          <button 
            className="mt-6 px-6 py-2 rounded-lg text-white transition-colors hover:bg-opacity-90"
            style={{ backgroundColor: colors.tertiary }}
            onClick={() => navigate(activeTab === 'services' ? '/user/service' : '/user/shop')}
          >
            {activeTab === 'services' ? 'Browse Services' : 'Shop Now'}
          </button>
        </div>
      );
    }

    switch (activeTab) {
      case 'services':
        return (
          <div className="grid gap-6 md:grid-cols-2">
            {serviceBookings.map((booking) => (
              <ServiceBookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        );
      case 'shop':
        return (
          <div className="grid gap-6 md:grid-cols-2">
            {shopOrders.map((order) => (
              <ShopOrderCard key={order.id} order={order} />
            ))}
          </div>
        );
      default:
        return (
          <div className="grid gap-6 md:grid-cols-2">
            {allOrders.map((order) => (
              order.type === 'service' 
                ? <ServiceBookingCard key={`service-${order.id}`} booking={order} />
                : <ShopOrderCard key={`shop-${order.id}`} order={order} />
            ))}
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen" style={{ backgroundColor: colors.background }}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: colors.background }}>
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8" style={{ color: colors.primary }}>Order History</h1>
          
          {error ? (
            <div className="text-center text-red-600">
              <p>{error}</p>
            </div>
          ) : (
            <>
              <CustomTabs />
              {renderContent()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;