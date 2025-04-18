import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiCheck, FiPackage, FiTruck, FiClock } from 'react-icons/fi';
import { getProductsByCategory } from '../plantShopData';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Load all products from plantShopData to match with order items
    const loadProducts = () => {
      try {
        // Get products from all categories
        const indoorPlants = getProductsByCategory('indoor-plants') || [];
        const outdoorPlants = getProductsByCategory('outdoor-plants') || [];
        const plantCare = getProductsByCategory('plant-care') || [];
        const pots = getProductsByCategory('pots') || [];
        
        // Combine all products
        const products = [...indoorPlants, ...outdoorPlants, ...plantCare, ...pots];
        setAllProducts(products);
      } catch (err) {
        console.error('Error loading product data:', err);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const fetchOrder = () => {
      try {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        
        // Get orders from localStorage
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const foundOrder = orders.find(order => order.id === orderId);
        
        if (foundOrder) {
          // Convert ISO string back to Date object for display
          foundOrder.createdAt = new Date(foundOrder.createdAt);
          
          // Match order items with product data to get correct images
          if (foundOrder.items && foundOrder.items.length > 0 && allProducts.length > 0) {
            foundOrder.items = foundOrder.items.map(item => {
              // Find the matching product from our data source
              const matchedProduct = allProducts.find(p => p.id === item.id || p.name === item.name);
              
              // If we found a match, use its image
              if (matchedProduct) {
                return {
                  ...item,
                  image: matchedProduct.image || item.image // Use the data source image or fallback to the stored one
                };
              }
              return item;
            });
          }
          
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

    // Only fetch the order if we have products loaded or if it's a service order
    if (allProducts.length > 0 || (order && order.service)) {
      fetchOrder();
    }
  }, [orderId, allProducts]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9F6F0] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2D3B2D] mx-auto"></div>
          <p className="mt-4 text-[#184D3E]">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F9F6F0] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#2D3B2D]">Error</h2>
          <p className="mt-2 text-[#184D3E]">{error}</p>
          <button
            onClick={() => navigate('/user/shop/indoor-plants')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2D3B2D] hover:bg-[#4A6741] transition-colors duration-200 cursor-pointer"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  // Responsive order status component with horizontal scroll for small screens
  const OrderStatus = () => (
    <div className="mb-8">
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[320px] w-full flex justify-between items-center py-2">
          <div className="flex-1">
            <div className="relative flex items-center">
              <div className="flex items-center flex-col">
                <div className="rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-[#ABC69F]">
                  <FiCheck className="h-5 w-5 sm:h-6 sm:w-6 text-[#2D3B2D]" />
                </div>
                <span className="mt-2 text-xs sm:text-sm text-[#184D3E] whitespace-nowrap">Order Placed</span>
              </div>
              <div className="flex-1 h-1 mx-2 sm:mx-4 bg-[#ABC69F]" />
              <div className="flex items-center flex-col">
                <div className="rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-[#F3E5АВ]">
                  <FiPackage className="h-5 w-5 sm:h-6 sm:w-6 text-[#2D3B2D]" />
                </div>
                <span className="mt-2 text-xs sm:text-sm text-[#184D3E] whitespace-nowrap">Processing</span>
              </div>
              <div className="flex-1 h-1 mx-2 sm:mx-4 bg-[#F3E5АВ]" />
              <div className="flex items-center flex-col">
                <div className="rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-[#F3E5АВ]">
                  <FiTruck className="h-5 w-5 sm:h-6 sm:w-6 text-[#2D3B2D]" />
                </div>
                <span className="mt-2 text-xs sm:text-sm text-[#184D3E] whitespace-nowrap">Shipped</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9F6F0] py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="mx-auto flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#ABC69F]">
            <FiCheck className="h-8 w-8 sm:h-10 sm:w-10 text-[#2D3B2D]" />
          </div>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-[#2D3B2D]">Thank You for Your Order!</h1>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-[#184D3E]">
            Order #{order.id.slice(-6)} has been successfully placed
          </p>
        </div>

        <OrderStatus />

        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-[#D4B982]">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-[#F3E5АВ] bg-[#F9F6F0]">
            <h2 className="text-lg sm:text-xl font-semibold text-[#2D3B2D]">Order Summary</h2>
          </div>
          
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-[#F3E5АВ]">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-[#2D3B2D]">Items</h3>
            <div className="space-y-3 sm:space-y-4">
              {order.service ? (
                // Service booking display
                <div className="flex flex-row items-center gap-3 p-3 sm:p-4 rounded-lg bg-[#F9F6F0]">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center rounded-lg border border-[#D4B982] bg-[#ABC69F]">
                    <FiClock className="w-8 h-8 sm:w-10 sm:h-10 text-[#2D3B2D]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-[#2D3B2D] text-sm sm:text-base truncate">{order.service.name}</h4>
                    <p className="text-xs sm:text-sm text-[#4A6741]">Date: {order.date}</p>
                    <p className="text-xs sm:text-sm text-[#4A6741]">Time: {order.timeSlot}</p>
                  </div>
                  <p className="font-medium text-[#184D3E] text-sm sm:text-base whitespace-nowrap">
                    ₹{order.service.price.toFixed(2)}
                  </p>
                </div>
              ) : order.items && order.items.length > 0 ? (
                // Product order items with corrected images from plant shop data
                order.items.map((item) => (
                  <div key={item.id} className="flex flex-row items-center gap-3 p-3 sm:p-4 rounded-lg bg-[#F9F6F0]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-[#D4B982] flex-shrink-0"
                      onError={(e) => {
                        // Fallback image if the one from data source fails
                        e.target.onerror = null; 
                        e.target.src = '/assets/images/placeholder-plant.jpg';
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[#2D3B2D] text-sm sm:text-base truncate">{item.name}</h4>
                      <p className="text-xs sm:text-sm text-[#4A6741]">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-[#184D3E] text-sm sm:text-base whitespace-nowrap">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-[#4A6741] italic">No items found</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-medium text-[#2D3B2D]">
                {order.service ? 'Service Address' : 'Shipping Address'}
              </h3>
              <div className="p-3 sm:p-4 rounded-lg bg-[#F9F6F0] text-[#184D3E] text-sm sm:text-base">
                {order.service ? (
                  // Display service address
                  <p className="break-words">
                    {order.contactDetails?.name || 'Customer'}<br />
                    {order.contactDetails?.address || 'No address provided'}<br />
                    {order.contactDetails?.phone && `Phone: ${order.contactDetails.phone}`}
                  </p>
                ) : order.shippingAddress ? (
                  // Display shipping address for product orders
                  <p className="break-words">
                    {order.shippingAddress.firstName || ''} {order.shippingAddress.lastName || ''}<br />
                    {order.shippingAddress.address || ''}<br />
                    {order.shippingAddress.city && order.shippingAddress.state ? 
                      `${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.pincode || ''}` : 
                      ''}
                  </p>
                ) : (
                  <p>No address information available</p>
                )}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-medium text-[#2D3B2D]">Payment Details</h3>
              <div className="p-3 sm:p-4 rounded-lg bg-[#F9F6F0]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base text-[#4A6741]">Payment Method</span>
                  <span className="text-sm sm:text-base text-[#184D3E] capitalize">{order.paymentMethod || 'Cash on Delivery'}</span>
                </div>
                
                {order.service ? (
                  // Service booking payment details
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm sm:text-base text-[#4A6741]">Service Fee</span>
                    <span className="text-sm sm:text-base text-[#184D3E]">₹{order.service.price.toFixed(2)}</span>
                  </div>
                ) : (
                  // Product order payment details
                  <>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm sm:text-base text-[#4A6741]">Subtotal</span>
                      <span className="text-sm sm:text-base text-[#184D3E]">₹{((order.totalAmount || 0) - 499).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm sm:text-base text-[#4A6741]">Shipping</span>
                      <span className="text-sm sm:text-base text-[#184D3E]">₹499</span>
                    </div>
                  </>
                )}
                
                <div className="border-t border-[#D4B982] mt-2 pt-2">
                  <div className="flex justify-between items-center text-base sm:text-lg font-semibold">
                    <span className="text-[#2D3B2D]">Total</span>
                    <span className="text-[#184D3E]">
                      ₹{(order.totalAmount || (order.service ? order.service.price : 0)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={() => navigate(order.service ? '/' : '/user/shop/indoor-plants')}
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#2D3B2D] hover:bg-[#4A6741] transition-colors duration-200 w-full sm:w-auto cursor-pointer"
          >
            {order.service ? 'Book Another Service' : 'Continue Shopping'}
          </button>
          <button
            onClick={() => navigate('/user/order-history')}
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-[#2D3B2D] rounded-lg shadow-sm text-sm font-medium text-[#2D3B2D] bg-white hover:bg-[#F9F6F0] transition-colors duration-200 w-full sm:w-auto cursor-pointer"
          >
            View Order History
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;