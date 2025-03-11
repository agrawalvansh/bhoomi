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
  const colors = {
    primary: '#2D3B2D',
    secondary: '#D4B982',
    tertiary: '#4A6741',
    background: '#F9F6F0',
    accent: '#A8C69F',
    deep: '#1B4D3E',
    highlight: '#F3E5AB',
    warm: '#E6BAA3',
    error: '#FF6B6B',
    success: '#4CAF50'
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
    }
  };

  const handleBack = () => {
    setCurrentStep(current => current - 1);
    setValidationErrors({});
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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Please log in to book a service');
      return;
    }

    try {
      // Create booking details
      const bookingDetails = {
        id: Math.random().toString(36).substr(2, 9), // Generate random ID
        userId: user.id,
        userEmail: user.email,
        service: {
          type: bookingData.serviceType,
          name: bookingData.serviceType === 'gardening' 
            ? gardeningPlans.find(plan => plan.id === bookingData.servicePlan)?.name 
            : setupService.name,
          price: bookingData.serviceType === 'gardening'
            ? gardeningPlans.find(plan => plan.id === bookingData.servicePlan)?.price
            : setupService.basePrice
        },
        date: bookingData.date,
        time: bookingData.timeSlot,
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        address: bookingData.address,
        notes: bookingData.notes,
        status: 'pending',
        createdAt: new Date().toISOString()
      };

      // Save to localStorage instead of Firebase
      const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      localStorage.setItem('bookings', JSON.stringify([...existingBookings, bookingDetails]));

      toast.success('Booking confirmed successfully!');
      setCurrentStep(4); // Show success step
      
      // Redirect to booking history after 2 seconds
      setTimeout(() => {
        navigate(`/home/order-history`);
      }, 1000);

    } catch (error) {
      console.error('Error saving booking:', error);
      toast.error('Failed to save booking. Please try again.');
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
      <h2 className="text-2xl font-bold mb-6" style={{ color: colors.deep }}>
        Select Service Type
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {serviceTypes.map(type => (
          <motion.div
            key={type.id}
            className={`p-6 rounded-xl cursor-pointer transition-all ${
              validationErrors.serviceType ? 'border-2 border-error' : ''
            }`}
            style={{ 
              backgroundColor: bookingData.serviceType === type.id ? colors.tertiary : colors.accent,
              color: bookingData.serviceType === type.id ? colors.background : colors.deep
            }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleServiceTypeSelect(type.id)}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">{type.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{type.name}</h3>
                <p className="text-sm mt-2 opacity-90">{type.description}</p>
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
          className="mt-8"
        >
          <h3 className="text-xl font-bold mb-4" style={{ color: colors.deep }}>
            Select Service Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gardeningPlans.map(plan => (
              <motion.div
                key={plan.id}
                className={`p-6 rounded-xl cursor-pointer ${
                  validationErrors.servicePlan ? 'border-2 border-error' : ''
                }`}
                style={{ 
                  backgroundColor: bookingData.servicePlan === plan.id ? colors.tertiary : colors.accent,
                  color: bookingData.servicePlan === plan.id ? colors.background : colors.deep
                }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleServicePlanSelect(plan.id)}
              >
                <h4 className="text-lg font-bold">{plan.name}</h4>
                <div className="text-2xl font-bold my-4">
                  <span className="flex items-center">
                    <BsCurrencyRupee />{plan.price}
                  </span>
                </div>
                <p className="text-sm mb-4">{plan.description}</p>
                <ul className="text-sm space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FiCheck className="flex-shrink-0" style={{ color: colors.tertiary }} />
                      <span>{feature}</span>
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
          className="mt-8 p-6 rounded-xl"
          style={{ backgroundColor: colors.highlight }}
        >
          <h3 className="text-xl font-bold" style={{ color: colors.deep }}>
            {setupService.name}
          </h3>
          <div className="text-2xl font-bold my-4" style={{ color: colors.deep }}>
            Starting from <span className="flex items-center inline-flex">
              <BsCurrencyRupee />{setupService.basePrice}
            </span>
          </div>
          <p className="mb-4" style={{ color: colors.deep }}>
            {setupService.description}
          </p>
          <ul className="space-y-2">
            {setupService.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2" style={{ color: colors.deep }}>
                <FiCheck className="flex-shrink-0" style={{ color: colors.tertiary }} />
                <span>{feature}</span>
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
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6" style={{ color: colors.deep }}>
        Select Date & Time
      </h2>
      <div className="mb-6">
        <label className="block mb-2" style={{ color: colors.deep }}>
          Select Date
        </label>
        <div className="relative">
          <FiCalendar className="absolute left-3 top-3" style={{ color: colors.tertiary }} />
          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleInputChange}
            className={`w-full p-3 pl-10 rounded-lg ${
              validationErrors.date ? 'border-2 border-error' : ''
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <label className="block mb-2" style={{ color: colors.deep }}>
            Select Time Slot
          </label>
          <div className="grid grid-cols-3 gap-3">
            {availableSlots.map(slot => (
              <button
                key={slot}
                onClick={() => handleInputChange({ target: { name: 'timeSlot', value: slot } })}
                className={`p-3 rounded-lg text-center transition-all ${
                  validationErrors.timeSlot ? 'border-2 border-error' : ''
                }`}
                style={{ 
                  backgroundColor: bookingData.timeSlot === slot ? colors.tertiary : colors.background,
                  color: bookingData.timeSlot === slot ? colors.background : colors.deep
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
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold mb-6" style={{ color: colors.deep }}>
        Contact Details
      </h2>
      <div className="space-y-4">
        {[
          { name: 'name', label: 'Full Name', icon: FiUser, type: 'text', placeholder: 'Your full name' },
          { name: 'email', label: 'Email', icon: FiMail, type: 'email', placeholder: 'Your email address' },
          { name: 'phone', label: 'Phone', icon: FiPhone, type: 'tel', placeholder: 'Your phone number' }
        ].map(field => (
          <div key={field.name}>
            <label className="block mb-2" style={{ color: colors.deep }}>
              {field.label}
            </label>
            <div className="relative">
              <field.icon className="absolute left-3 top-3" style={{ color: colors.tertiary }} />
              <input
                type={field.type}
                name={field.name}
                value={bookingData[field.name]}
                onChange={handleInputChange}
                className={`w-full p-3 pl-10 rounded-lg ${
                  validationErrors[field.name] ? 'border-2 border-error' : ''
                }`}
                style={{ backgroundColor: colors.background }}
                placeholder={field.placeholder}
              />
            </div>
            {validationErrors[field.name] && (
              <p className="text-sm mt-2" style={{ color: colors.error }}>
                {validationErrors[field.name]}
              </p>
            )}
          </div>
        ))}
        <div>
          <label className="block mb-2" style={{ color: colors.deep }}>
            Service Address
          </label>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-3" style={{ color: colors.tertiary }} />
            <textarea
              name="address"
              value={bookingData.address}
              onChange={handleInputChange}
              className={`w-full p-3 pl-10 rounded-lg ${
                validationErrors.address ? 'border-2 border-error' : ''
              }`}
              style={{ backgroundColor: colors.background }}
              placeholder="Detailed service address"
              rows={3}
            />
          </div>
          {validationErrors.address && (
            <p className="text-sm mt-2" style={{ color: colors.error }}>
              {validationErrors.address}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-2" style={{ color: colors.deep }}>
            Additional Notes (Optional)
          </label>
          <textarea
            name="notes"
            value={bookingData.notes}
            onChange={handleInputChange}
            className="w-full p-3 rounded-lg"
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
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: colors.deep }}>
          Review & Confirm
        </h2>
        <div className="space-y-6">
          {/* Service Details */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.accent }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.deep }}>
              Service Details
            </h3>
            <div className="space-y-3">
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
              <div className="flex justify-between font-bold">
                <span style={{ color: colors.deep }}>Total Price</span>
                <span style={{ color: colors.primary }} className="flex items-center">
                  <BsCurrencyRupee />{selectedPlan.price || selectedPlan.basePrice}
                </span>
              </div>
            </div>
          </div>
          {/* Contact Details */}
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.highlight }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.deep }}>
              Contact Details
            </h3>
            <div className="space-y-3">
              <div>
                <span className="block font-medium" style={{ color: colors.deep }}>Name</span>
                <span style={{ color: colors.primary }}>{bookingData.name}</span>
              </div>
              <div>
                <span className="block font-medium" style={{ color: colors.deep }}>Email</span>
                <span style={{ color: colors.primary }}>{bookingData.email}</span>
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
          <div className="p-6 rounded-xl" style={{ backgroundColor: colors.warm }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.deep }}>
              Terms & Conditions
            </h3>
            <div className="space-y-2 text-sm" style={{ color: colors.deep }}>
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

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: colors.background }}>
      {/* Side Navigation */}
      {/* <NavBar /> */}

      {/* Main Service Content */}
      <div className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12">
            {[
              { label: 'Select Service', icon: FiUser },
              { label: 'Choose Time', icon: FiClock },
              { label: 'Your Details', icon: FiMail },
              { label: 'Confirm', icon: FiCheck }
            ].map((step, index) => (
              <div key={step.label} className="flex items-center">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{ 
                    backgroundColor: currentStep > index + 1 ? colors.tertiary : 
                                 currentStep === index + 1 ? colors.secondary :
                                 colors.accent,
                    color: currentStep >= index + 1 ? colors.deep : colors.primary
                  }}
                >
                  <step.icon size={20} />
                </div>
                {index < 3 && (
                  <div 
                    className="w-24 h-1 mx-2 transition-all"
                    style={{ 
                      backgroundColor: currentStep > index + 1 ? colors.tertiary : colors.accent
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="p-8 rounded-xl shadow-lg" style={{ backgroundColor: colors.accent }}>
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="px-6 py-3 rounded-lg transition-all"
                style={{ backgroundColor: colors.background, color: colors.deep }}
              >
                Back
              </button>
            )}
            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-lg ml-auto transition-all"
                style={{ backgroundColor: colors.tertiary, color: colors.background }}
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded-lg ml-auto transition-all"
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
