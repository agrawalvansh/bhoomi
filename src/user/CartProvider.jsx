import React from 'react';
import SlidingCart from './SlidingCart';

const CartProvider = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
      <SlidingCart />
    </div>
  );
};

export default CartProvider;
