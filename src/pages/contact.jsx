import React, { useState } from 'react';
import { 
  FiMapPin, FiPhone, FiMail, FiClock, 
  FiInstagram, FiTwitter, FiFacebook,
  FiSend, FiAlertCircle
} from 'react-icons/fi';

const ContactPage = () => {
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
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      {/* Hero Section */}
      <div 
        className="w-full h-64 bg-cover bg-center relative"
        style={{ 
          backgroundColor: colors.deep,
          backgroundImage: "url('/api/placeholder/1200/400')"
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(27, 77, 62, 0.8)' }}>
          <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-8">
            {/* Store Hours */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="text-2xl" style={{ color: colors.tertiary }} />
                <h3 className="text-xl font-semibold" style={{ color: colors.deep }}>Store Hours</h3>
              </div>
              <div className="space-y-2" style={{ color: colors.primary }}>
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
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.deep }}>Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FiMapPin className="text-xl mt-1" style={{ color: colors.tertiary }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.deep }}>Visit Us</p>
                    <p style={{ color: colors.primary }}>123 Garden Street<br />Green Valley, City 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiPhone className="text-xl mt-1" style={{ color: colors.tertiary }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.deep }}>Call Us</p>
                    <p style={{ color: colors.primary }}>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiMail className="text-xl mt-1" style={{ color: colors.tertiary }} />
                  <div>
                    <p className="font-medium" style={{ color: colors.deep }}>Email Us</p>
                    <p style={{ color: colors.primary }}>contact@gardencentre.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.deep }}>Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full hover:bg-accent transition-colors">
                  <FiInstagram className="text-xl" style={{ color: colors.tertiary }} />
                </a>
                <a href="#" className="p-3 rounded-full hover:bg-accent transition-colors">
                  <FiFacebook className="text-xl" style={{ color: colors.tertiary }} />
                </a>
                <a href="#" className="p-3 rounded-full hover:bg-accent transition-colors">
                  <FiTwitter className="text-xl" style={{ color: colors.tertiary }} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6" style={{ color: colors.deep }}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2" style={{ color: colors.deep }}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary"
                      style={{ borderColor: colors.accent }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: colors.deep }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary"
                      style={{ borderColor: colors.accent }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2" style={{ color: colors.deep }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary"
                    style={{ borderColor: colors.accent }}
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2" style={{ color: colors.deep }}>Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary"
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
                  <label className="block mb-2" style={{ color: colors.deep }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 rounded-lg border-2 focus:outline-none focus:border-tertiary"
                    style={{ borderColor: colors.accent }}
                    required
                  ></textarea>
                </div>

                {submitStatus && (
                  <div 
                    className="p-4 rounded-lg flex items-center gap-2"
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
                  className="w-full py-3 rounded-lg flex items-center justify-center gap-2 text-white transition-colors"
                  style={{ 
                    backgroundColor: colors.tertiary,
                    hover: { backgroundColor: colors.deep }
                  }}
                >
                  <FiSend />
                  Send Message
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