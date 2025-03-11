import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiCheck, FiPackage, FiTruck, FiClock } from 'react-icons/fi';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = () => {
      try {
        // Get orders from localStorage
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const foundOrder = orders.find(order => order.id === orderId);
        
        if (foundOrder) {
          // Convert ISO string back to Date object for display
          foundOrder.createdAt = new Date(foundOrder.createdAt);
          setOrder(foundOrder);
        } else {
          setError('Order not found');
        }
      } catch (error) {
        console.error('Error fetching order:', error);
        setError('Failed to load order details');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9F6F0] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2D3B2D] mx-auto"></div>
          <p className="mt-4 text-[#184D3E]">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F9F6F0] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#2D3B2D]">Error</h2>
          <p className="mt-2 text-[#184D3E]">{error}</p>
          <button
            onClick={() => navigate('/home/shop')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2D3B2D] hover:bg-[#4A6741] transition-colors duration-200"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const OrderStatus = () => (
    <div className="flex justify-between items-center mb-8">
      <div className="flex-1">
        <div className="relative flex items-center">
          <div className="flex items-center flex-col">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#ABC69F]">
              <FiCheck className="h-6 w-6 text-[#2D3B2D]" />
            </div>
            <span className="mt-2 text-sm text-[#184D3E]">Order Placed</span>
          </div>
          <div className="flex-1 h-1 mx-4 bg-[#ABC69F]" />
          <div className="flex items-center flex-col">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#F3E5АВ]">
              <FiPackage className="h-6 w-6 text-[#2D3B2D]" />
            </div>
            <span className="mt-2 text-sm text-[#184D3E]">Processing</span>
          </div>
          <div className="flex-1 h-1 mx-4 bg-[#F3E5АВ]" />
          <div className="flex items-center flex-col">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#F3E5АВ]">
              <FiTruck className="h-6 w-6 text-[#2D3B2D]" />
            </div>
            <span className="mt-2 text-sm text-[#184D3E]">Shipped</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F6F0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-[#ABC69F]">
            <FiCheck className="h-10 w-10 text-[#2D3B2D]" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-[#2D3B2D]">Thank You for Your Order!</h1>
          <p className="mt-2 text-lg text-[#184D3E]">
            Order #{order.id.slice(-6)} has been successfully placed
          </p>
        </div>

        <OrderStatus />

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-[#D4B982]">
          <div className="px-6 py-4 border-b border-[#F3E5АВ] bg-[#F9F6F0]">
            <h2 className="text-xl font-semibold text-[#2D3B2D]">Order Summary</h2>
          </div>
          
          <div className="px-6 py-4 border-b border-[#F3E5АВ]">
            <h3 className="text-lg font-medium mb-4 text-[#2D3B2D]">Items</h3>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 rounded-lg bg-[#F9F6F0]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border border-[#D4B982]"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-[#2D3B2D]">{item.name}</h4>
                    <p className="text-[#4A6741]">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium text-[#184D3E]">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#2D3B2D]">Shipping Address</h3>
              <div className="p-4 rounded-lg bg-[#F9F6F0] text-[#184D3E]">
                <p>
                  {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                  {order.shippingAddress.address}<br />
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#2D3B2D]">Payment Details</h3>
              <div className="p-4 rounded-lg bg-[#F9F6F0]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#4A6741]">Payment Method</span>
                  <span className="text-[#184D3E] capitalize">{order.paymentMethod}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#4A6741]">Subtotal</span>
                  <span className="text-[#184D3E]">₹{(order.totalAmount - 499).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#4A6741]">Shipping</span>
                  <span className="text-[#184D3E]">₹499</span>
                </div>
                <div className="border-t border-[#D4B982] mt-2 pt-2">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span className="text-[#2D3B2D]">Total</span>
                    <span className="text-[#184D3E]">₹{order.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => navigate('/home/shop')}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#2D3B2D] hover:bg-[#4A6741] transition-colors duration-200"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate('/home/order-history')}
            className="inline-flex items-center px-6 py-3 border border-[#2D3B2D] rounded-lg shadow-sm text-sm font-medium text-[#2D3B2D] bg-white hover:bg-[#F9F6F0] transition-colors duration-200"
          >
            View Order History
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;