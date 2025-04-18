import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  
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
  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center mr-4 cursor-pointer"
            style={{ color: colors.primary }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          
          <h1 className="text-xl font-bold" style={{ color: colors.primary }}>
            Your Cart ({cartItems.length})
          </h1>
        </div>
        
        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h2 className="text-lg mb-4" style={{ color: colors.primary }}>Your cart is empty</h2>
            <button 
              onClick={() => navigate('/user/shop/indoor-plants')}
              className="px-6 py-2 rounded cursor-pointer"
              style={{ backgroundColor: colors.primary, color: colors.background }}
            >
              Continue Shopping
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col lg:flex-row gap-6"
          >
            <div className="lg:w-2/3">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id} 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden flex"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium" style={{ color: colors.primary }}>{item.name}</h3>
                      <p className="text-sm" style={{ color: colors.tertiary }}>{item.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                          style={{ backgroundColor: `${colors.tertiary}20`, color: colors.tertiary }}
                        >
                          -
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                          style={{ backgroundColor: `${colors.tertiary}20`, color: colors.tertiary }}
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="font-medium mr-4" style={{ color: colors.primary }}>
                          ₹{item.price * item.quantity}
                        </span>
                        <button 
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-gray-400 hover:text-red-500 cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="lg:w-1/3">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="font-bold mb-4" style={{ color: colors.primary }}>Order Summary</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span style={{ color: colors.tertiary }}>Subtotal</span>
                    <span style={{ color: colors.primary }}>₹{calculateSubtotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.tertiary }}>Delivery</span>
                    <span style={{ color: colors.primary }}>₹49</span>
                  </div>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-bold">
                    <span style={{ color: colors.primary }}>Total</span>
                    <span style={{ color: colors.primary }}>₹{calculateSubtotal() + 49}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate('/user/checkout')}
                  className="w-full py-3 text-center rounded font-medium cursor-pointer"
                  style={{ backgroundColor: colors.primary, color: colors.background }}
                >
                  Proceed to Checkout
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Cart;
