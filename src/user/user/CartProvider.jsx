import React from 'react';
import SlidingCart from './SlidingCart';

/**
 * CartProvider component that wraps your app content and provides cart UI components
 * This component adds the sliding cart functionality
 */
const CartProvider = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      {children}
      
      {/* Sliding Cart - Always visible when items in cart */}
      <SlidingCart />
    </div>
  );
};

export default CartProvider;
