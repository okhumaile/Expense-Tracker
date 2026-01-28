import { useState } from "react";
import { Link } from 'react-router-dom';

function SignUpForm({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign up form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Link to="/">
          <button 
            className="mb-6 sm:mb-10 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </Link>

       
        <div className="mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Create your account
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm">
            Create your account and begin tracking your expenses with ease and accuracy.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="w-full">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Fullname"
              className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-300 transition-all placeholder-gray-400 text-sm"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a Password"
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

          {/* Confirm Password */}
          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter Password"
              className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-300 transition-all placeholder-gray-400 text-sm pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? (
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
          <Link to='/onboarding' className="block">
            <button
              type="submit"
              className="w-full bg-gray-100 text-gray-400 font-medium py-3 sm:py-4 rounded-full mt-6 sm:mt-8 text-sm hover:bg-gray-200 transition-colors"
            >
              Sign up
            </button>
          </Link>
        </form>

   
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-purple-900 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;