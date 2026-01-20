import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      {/* Left side - Decorative blob area */}
      <div className="w-1/2 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-100 rounded-full opacity-50 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-purple-100 rounded-full opacity-50 blur-3xl -translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Right side - Content */}
      <div className="w-1/2 flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          {/* Back button */}
          <Link to="/">
          <button 
        
            className="mb-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          </Link>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Login to your account
          </h1>

          {/* Subtitle */}
          <div className="mb-10">
            <p className="text-gray-900 font-medium mb-1">Welcome back!!</p>
            <p className="text-gray-500 text-sm">
              Pick up where you left off and stay ahead of your goals
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email address"
              className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-300 transition-all placeholder-gray-400 text-sm"
              required
            />

            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-300 transition-all placeholder-gray-400 text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 10C2.5 10 5 5 10 5C15 5 17.5 10 17.5 10C17.5 10 15 15 10 15C5 15 2.5 10 2.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>

            {/* Submit Button */}
            <Link to="/onboarding">
            <button
              type="submit"
              className="w-full bg-gray-100 text-gray-400 font-medium py-4 rounded-full mt-8 text-sm"
            >
              Sign in
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;