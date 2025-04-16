import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCalendar, 
  FiClock, 
  FiMapPin, 
  FiUser, 
  FiPhone, 
  FiMail, 
  FiCheck, 
  FiAlertCircle, 
  FiHome, 
  FiShoppingBag, 
  FiTool, 
  FiUsers, 
  FiBookmark 
} from 'react-icons/fi';
import { format, addDays, setHours, setMinutes, isBefore } from 'date-fns';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BsCurrencyRupee } from "react-icons/bs";

const ServiceBooking = () => {
  const navigate = useNavigate();

  const colors = {
    primary: '#2d5a27',
    secondary: '#D4B982', 
    tertiary: '#2d5a27',
    background: '#f5f5f0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB',
    warm: '#E6BAA3',
    error: '#FF6B6B',
    success: '#4CAF50'
  };

  // Mock user data - this fixes the 'user is not defined' error
  const mockUser = {
    id: 'user123',
    email: 'user@example.com',
    name: 'Demo User'
  };

  // Step management and booking data state
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceType: '', // 'gardening' or 'setup'
    servicePlan: '', // for gardening service only
    date: '',
    timeSlot: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  // Sample service options
  const serviceTypes = [
    {
      id: 'gardening',
      name: 'Gardening Service',
      description: 'Regular maintenance and care for your garden',
      icon: '🌿'
    },
    {
      id: 'setup',
      name: 'Garden Setup',
      description: 'Professional garden design and installation',
      icon: '🏡'
    }
  ];

  // Sample gardening service plans
  const gardeningPlans = [
    {
      id: '4-visits',
      name: '4 Visits Package',
      price: 179.99,
      description: 'Monthly garden maintenance (4 visits/year)',
      features: [
        'Seasonal pruning and trimming',
        'Basic pest control',
        'Weed management',
        'Plant health assessment'
      ]
    },
    {
      id: '10-visits',
      name: '10 Visits Package',
      price: 399.99,
      description: 'Bi-monthly garden maintenance',
      features: [
        'All features of 4 visits package',
        'Fertilization service',
        'Soil health monitoring',
        'Plant replacement recommendations'
      ]
    },
    {
      id: '20-visits',
      name: '20 Visits Package',
      price: 699.99,
      description: 'Weekly garden maintenance',
      features: [
        'All features of 10 visits package',
        'Priority scheduling',
        'Monthly garden report',
        'Emergency visit support'
      ]
    }
  ];

  // Setup service details
  const setupService = {
    id: 'setup',
    name: 'Garden Setup Service',
    basePrice: 299.99,
    description: 'Professional garden design and installation service',
    features: [
      'Initial consultation',
      'Custom design plan',
      'Plant selection assistance',
      'Installation service',
      'Post-setup care guide'
    ]
  };

  // Generate available time slots when the date changes
  useEffect(() => {
    if (bookingData.date) {
      generateTimeSlots(bookingData.date);
    }
  }, [bookingData.date]);

  const generateTimeSlots = (selectedDate) => {
    const slots = [];
    const currentDate = new Date();
    const bookingDate = new Date(selectedDate);
    // Generate slots from 10 AM to 6 PM
    for (let hour = 10; hour <= 18; hour++) {
      const slotTime = setHours(setMinutes(bookingDate, 0), hour);
      if (isBefore(currentDate, slotTime)) {
        slots.push(format(slotTime, 'h:mm a'));
      }
    }
    setAvailableSlots(slots);
  };

  // Generic input change handler for bookingData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
    setValidationErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  // Scroll to top when changing steps
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  // Validate current step fields
  const validateStep = () => {
    const errors = {};
    switch (currentStep) {
      case 1:
        if (!bookingData.serviceType) {
          errors.serviceType = 'Please select a service type';
        }
        if (bookingData.serviceType === 'gardening' && !bookingData.servicePlan) {
          errors.servicePlan = 'Please select a service plan';
        }
        break;
      case 2:
        if (!bookingData.date) {
          errors.date = 'Please select a date';
        }
        if (!bookingData.timeSlot) {
          errors.timeSlot = 'Please select a time slot';
        }
        break;
      case 3:
        if (!bookingData.name) errors.name = 'Name is required';
        if (!bookingData.email) errors.email = 'Email is required';
        if (!bookingData.phone) errors.phone = 'Phone number is required';
        if (!bookingData.address) errors.address = 'Address is required';
        break;
      default:
        break;
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(current => current + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setCurrentStep(current => current - 1);
    setValidationErrors({});
    window.scrollTo(0, 0);
  };

  const handleServiceTypeSelect = (type) => {
    setBookingData(prev => ({
      ...prev,
      serviceType: type,
      servicePlan: '' // Reset service plan when type changes
    }));
    setValidationErrors({});
  };

  const handleServicePlanSelect = (planId) => {
    setBookingData(prev => ({
      ...prev,
      servicePlan: planId
    }));
    setValidationErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!mockUser) {
      toast.error('Please log in to book a service');
      return;
    }

    try {
      // Create booking details
      const bookingDetails = {
        id: Math.random().toString(36).substr(2, 9), // Generate random ID
        userId: mockUser.id,
        userEmail: mockUser.email,
        service: {
          type: bookingData.serviceType,
          name: bookingData.serviceType === 'gardening' 
            ? gardeningPlans.find(plan => plan.id === bookingData.servicePlan)?.name
            : setupService.name,
          price: bookingData.serviceType === 'gardening'
            ? gardeningPlans.find(plan => plan.id === bookingData.servicePlan)?.price
            : setupService.basePrice
        },
        // Add totalAmount for compatibility with OrderHistory component
        totalAmount: bookingData.serviceType === 'gardening'
          ? gardeningPlans.find(plan => plan.id === bookingData.servicePlan)?.price
          : setupService.basePrice,
        date: bookingData.date,
        timeSlot: bookingData.timeSlot,
        contactDetails: {
          name: bookingData.name,
          email: bookingData.email,
          phone: bookingData.phone,
          address: bookingData.address
        },
        // Add empty items array for compatibility with OrderHistory component
        items: [],
        notes: bookingData.notes,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      // Save to localStorage in both 'orders' and 'bookings'
      try {
        // Save to orders for unified order history
        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        const updatedOrders = [...existingOrders, bookingDetails];
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        
        // Also save to bookings for backward compatibility
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        localStorage.setItem('bookings', JSON.stringify([...existingBookings, bookingDetails]));
        
        // Show success message
        toast.success('Service booking confirmed!');
        
        // Redirect to order confirmation page with the booking ID
        setTimeout(() => {
          navigate(`/user/order-confirmation/${bookingDetails.id}`);
        }, 1000);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
        toast.error('Failed to save booking. Please try again.');
      }

    } catch (error) {
      console.error('Error creating booking:', error);
      toast.error('Failed to create booking. Please try again.');
    }
  };

  // Step 1: Render service selection (gardening or setup)
  const renderServiceSelection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: colors.background }}>
        Select Service Type
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {serviceTypes.map(type => (
          <motion.div
            key={type.id}
            className={`p-4 md:p-6 rounded-xl cursor-pointer transition-all border-2 shadow-md ${
              validationErrors.serviceType ? 'border-error' : bookingData.serviceType === type.id ? 'border-secondary' : 'border-[#8b4513]'
            }`}
            style={{ 
              backgroundColor: bookingData.serviceType === type.id ? '#8b4513' : colors.highlight,
              color: bookingData.serviceType === type.id ? colors.background : colors.primary,

            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleServiceTypeSelect(type.id)}
          >
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-3xl md:text-4xl">{type.icon}</span>
              <div>
                <h3 className="text-lg md:text-xl font-bold">{type.name}</h3>
                <p className="text-xs md:text-sm mt-1 md:mt-2 opacity-90">{type.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {validationErrors.serviceType && (
        <p className="text-sm mt-2" style={{ color: colors.error }}>
          {validationErrors.serviceType}
        </p>
      )}
      {bookingData.serviceType === 'gardening' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 md:mt-8"
        >
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4" style={{ color: colors.background }}>
            Select Service Plan
          </h3>
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {gardeningPlans.map(plan => (
              <motion.div
                key={plan.id}
                className={`p-4 md:p-6 rounded-xl cursor-pointer border-2 shadow-md ${
                  validationErrors.servicePlan ? 'border-error' : bookingData.servicePlan === plan.id ? 'border-deep' : 'border-[#8b4513]'
                }`}
                style={{ 
                  backgroundColor: bookingData.servicePlan === plan.id ? '#8b4513' : colors.highlight,
                  color: bookingData.servicePlan === plan.id ? colors.background : colors.deep
                }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleServicePlanSelect(plan.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-lg font-bold">{plan.name}</h4>
                    <p className="text-sm mb-2 md:mb-0">{plan.description}</p>
                  </div>
                  <div className="text-xl md:text-2xl font-bold my-2 md:my-0 md:ml-4">
                    <span className="flex items-center">
                      <BsCurrencyRupee />{plan.price}
                    </span>
                  </div>
                </div>
                <ul className="text-sm space-y-1 mt-3 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FiCheck className="flex-shrink-0" style={{ color: bookingData.servicePlan === plan.id ? colors.background : colors.tertiary }} />
                      <span className="text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      {bookingData.serviceType === 'setup' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl border-2 border-[#8b4513] shadow-md"
          style={{ backgroundColor: colors.highlight }}
        >
          <h3 className="text-lg md:text-xl font-bold" style={{ color: colors.deep }}>
            {setupService.name}
          </h3>
          <div className="text-xl md:text-2xl font-bold my-3 md:my-4" style={{ color: colors.deep }}>
            Starting from <span className="flex items-center">
              <BsCurrencyRupee />{setupService.basePrice}
            </span>
          </div>
          <p className="mb-3 md:mb-4 text-sm" style={{ color: colors.deep }}>
            {setupService.description}
          </p>
          <ul className="space-y-1 md:space-y-2 grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
            {setupService.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2" style={{ color: colors.deep }}>
                <FiCheck className="flex-shrink-0" style={{ color: colors.tertiary }} />
                <span className="text-xs md:text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );

  // Step 2: Render Date & Time selection
  const renderDateTimeSelection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4 md:space-y-6"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: colors.background }}>
        Select Date & Time
      </h2>
      <div className="mb-4 md:mb-6">
        <label className="block mb-2" style={{ color: colors.background }}>
          Select Date
        </label>
        <div className="relative">
          <FiCalendar className="absolute left-3 top-3" style={{ color: colors.tertiary }} />
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
            className={`w-full p-3 pl-10 rounded-lg border ${
              validationErrors.date ? 'border-2 border-error' : 'border-2 border-accent'
            }`}
            style={{ backgroundColor: colors.background }}
            min={new Date().toISOString().split('T')[0]}
            max={addDays(new Date(), 3).toISOString().split('T')[0]}
          />
        </div>
        {validationErrors.date && (
          <p className="text-sm mt-2" style={{ color: colors.error }}>
            {validationErrors.date}
          </p>
        )}
      </div>
      {bookingData.date && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <label className="block mb-2" style={{ color: colors.background }}>
            Select Time Slot
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
            {availableSlots.map(slot => (
              <button
                key={slot}
                onClick={() => handleInputChange({ target: { name: 'timeSlot', value: slot } })}
                className={`p-2 md:p-3 rounded-lg text-center transition-all text-sm md:text-base border ${
                  validationErrors.timeSlot ? 'border-2 border-error' : bookingData.timeSlot === slot ? 'border-secondary' : 'border-transparent'
                }`}
                style={{ 
                  backgroundColor: bookingData.timeSlot === slot ? '#f3e5ab' : colors.background,
                  color: bookingData.timeSlot === slot ? '#1b4d3e' : colors.deep,
                  boxShadow: bookingData.timeSlot === slot ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                  border: bookingData.timeSlot === slot ? '3px solid #8b4513' : '2px solid transparent'
                }}
              >
                {slot}
              </button>
            ))}
          </div>
          {validationErrors.timeSlot && (
            <p className="text-sm mt-2" style={{ color: colors.error }}>
              {validationErrors.timeSlot}
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );

  // Step 3: Render Contact Details form
  const renderContactDetails = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4 md:space-y-6"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: colors.background }}>
        Contact Details
      </h2>
      <div className="space-y-3 md:space-y-4">
        {[
          { name: 'name', label: 'Full Name', icon: FiUser, type: 'text', placeholder: 'Your full name' },
          { name: 'email', label: 'Email', icon: FiMail, type: 'email', placeholder: 'Your email address' },
          { name: 'phone', label: 'Phone', icon: FiPhone, type: 'tel', placeholder: 'Your phone number' }
        ].map(field => (
          <div key={field.name}>
            <label className="block mb-1 md:mb-2 text-sm md:text-base" style={{ color: colors.background }}>
              {field.label}
            </label>
            <div className="relative">
              <field.icon 
                className="absolute top-1/2 transform -translate-y-1/2 left-3 text-lg md:text-xl" 
                style={{ color: colors.tertiary }} 
              />
              <input
                type={field.type}
                name={field.name}
                value={bookingData[field.name]}
                onChange={handleInputChange}
                className={`w-full p-2 md:p-3 pl-10 md:pl-12 rounded-lg border ${
                  validationErrors[field.name] ? 'border-2 border-error' : 'border-2 border-accent'
                }`}
                style={{ backgroundColor: colors.background }}
                placeholder={field.placeholder}
              />
            </div>
            {validationErrors[field.name] && (
              <p className="text-xs md:text-sm mt-1 md:mt-2" style={{ color: colors.error }}>
                {validationErrors[field.name]}
              </p>
            )}
          </div>
        ))}
        <div>
          <label className="block mb-1 md:mb-2 text-sm md:text-base" style={{ color: colors.background }}>
            Service Address
          </label>
          <div className="relative">
            <FiMapPin 
              className="absolute left-3 top-3 text-lg md:text-xl" 
              style={{ color: colors.tertiary }} 
            />
            <textarea
              name="address"
              value={bookingData.address}
              onChange={handleInputChange}
              className={`w-full p-2 md:p-3 pl-10 md:pl-12 rounded-lg border ${
                validationErrors.address ? 'border-2 border-error' : 'border-2 border-accent'
              }`}
              style={{ backgroundColor: colors.background }}
              placeholder="Detailed service address"
              rows={3}
            />
          </div>
          {validationErrors.address && (
            <p className="text-xs md:text-sm mt-1 md:mt-2" style={{ color: colors.error }}>
              {validationErrors.address}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-1 md:mb-2 text-sm md:text-base" style={{ color: colors.background }}>
            Additional Notes (Optional)
          </label>
          <textarea
            name="notes"
            value={bookingData.notes}
            onChange={handleInputChange}
            className="w-full p-2 md:p-3 rounded-lg border border-accent"
            style={{ backgroundColor: colors.background }}
            placeholder="Any special instructions or requirements"
            rows={3}
          />
        </div>
      </div>
    </motion.div>
  );

  // Step 4: Render Booking Summary for confirmation
  const renderBookingSummary = () => {
    const selectedPlan = bookingData.serviceType === 'gardening'
      ? gardeningPlans.find(plan => plan.id === bookingData.servicePlan)
      : setupService;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-4"
      >
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6" style={{ color: colors.background }}>
          Review & Confirm
        </h2>
        <div className="space-y-4 md:space-y-6">
          {/* Service Details */}
          <div className="p-4 md:p-6 rounded-xl border-2 border-accent shadow-md" style={{ backgroundColor: colors.highlight }}>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4" style={{ color: '#1b4d3e' }}>
              Service Details
            </h3>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div className="flex justify-between">
                <span style={{ color: colors.deep }}>Service Type</span>
                <span style={{ color: colors.primary }}>
                  {bookingData.serviceType === 'gardening' ? 'Gardening Service' : 'Garden Setup'}
                </span>
              </div>
              {bookingData.serviceType === 'gardening' && (
                <div className="flex justify-between">
                  <span style={{ color: colors.deep }}>Plan</span>
                  <span style={{ color: colors.primary }}>{selectedPlan.name}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span style={{ color: colors.deep }}>Date</span>
                <span style={{ color: colors.primary }}>
                  {format(new Date(bookingData.date), 'MMMM d, yyyy')}
                </span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: colors.deep }}>Time</span>
                <span style={{ color: colors.primary }}>{bookingData.timeSlot}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-opacity-20" style={{ borderColor: colors.deep }}>
                <span style={{ color: colors.deep }}>Total Price</span>
                <span style={{ color: colors.primary }} className="flex items-center">
                  <BsCurrencyRupee />{selectedPlan.price || selectedPlan.basePrice}
                </span>
              </div>
            </div>
          </div>
          {/* Contact Details */}
          <div className="p-4 md:p-6 rounded-xl border-2 border-accent shadow-md" style={{ backgroundColor: colors.highlight }}>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4" style={{ color: '#1b4d3e' }}>
              Contact Details
            </h3>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div>
                <span className="block font-medium" style={{ color: colors.deep }}>Name</span>
                <span style={{ color: colors.primary }}>{bookingData.name}</span>
              </div>
              <div>
                <span className="block font-medium" style={{ color: colors.deep }}>Email</span>
                <span style={{ color: colors.primary }} className="break-all">{bookingData.email}</span>
              </div>
              <div>
                <span className="block font-medium" style={{ color: colors.deep }}>Phone</span>
                <span style={{ color: colors.primary }}>{bookingData.phone}</span>
              </div>
              <div>
                <span className="block font-medium" style={{ color: colors.deep }}>Address</span>
                <span style={{ color: colors.primary }}>{bookingData.address}</span>
              </div>
              {bookingData.notes && (
                <div>
                  <span className="block font-medium" style={{ color: colors.deep }}>Additional Notes</span>
                  <span style={{ color: colors.primary }}>{bookingData.notes}</span>
                </div>
              )}
            </div>
          </div>
          {/* Terms and Conditions */}
          <div className="p-4 md:p-6 rounded-xl border-2 border-accent shadow-md" style={{ backgroundColor: colors.highlight }}>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4" style={{ color: '#1b4d3e' }}>
              Terms & Conditions
            </h3>
            <div className="space-y-1 md:space-y-2 text-xs md:text-sm" style={{ color: colors.deep }}>
              <p>• Booking confirmation will be sent to your email</p>
              <p>• 24-hour cancellation policy applies</p>
              <p>• Weather-dependent services may be rescheduled</p>
              <p>• Payment will be processed after service confirmation</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return renderServiceSelection();
      case 2:
        return renderDateTimeSelection();
      case 3:
        return renderContactDetails();
      case 4:
        return renderBookingSummary();
      default:
        return null;
    }
  };

  // Responsive step labels for mobile
  const getStepLabel = (index) => {
    const labels = ['Service', 'Time', 'Details', 'Confirm'];
    return labels[index];
  };

  return (
    <div className=" min-h-screen flex" style={{ backgroundColor: colors.background }}>
      {/* Main Service Content */}
      <div className="flex-1 py-6 md:py-12">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
          {/* Progress Steps - Responsive design */}
          <div className="flex justify-between items-center mb-6 md:mb-12">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all"
                    style={{ 
                      backgroundColor: currentStep > index + 1 ? '#A8C69F' : 
                                   currentStep === index + 1 ? colors.secondary :
                                   colors.accent,
                      color: currentStep >= index + 1 ? colors.deep : colors.primary
                    }}
                  >
                    {index === 0 && <FiUser size={16} className="md:text-lg" />}
                    {index === 1 && <FiClock size={16} className="md:text-lg" />}
                    {index === 2 && <FiMail size={16} className="md:text-lg" />}
                    {index === 3 && <FiCheck size={16} className="md:text-lg" />}
                  </div>
                  <span className="text-xs md:text-sm mt-1 hidden sm:block" style={{ color: colors.deep }}>
                    {getStepLabel(index)}
                  </span>
                </div>
                {index < 3 && (
                  <div 
                  className="w-12 md:w-24 h-1 mx-1 md:mx-2 transition-all flex-1"
                  style={{ 
                    backgroundColor: currentStep > index + 1 ? colors.tertiary : colors.accent
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="p-4 md:p-8 rounded-xl shadow-lg border border-background" style={{ backgroundColor: colors.primary }}>
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4 md:mt-8">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all text-sm md:text-base cursor-pointer"
              style={{ backgroundColor: colors.background, color: colors.deep }}
            >
              Back
            </button>
          )}
          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 md:px-6 md:py-3 rounded-lg ml-auto transition-all text-sm md:text-base cursor-pointer"
              style={{ backgroundColor: colors.tertiary, color: colors.background }}
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 md:px-6 md:py-3 rounded-lg ml-auto transition-all text-sm md:text-base cursor-pointer"
              style={{ backgroundColor: colors.tertiary, color: colors.background }}
            >
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);
};

export default ServiceBooking;