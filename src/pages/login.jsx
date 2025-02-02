import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Brand color palette
  const colors = {
    primary: '#2D3B2D',     // Rich Earth
    secondary: '#D4B982',   // Forest Gold
    tertiary: '#4A6741',    // Living Green
    background: '#F9F6F0',  // Cream Canvas
    accent: '#A8C69F',      // Sage Mist
    deep: '#1B4D3E',        // Deep Moss
    highlight: '#F3E5AB',   // Golden Dawn
    warm: '#E6BAA3'         // Terra Rose
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login attempted', { email, password });
    } catch {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log('Google Login initiated');
  };

  // Google icon component
  const GoogleIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      className="mr-2"
    >
      <path 
        fill="#4285F4" 
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.45h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"
      />
      <path 
        fill="#34A853" 
        d="M12 23c2.97 0 5.46-1 7.28-2.69l-3.57-2.77c-.99.69-2.26 1.1-3.71 1.1-2.87 0-5.3-1.94-6.16-4.54H2.18v2.54C3.99 20.53 7.7 23 12 23z"
      />
      <path 
        fill="#FBBC05" 
        d="M5.84 14.1c-.22-.69-.35-1.43-.35-2.1s.13-1.41.35-2.1V7.36H2.18C1.43 8.75 1 10.32 1 12s.43 3.25 1.18 4.64l3.66-2.54z"
      />
      <path 
        fill="#EA4335" 
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.36l3.66 2.54c.86-2.6 3.29-4.54 6.16-4.54z"
      />
    </svg>
  );

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ 
        backgroundColor: colors.background, 
        fontFamily: "'Nunito Sans', sans-serif" 
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg"
        style={{ 
          border: `2px solid ${colors.accent}30`,
          boxShadow: `0 10px 30px ${colors.accent}20`
        }}
      >
        <div className="text-center space-y-2">
          <h1 
            className="text-4xl font-bold"
            style={{ 
              fontFamily: "'Gilda Display', serif",
              color: colors.deep 
            }}
          >
            Bhoomi
          </h1>
          <p 
            className="text-lg font-medium"
            style={{ color: colors.primary }}
          >
            Welcome back to your urban garden
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 text-sm rounded-lg"
            style={{ 
              backgroundColor: `${colors.warm}20`,
              border: `1px solid ${colors.warm}`,
              color: colors.primary
            }}
          >
            ⚠️ {error}
          </motion.div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-1">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium"
              style={{ color: colors.primary }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-lg transition-all"
              style={{
                border: `2px solid ${colors.accent}`,
                backgroundColor: colors.background,
                color: colors.primary,
                outline: 'none'
              }}
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium"
                style={{ color: colors.primary }}
              >
                Password
              </label>
              <a 
                href="/forgot-password" 
                className="text-sm hover:underline"
                style={{ color: colors.deep }}
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg transition-all"
                style={{
                  border: `2px solid ${colors.accent}`,
                  backgroundColor: colors.background,
                  color: colors.primary,
                  outline: 'none'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: colors.primary }}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? '👁️' : '👁️🗨️'}
              </button>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
            style={{ 
              backgroundColor: isLoading ? `${colors.tertiary}90` : colors.tertiary,
              color: colors.background,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white rounded-full animate-spin" />
                Authenticating...
              </>
            ) : (
              'Login'
            )}
          </motion.button>

          <div className="relative">
            <div 
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div 
                className="w-full border-t"
                style={{ borderColor: colors.accent }}
              />
            </div>
            <div className="relative flex justify-center">
              <span 
                className="px-4 text-sm bg-white"
                style={{ color: colors.primary }}
              >
                Continue with
              </span>
            </div>
          </div>

          <motion.button
            onClick={handleGoogleLogin}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="w-full py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
            style={{
              border: `2px solid ${colors.accent}`,
              backgroundColor: colors.background,
              color: colors.primary
            }}
          >
            <GoogleIcon />
            Google
          </motion.button>

          <p 
            className="text-center text-sm"
            style={{ color: colors.primary }}
          >
            New to Bhoomi?{' '}
            <a 
              href="/signup" 
              className="font-semibold hover:underline"
              style={{ color: colors.deep }}
            >
              Create account
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;