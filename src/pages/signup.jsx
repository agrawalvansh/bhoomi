import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff, FiCheckCircle, FiLock, FiUser, FiMail } from 'react-icons/fi';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [success, setSuccess] = useState(false);

  // Brand color palette
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


  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      console.log('Signup successful', { firstName, lastName, email, password, confirmPassword });
    } catch (err) {
      console.log('Error during signup', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl"
        style={{
          border: `2px solid ${colors.accent}30`,
          boxShadow: `0 10px 30px ${colors.accent}20`
        }}
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold" style={{ color: colors.deep }}>
            Bhoomi
          </h1>
          <p className="text-lg font-medium" style={{ color: colors.primary }}>
            {success
              ? 'Welcome to the Bhoomi community!'
              : 'Start your gardening journey'}
          </p>
        </div>

        {success ? (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-center p-6 rounded-lg"
            style={{ backgroundColor: `${colors.accent}20` }}
          >
            <FiCheckCircle
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: colors.tertiary }}
            />
            <p className="text-lg" style={{ color: colors.primary }}>
              Check your email to verify your account
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* First Name Input */}
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="flex items-center text-sm font-medium"
                  style={{ color: colors.primary }}
                >
                  <FiUser style={{ color: colors.tertiary }} />
                  <span className="ml-2">First Name</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    autoComplete="given-name"
                    maxLength={50}
                    className="w-full px-4 py-3 rounded-lg transition-all focus:ring-2"
                    style={{
                      border: `2px solid ${colors.accent}`,
                      backgroundColor: colors.background,
                      color: colors.primary,
                      outline: 'none',
                      boxShadow: 'none',
                      caretColor: colors.tertiary
                    }}
                  />
                </div>
              </div>

              {/* Last Name Input */}
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="flex items-center text-sm font-medium"
                  style={{ color: colors.primary }}
                >
                  <FiUser style={{ color: colors.tertiary }} />
                  <span className="ml-2">Last Name</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    autoComplete="family-name"
                    maxLength={50}
                    className="w-full px-4 py-3 rounded-lg transition-all focus:ring-2"
                    style={{
                      border: `2px solid ${colors.accent}`,
                      backgroundColor: colors.background,
                      color: colors.primary,
                      outline: 'none',
                      boxShadow: 'none',
                      caretColor: colors.tertiary
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center text-sm font-medium"
                style={{ color: colors.primary }}
              >
                <FiMail style={{ color: colors.tertiary }} />
                <span className="ml-2">Email Address</span>
              </label>
              <div className="relative flex items-center">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@example.com"
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-lg transition-all focus:ring-2"
                  style={{
                    border: `2px solid ${colors.accent}`,
                    backgroundColor: colors.background,
                    color: colors.primary,
                    outline: 'none',
                    boxShadow: 'none',
                    caretColor: colors.tertiary
                  }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="flex items-center text-sm font-medium"
                style={{ color: colors.primary }}
              >
                <FiLock style={{ color: colors.tertiary }} />
                <span className="ml-2">Password</span>
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="w-full px-4 py-3 rounded-lg transition-all focus:ring-2"
                  style={{
                    border: `2px solid ${colors.accent}`,
                    backgroundColor: colors.background,
                    color: colors.primary,
                    outline: 'none',
                    boxShadow: 'none',
                    caretColor: colors.tertiary,
                    paddingRight: '40px'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 p-1 z-10"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  style={{ color: colors.primary }}
                >
                  {showPassword ? (
                    <FiEyeOff className="w-5 h-5" />
                  ) : (
                    <FiEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="flex items-center text-sm font-medium"
                style={{ color: colors.primary }}
              >
                <FiLock style={{ color: colors.tertiary }} />
                <span className="ml-2">Confirm Password</span>
              </label>
              <div className="relative flex items-center">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="w-full px-4 py-3 rounded-lg transition-all focus:ring-2"
                  style={{
                    border: `2px solid ${colors.accent}`,
                    backgroundColor: colors.background,
                    color: colors.primary,
                    outline: 'none',
                    boxShadow: 'none',
                    caretColor: colors.tertiary,
                    paddingRight: '40px'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 p-1 z-10"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  style={{ color: colors.primary }}
                >
                  {showConfirmPassword ? (
                    <FiEyeOff className="w-5 h-5" />
                  ) : (
                    <FiEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="w-4 h-4 mt-1 rounded"
                style={{
                  accentColor: colors.tertiary,
                  borderColor: colors.accent
                }}
                required
              />
              <div>
                <label
                  htmlFor="terms"
                  className="text-sm"
                  style={{ color: colors.primary }}
                >
                  I agree to the{' '}
                  <a
                    href="/terms"
                    className="font-semibold hover:underline"
                    style={{ color: colors.deep }}
                  >
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                    href="/privacy"
                    className="font-semibold hover:underline"
                    style={{ color: colors.deep }}
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
              style={{
                backgroundColor: isLoading
                  ? `${colors.tertiary}70`
                  : colors.tertiary,
                color: colors.background,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin">
                    <FiCheckCircle className="w-5 h-5" />
                  </div>
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default SignupPage;