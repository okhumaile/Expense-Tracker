import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlobTopLeft from '../../component/BlobTopLeft';
import BlobBottomRight from '../../component/BlobBottomRight';

function SignInPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex">
     
      <div className="hidden md:block md:w-1/2 lg:w-1/2 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
        {/* Decorative blobs */}
        <BlobTopLeft 
          className="absolute"
          style={{
            top: '-10px',
            left: '-10px',
            width: '400px',
            height: 'auto',
            zIndex: 0,
          }}
        />

        <BlobBottomRight
          className="absolute pointer-events-none"
          style={{
            bottom: '-100px',
            right: '-100px',
            width: '650px',
            height: 'auto',
            opacity: 1,
            zIndex: 0
          }}
        />
      </div>

      
      <div className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Back button */}
          <Link to="/">
            <button className="mb-6 sm:mb-10 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>

        
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Login to your account
          </h1>

          <div className="mb-6 sm:mb-10">
            <p className="text-gray-900 font-medium mb-1 text-sm sm:text-base">Welcome back!!</p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Pick up where you left off and stay ahead of your goals
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email address"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-300 transition-all placeholder-gray-400 text-sm"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-300 transition-all placeholder-gray-400 text-sm pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 10C2.5 10 5 5 10 5C15 5 17.5 10 17.5 10C17.5 10 15 15 10 15C5 15 2.5 10 2.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 3L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M2.5 10C2.5 10 5 5 10 5C15 5 17.5 10 17.5 10C17.5 10 15 15 10 15C5 15 2.5 10 2.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Submit Button */}
            <Link to="/dashboard" className="block">
              <button
                type="submit"
                className="w-full bg-gray-100 text-gray-400 font-medium py-3 sm:py-4 rounded-full mt-6 sm:mt-8 text-sm hover:bg-gray-200 transition-colors"
              >
                Sign in
              </button>
            </Link>
          </form>

        
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-purple-900 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;