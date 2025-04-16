import React, { useState } from 'react';
import { 
  FiMapPin, FiPhone, FiMail, FiClock, 
  FiInstagram, FiTwitter, FiFacebook,
  FiSend, FiAlertCircle
} from 'react-icons/fi';

const ContactPage = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated form submission
    setSubmitStatus('success');
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitStatus(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: colors.background }}>
      {/* Hero Section */}
      <div 
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 bg-cover bg-center relative"
        style={{ 
          backgroundColor: colors.deep,
          backgroundImage: "url('/api/placeholder/1200/400')"
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27, 77, 62, 0.8)' }}>
          <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Contact Information - On small screens, display in a horizontal scrollable row */}
          <div className="md:col-span-1 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Store Hours */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <FiClock className="text-xl sm:text-2xl" style={{ color: colors.tertiary }} />
                <h3 className="text-lg sm:text-xl font-semibold" style={{ color: colors.deep }}>Store Hours</h3>
              </div>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base" style={{ color: colors.primary }}>
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: colors.deep }}>Get in Touch</h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiMapPin className="text-lg sm:text-xl mt-1" style={{ color: colors.tertiary }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.deep }}>Visit Us</p>
                    <p style={{ color: colors.primary }}>Bhoomi Office <br /> Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiPhone className="text-lg sm:text-xl mt-1" style={{ color: colors.tertiary }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.deep }}>Call Us</p>
                    <p style={{ color: colors.primary }}>+91 9876543210</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <FiMail className="text-lg sm:text-xl mt-1" style={{ color: colors.tertiary }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.deep }}>Email Us</p>
                    <p className="break-words" style={{ color: colors.primary }}>contact@bhoomi.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4" style={{ color: colors.deep }}>Follow Us</h3>
              <div className="flex gap-3 sm:gap-4">
                <a href="#" className="p-2 sm:p-3 rounded-full hover:bg-accent transition-colors">
                  <FiInstagram className="text-lg sm:text-xl" style={{ color: colors.tertiary }} />
                </a>
                <a href="#" className="p-2 sm:p-3 rounded-full hover:bg-accent transition-colors">
                  <FiFacebook className="text-lg sm:text-xl" style={{ color: colors.tertiary }} />
                </a>
                <a href="#" className="p-2 sm:p-3 rounded-full hover:bg-accent transition-colors">
                  <FiTwitter className="text-lg sm:text-xl" style={{ color: colors.tertiary }} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 mt-4 sm:mt-6 md:mt-0">
            <div className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: colors.deep }}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: colors.deep }}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 sm:p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary text-sm sm:text-base"
                      style={{ borderColor: colors.accent }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: colors.deep }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 sm:p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary text-sm sm:text-base"
                      style={{ borderColor: colors.accent }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: colors.deep }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary text-sm sm:text-base"
                    style={{ borderColor: colors.accent }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: colors.deep }}>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 sm:p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary text-sm sm:text-base"
                    style={{ borderColor: colors.accent }}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Garden Service Booking</option>
                    <option value="product">Product Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 sm:mb-2 text-sm sm:text-base" style={{ color: colors.deep }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-2 sm:p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary text-sm sm:text-base"
                    style={{ borderColor: colors.accent }}
                    required
                  ></textarea>
                </div>

                {submitStatus && (
                  <div 
                    className="p-3 sm:p-4 rounded-lg flex items-center gap-2 text-sm sm:text-base"
                    style={{ 
                      backgroundColor: submitStatus === 'success' ? colors.accent : colors.warm,
                      color: colors.deep 
                    }}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FiAlertCircle />
                        <span>Message sent successfully!</span>
                      </>
                    ) : (
                      <>
                        <FiAlertCircle />
                        <span>There was an error sending your message. Please try again.</span>
                      </>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base text-white transition-colors hover:bg-deep"
                  style={{ backgroundColor: colors.tertiary }}
                >
                  <FiSend />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;