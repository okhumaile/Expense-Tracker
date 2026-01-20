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
    <div className="w-1/2 bg-white flex items-center justify-center">
      <div className="w-full max-w-md px-12">
        {/* Back button */}
        <Link to="/">
        <button 
          onClick={() => onNavigate('/')}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors mb-8"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Create your account
          </h1>
          <p className="text-gray-500 text-sm">
            Create your account and begin tracking your expenses with ease and accuracy.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Fullname"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 text-sm"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email address"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 text-sm"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a Password"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 text-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3L17 17M10 7C11.66 7 13 8.34 13 10C13 10.35 12.94 10.69 12.83 11M7 10C7 8.34 8.34 7 10 7M2 10C2 10 5 4 10 4C11.32 4 12.5 4.42 13.5 5M18 10C18 10 15 16 10 16C8.68 16 7.5 15.58 6.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter Password"
              className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-400 text-sm"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3L17 17M10 7C11.66 7 13 8.34 13 10C13 10.35 12.94 10.69 12.83 11M7 10C7 8.34 8.34 7 10 7M2 10C2 10 5 4 10 4C11.32 4 12.5 4.42 13.5 5M18 10C18 10 15 16 10 16C8.68 16 7.5 15.58 6.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
           <Link to="/onboarding">
          <button
            type="submit"
            className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium py-4 rounded-full transition-colors duration-200 mt-8 text-sm"
          >
            Sign up
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}



export default SignUpForm