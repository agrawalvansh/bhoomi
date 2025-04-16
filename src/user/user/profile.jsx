import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiEdit2, FiCamera, FiMapPin, FiPhone, FiMail, 
  FiSave, FiX, FiHeart, FiPlus, FiSun
} from 'react-icons/fi';
// Custom Alert Components moved outside main component
const Alert = ({ variant = 'default', className = '', children }) => {
  const baseClasses = 'p-4 rounded-lg mb-4 flex items-center';
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    destructive: 'bg-red-50 text-red-800 border border-red-200',
    success: 'bg-green-50 text-green-800 border border-green-200'
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

const AlertDescription = ({ children }) => (
  <div className="text-sm font-medium">
    {children}
  </div>
);

const Profile = () => {
  // Mock user data instead of Firebase
  const mockUser = {
    uid: '123456',
    email: 'user@example.com',
    displayName: 'John Doe'
  };

  const [profileData, setProfileData] = useState({
    name: '',
    email: mockUser?.email || '',
    phone: '',
    address: '',
    joinedDate: new Date().toISOString(),
    bio: '',
    interests: [],
    gardenType: 'Balcony Garden',
    experience: 'Beginner'
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newInterest, setNewInterest] = useState('');
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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

  // Form validation
  const validateForm = () => {
    const errors = [];
    if (!profileData.name.trim()) errors.push('Name is required');
    if (!profileData.email.trim()) errors.push('Email is required');
    if (profileData.email && !/\S+@\S+\.\S+/.test(profileData.email)) {
      errors.push('Invalid email format');
    }
    if (profileData.phone && !/^\+?[\d\s-]{10,}$/.test(profileData.phone)) {
      errors.push('Invalid phone number format');
    }
    return errors;
  };

  useEffect(() => {
    // Simulate loading profile data with a mock function
    const fetchUserData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data that would come from a database
        const mockProfileData = {
          name: mockUser.displayName || 'John Doe',
          email: mockUser.email,
          phone: '+1 234 567 8900',
          address: '123 Garden St, Plant City, GA',
          joinedDate: new Date().toISOString(),
          bio: 'I love growing herbs and vegetables on my apartment balcony. Currently experimenting with vertical gardening techniques.',
          interests: ['Herb Gardens', 'Succulents', 'Organic Fertilizers', 'Container Gardening'],
          gardenType: 'Balcony Garden',
          experience: 'Intermediate'
        };

        setProfileData(prevData => ({
          ...prevData,
          ...mockProfileData
        }));
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to load profile data. Please refresh and try again.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors.join(', '));
      return;
    }

    setSaving(true);
    try {
      // Simulate API call to save profile
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you'd send the data to your backend here
      console.log('Profile data to be saved:', profileData);
      
      setSuccessMessage('Profile updated successfully!');
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error saving profile:', err);
      setError('Failed to save profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field, value) => {
    setError(null);
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddInterest = () => {
    if (newInterest.trim() && !profileData.interests.includes(newInterest.trim())) {
      setProfileData(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }));
      setNewInterest('');
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen justify-center items-center" style={{ backgroundColor: colors.background }}>
        
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tertiary mx-auto mb-4" style={{ borderColor: colors.tertiary }}></div>
          <p style={{ color: colors.deep }}>Loading profile...</p>
        </div>
        
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: colors.background }}>
      
      
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Error/Success Messages */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Alert variant="destructive" className="mb-6">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              </motion.div>
            )}

            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Alert variant="success" className="mb-6">
                  <AlertDescription>{successMessage}</AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Profile Header */}
          <motion.div 
            className="mb-8 p-6 rounded-xl shadow-lg relative overflow-hidden"
            style={{ backgroundColor: colors.highlight }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <FiCamera className="w-8 h-8 text-gray-500" />
                </div>
                {isEditing && (
                  <button 
                    className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Change profile picture"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="space-y-2 flex-1">
                    {isEditing ? (
                      <div className="mb-4">
                        <label className="flex items-center gap-2 mb-1 text-sm font-medium" style={{ color: colors.tertiary }}>
                          <FiEdit2 /> Full Name
                        </label>
                        <input
                          type="text"
                          value={profileData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-tertiary focus:outline-none"
                          style={{ color: colors.deep }}
                          autoFocus
                        />
                        {!profileData.name.trim() && (
                          <p className="mt-1 text-sm text-red-500">Name is required</p>
                        )}
                      </div>
                    ) : (
                      <h2 className="text-2xl font-semibold mb-2" style={{ color: colors.deep }}>
                        {profileData.name || 'Add your name'}
                      </h2>
                    )}
                  </div>
                  
                  <div className="flex gap-2 w-full md:w-auto">
                    <AnimatePresence mode="wait">
                      {isEditing ? (
                        <>
                          <motion.button
                            key="save"
                            onClick={handleSave}
                            disabled={saving}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg w-full md:w-auto disabled:opacity-50 transition-colors"
                            style={{ 
                              backgroundColor: colors.tertiary, 
                              color: colors.background 
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {saving ? 'Saving...' : (
                              <>
                                <FiSave /> Save
                              </>
                            )}
                          </motion.button>
                          <motion.button
                            key="cancel"
                            onClick={() => {
                              setIsEditing(false);
                              setError(null);
                            }}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg w-full md:w-auto transition-colors"
                            style={{ 
                              backgroundColor: colors.warm, 
                              color: colors.background 
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiX /> Cancel
                          </motion.button>
                        </>
                      ) : (
                        <motion.button
                          key="edit"
                          onClick={() => setIsEditing(true)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg w-full md:w-auto transition-colors"
                          style={{ 
                            backgroundColor: colors.tertiary, 
                            color: colors.background 
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiEdit2 /> Edit Profile
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Garden Profile Section */}
            <div className="space-y-6">
              <motion.div 
                className="p-6 rounded-xl shadow-lg"
                style={{ backgroundColor: colors.accent }}
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold mb-4" style={{ color: colors.deep }}>
                  Garden Profile
                </h2>
                <div className="space-y-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-1 text-sm font-medium" style={{ color: colors.tertiary }}>
                      <FiHeart /> Garden Type
                    </label>
                    <select
                      value={profileData.gardenType}
                      onChange={(e) => handleChange('gardenType', e.target.value)}
                      disabled={!isEditing}
                      className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-tertiary focus:outline-none"
                      style={{ color: colors.deep }}
                    >
                      <option value="Balcony Garden">Balcony Garden</option>
                      <option value="Indoor Garden">Indoor Garden</option>
                      <option value="Backyard Garden">Backyard Garden</option>
                      <option value="Community Garden">Community Garden</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-1 text-sm font-medium" style={{ color: colors.tertiary }}>
                      <FiSun /> Experience Level
                    </label>
                    <select
                      value={profileData.experience}
                      onChange={(e) => handleChange('experience', e.target.value)}
                      disabled={!isEditing}
                      className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-tertiary focus:outline-none"
                      style={{ color: colors.deep }}
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <motion.div 
                className="p-6 rounded-xl shadow-lg"
                style={{ backgroundColor: colors.accent }}
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold mb-4" style={{ color: colors.deep }}>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-1 text-sm font-medium" style={{ color: colors.tertiary }}>
                      <FiMail /> Email Address
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      disabled={!isEditing}
                      className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-tertiary focus:outline-none"
                      style={{ color: colors.deep }}
                    />
                    {profileData.email && !/\S+@\S+\.\S+/.test(profileData.email) && (
                      <p className="mt-1 text-sm text-red-500">Invalid email format</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-1 text-sm font-medium" style={{ color: colors.tertiary }}>
                      <FiPhone /> Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      disabled={!isEditing}
                      className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-tertiary focus:outline-none"
                      style={{ color: colors.deep }}
                    />
                    {profileData.phone && !/^\+?[\d\s-]{10,}$/.test(profileData.phone) && (
                      <p className="mt-1 text-sm text-red-500">Invalid phone format</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="flex items-center gap-2 mb-1 text-sm font-medium" style={{ color: colors.tertiary }}>
                      <FiMapPin /> Address
                    </label>
                    <input
                      type="text"
                      value={profileData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      disabled={!isEditing}
                      className="w-full p-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-tertiary focus:outline-none"
                      style={{ color: colors.deep }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Full Width Sections */}
          {/* About Me Section */}
          <motion.div 
            className="mb-6 p-6 rounded-xl shadow-lg w-full"
            style={{ backgroundColor: colors.tertiary }}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.background }}>
              About Me
            </h2>
            <div className="space-y-2">
              <textarea
                value={profileData.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                disabled={!isEditing}
                className="w-full p-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-tertiary focus:outline-none"
                style={{ 
                  backgroundColor: colors.background,
                  color: colors.primary,
                  minHeight: '120px'
                }}
                maxLength={500}
                placeholder="Tell us about yourself and your gardening journey..."
              />
              <div className="text-right text-sm" style={{ color: colors.background }}>
                {500 - (profileData.bio?.length || 0)} characters remaining
              </div>
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div 
            className="p-6 rounded-xl shadow-lg w-full"
            style={{ backgroundColor: colors.background, border: `2px solid ${colors.accent}` }}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.deep }}>
              Interests
            </h2>
            <div className="flex flex-wrap gap-2">
              {profileData.interests?.map((interest, index) => (
                <motion.span
                  key={`${interest}-${index}`}
                  className="px-3 py-1 rounded-full text-sm flex items-center"
                  style={{ backgroundColor: colors.accent, color: colors.deep }}
                  whileHover={{ scale: 1.05 }}
                  layout
                >
                  {interest}
                  {isEditing && (
                    <button 
                      onClick={() => {
                        const newInterests = [...profileData.interests];
                        newInterests.splice(index, 1);
                        setProfileData(prev => ({
                          ...prev,
                          interests: newInterests
                        }));
                      }}
                      className="ml-2 hover:text-red-500 transition-colors"
                      aria-label={`Remove ${interest}`}
                    >
                      ×
                    </button>
                  )}
                </motion.span>
              ))}
              {isEditing && (
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="Add new interest..."
                    className="px-3 py-1 rounded-full text-sm focus:ring-2 focus:ring-offset-2 focus:ring-tertiary focus:outline-none"
                    style={{ 
                      backgroundColor: colors.background, 
                      border: `1px solid ${colors.accent}`, 
                      color: colors.primary 
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddInterest();
                      }
                    }}
                  />
                  <motion.button
                    onClick={handleAddInterest}
                    className="p-2 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.tertiary, color: colors.background }}
                    whileHover={{ scale: 1.1 }}
                    disabled={!newInterest.trim()}
                    aria-label="Add interest"
                  >
                    <FiPlus size={18} />
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;