import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateQuantity, removeFromCart } from '../../redux/cartSlice';

const SlidingCart = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalSavings = cartItems.reduce((total, item) => {
    const originalPrice = item.originalPrice || item.price * 1.2; // Estimate original price if not provided
    return total + ((originalPrice - item.price) * item.quantity);
  }, 0);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };
  
  const goToCart = () => {
    navigate('/user/cart');
  };

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg transition-all duration-300 flex flex-col"
         style={{ transform: isExpanded ? 'translateY(0)' : 'translateY(calc(100% - 60px))' }}>
      {/* Expanded content - Now above the bar */}
      {isExpanded && (
        <div className="bg-white p-4 border-t" style={{ borderColor: '#e8f4e5' }}>
          {/* Cart Items */}
          <div className="max-h-60 overflow-y-auto">
            {cartItems.map(item => (
              <div key={item.id} className="py-3 flex items-center justify-between border-t" style={{ borderColor: '#e8f4e5' }}>
                <div className="flex items-center">
                  <img 
                    src={item.image || "/api/placeholder/40/40"} 
                    alt={item.name} 
                    className="w-12 h-12 object-cover rounded-md mr-3"
                  />
                  <div>
                    <p className="font-medium text-[#2d5a27]">{item.name}</p>
                    <p className="text-sm text-gray-600">1 kg</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    {item.originalPrice && (
                      <p className="text-sm text-gray-400 line-through">₹{item.originalPrice}</p>
                    )}
                    <p className="font-bold text-[#2d5a27]">₹{item.price}</p>
                  </div>
                  <div className="flex items-center border rounded-md overflow-hidden" style={{ borderColor: '#e8f4e5' }}>
                    <button 
                      className="p-1 w-8 h-8 flex items-center justify-center bg-[#e8f4e5] text-[#2d5a27]"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <div className="w-8 h-8 flex items-center justify-center font-medium">
                      {item.quantity}
                    </div>
                    <button 
                      className="p-1 w-8 h-8 flex items-center justify-center bg-[#e8f4e5] text-[#2d5a27]"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Bottom bar - Always visible */}
      <div className="px-4 py-3 bg-white border-t flex items-center justify-around cursor-pointer"
           onClick={toggleExpand}
           style={{ borderColor: '#e8f4e5', backgroundColor: '#fff' }}>
        <div className="flex items-center">
          <div className="relative mr-3">
            <div className="w-12 h-12 bg-[#e8f4e5] rounded-md flex items-center justify-center">
              <img 
                src={cartItems[0]?.image || "/api/placeholder/40/40"} 
                alt="Cart item" 
                className="w-8 h-8 object-cover"
              />
              <span className="absolute -top-1 -right-1 bg-[#2d5a27] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            </div>
          </div>
          <div>
            <div className="font-medium text-[#2d5a27] flex items-center">
              {totalItems} Item
              <svg className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <button 
          className="bg-[#2d5a27] text-white py-2 px-6 rounded-md font-medium hover:bg-[#1B4D3E] transition-colors"
          onClick={(e) => { e.stopPropagation(); goToCart(); }}
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default SlidingCart;