import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCreditCard, FiSmartphone, FiDollarSign, FiShoppingBag, FiArrowLeft } from 'react-icons/fi';

const colors = {
  primary: '#2D3B2D',
  secondary: '#D4B982',
  tertiary: '#4A6741',
  background: '#F9F6F0',
  accent: '#A8C69F',
  deep: '#1B4D3E',
  highlight: '#F3E5AB',
  warm: '#E6BAA3'
};

const mockUser = {
  uid: 'user123',
  email: 'user@example.com'
};

const Checkout = () => {
  const navigate = useNavigate();
  const user = mockUser;
  
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  useEffect(() => {
    if (mockUser?.email) {
      setFormData(prev => ({
        ...prev,
        email: mockUser.email
      }));
    }
  }, []);

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: <FiCreditCard size={24} />,
      description: 'Pay securely with your card'
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: <FiSmartphone size={24} />,
      description: 'Pay using UPI'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: <FiDollarSign size={24} />,
      description: 'Pay when you receive'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handlePaymentSelect = (methodId) => {
    setSelectedPayment(methodId);
    if (error) setError('');
  };

  const validateStep = () => {
    if (step === 1) {
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'pincode'];
      const emptyFields = requiredFields.filter(field => !formData[field].trim());
      
      if (emptyFields.length > 0) {
        setError(`Please fill in all required fields: ${emptyFields.join(', ')}`);
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address');
        return false;
      }
    }

    if (step === 2 && !selectedPayment) {
      setError('Please select a payment method');
      return false;
    }

    setError('');
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
    setError('');
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  const handlePlaceOrder = async () => {
    if (!validateStep()) return;

    setLoading(true);
    setError('');

    try {
      const orderData = {
        id: Math.random().toString(36).substr(2, 9),
        userId: mockUser.uid,
        items: cartItems,
        totalAmount: cartTotal + 499,
        shippingAddress: formData,
        paymentMethod: selectedPayment,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      localStorage.setItem('orders', JSON.stringify([...existingOrders, orderData]));
      
      clearCart();
      navigate(`/home/order-confirmation/${orderData.id}`);
    } catch (error) {
      console.error('Error placing order:', error);
      setError('Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9F6F0] flex items-center justify-center p-4">
        <div className="max-w-md text-center">
          <FiShoppingBag className="mx-auto h-16 w-16 text-[#2D3B2D] mb-4" />
          <h2 className="text-3xl font-bold text-[#2D3B2D] mb-2">Your Cart is Empty</h2>
          <p className="text-[#4A6741] mb-6">Add some items to your cart to proceed with checkout</p>
          <button
            onClick={() => navigate('/home/shop')}
            className="bg-[#2D3B2D] hover:bg-[#1B4D3E] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F9F6F0] flex items-center justify-center p-4">
        <div className="max-w-md text-center">
          <FiShoppingBag className="mx-auto h-16 w-16 text-[#2D3B2D] mb-4" />
          <h2 className="text-3xl font-bold text-[#2D3B2D] mb-2">Your Cart is Empty</h2>
          <p className="text-[#4A6741] mb-6">Add some items to your cart to proceed with checkout</p>
          <button
            onClick={() => navigate('/home/shop')}
            className="bg-[#2D3B2D] hover:bg-[#1B4D3E] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F6F0] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex justify-center items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  step >= stepNumber 
                    ? 'bg-[#2D3B2D] text-white shadow-md' 
                    : 'bg-[#A8C69F] text-[#2D3B2D]'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`h-1 w-20 transition-colors ${
                    step > stepNumber ? 'bg-[#2D3B2D]' : 'bg-[#A8C69F]/50'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-[#2D3B2D] font-semibold text-lg">
              {['Shipping Details', 'Payment Method', 'Review Order'][step - 1]}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit border border-[#A8C69F]/20">
            <h2 className="text-2xl font-bold text-[#2D3B2D] mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4 bg-[#F9F6F0] rounded-xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border border-[#A8C69F]"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#2D3B2D]">{item.name}</h3>
                    <p className="text-[#4A6741] text-sm">Quantity: {item.quantity}</p>
                    <p className="text-[#1B4D3E] font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#E6BAA3]/40">
              <div className="flex justify-between text-xl font-bold text-[#2D3B2D]">
                <span>Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-[#2D3B2D]">
                <span>Shipping</span>
                <span>₹499</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-[#2D3B2D]">
                <span>Total</span>
                <span>₹{(cartTotal + 499).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {step === 1 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#A8C69F]/20">
                <h2 className="text-2xl font-bold text-[#2D3B2D] mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[#A8C69F] focus:border-[#2D3B2D] focus:ring-2 focus:ring-[#D4B982] placeholder-[#A8C69F]"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[#A8C69F] focus:border-[#2D3B2D] focus:ring-2 focus:ring-[#D4B982] placeholder-[#A8C69F]"
                      placeholder="Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[#A8C69F] focus:border-[#2D3B2D] focus:ring-2 focus:ring-[#D4B982] placeholder-[#A8C69F]"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-1">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[#A8C69F] focus:border-[#2D3B2D] focus:ring-2 focus:ring-[#D4B982] placeholder-[#A8C69F]"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#4A6741] mb-1">Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[#A8C69F] focus:border-[#2D3B2D] focus:ring-2 focus:ring-[#D4B982] placeholder-[#A8C69F]"
                      placeholder="1234 Main St"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[#A8C69F] focus:border-[#2D3B2D] focus:ring-2 focus:ring-[#D4B982] placeholder-[#A8C69F]"
                      placeholder="City"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-1">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[#A8C69F] focus:border-[#2D3B2D] focus:ring-2 focus:ring-[#D4B982] placeholder-[#A8C69F]"
                      placeholder="State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A6741] mb-1">Pincode *</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[#A8C69F] focus:border-[#2D3B2D] focus:ring-2 focus:ring-[#D4B982] placeholder-[#A8C69F]"
                      placeholder="123456"
                      maxLength="6"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#A8C69F]/20">
                <h2 className="text-2xl font-bold text-[#2D3B2D] mb-6">Select Payment Method</h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedPayment === method.id
                          ? 'bg-[#F3E5AB] border-2 border-[#2D3B2D] shadow-sm'
                          : 'bg-[#F9F6F0] hover:bg-[#A8C69F]/20 border-2 border-transparent hover:border-[#A8C69F]'
                      }`}
                      onClick={() => handlePaymentSelect(method.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${selectedPayment === method.id ? 'bg-[#2D3B2D] text-[#F3E5AB]' : 'bg-[#A8C69F] text-[#2D3B2D]'}`}>
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#2D3B2D]">{method.name}</h3>
                          <p className="text-sm text-[#4A6741]">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#A8C69F]/20">
                <h2 className="text-2xl font-bold text-[#2D3B2D] mb-6">Review Your Order</h2>
                <div className="space-y-4">
                  <div className="bg-[#F9F6F0] p-4 rounded-xl">
                    <h3 className="font-semibold text-[#2D3B2D] mb-2">Shipping Address</h3>
                    <p className="text-[#4A6741]">
                      {formData.firstName} {formData.lastName}<br />
                      {formData.address}<br />
                      {formData.city}, {formData.state} {formData.pincode}
                    </p>
                  </div>
                  <div className="bg-[#F9F6F0] p-4 rounded-xl">
                    <h3 className="font-semibold text-[#2D3B2D] mb-2">Payment Method</h3>
                    <p className="text-[#4A6741]">
                      {paymentMethods.find(m => m.id === selectedPayment)?.name}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-[#E6BAA3] border border-[#D4B982] text-[#2D3B2D] px-4 py-3 rounded-lg flex items-center">
                <svg 
                  className="w-5 h-5 mr-2 flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div className="flex gap-4">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex-1 bg-[#F9F6F0] text-[#2D3B2D] py-3.5 px-4 rounded-lg border-2 border-[#2D3B2D] hover:bg-[#D4B982]/20 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <FiArrowLeft className="w-5 h-5" />
                  Back
                </button>
              )}
              <button
                onClick={step === 3 ? handlePlaceOrder : handleNext}
                disabled={loading}
                className={`flex-1 py-3.5 px-4 rounded-lg font-medium transition-all ${
                  loading 
                    ? 'bg-[#2D3B2D]/70 cursor-not-allowed' 
                    : 'bg-[#2D3B2D] hover:bg-[#1B4D3E] transform hover:scale-[1.02]'
                } text-white flex items-center justify-center gap-2`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Processing...
                  </>
                ) : step === 3 ? (
                  'Place Secure Order'
                ) : (
                  'Continue'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;