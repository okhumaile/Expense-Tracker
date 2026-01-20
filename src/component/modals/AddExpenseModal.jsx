import React, { useState } from 'react';

export default function AddExpenseModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    amount: '10,000',
    paymentMethod: 'Cash',
    description: 'Subscribed for internet connection',
    date: '12/1/2025',
    category: 'Subscription'
  });

  const categories = [
    { id: 'shopping', name: 'Shopping', icon: '🛍️', color: 'purple' },
    { id: 'subscription', name: 'Subscription', icon: '📋', color: 'yellow' },
    { id: 'housing', name: 'Housing', icon: '🏠', color: 'purple' },
    { id: 'food', name: 'Food', icon: '🍽️', color: 'green' },
    { id: 'transportation', name: 'Transportation', icon: '🚗', color: 'red' }
  ];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    console.log('Saving expense:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Left Side - Blurred Background */}
      <div 
        className="flex-1 backdrop-blur-sm bg-gray-900/20"
        onClick={onClose}
      ></div>

      {/* Right Side - Modal Content */}
      <div className="w-[500px] bg-white shadow-2xl flex flex-col max-h-screen">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 8l8-4 8 4M4 8l8 4 8-4M4 8v8l8 4 8-4V8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Add Manually</h2>
              <p className="text-sm text-gray-500">Enter expense details yourself.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M15 5L5 15M5 5l10 10" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Form Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
          {/* Amount */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
              AMOUNT
            </label>
            <input
              type="text"
              value={`₦ ${formData.amount}`}
              onChange={(e) => handleChange('amount', e.target.value.replace('₦ ', ''))}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
              PAYMENT METHOD
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <select
                value={formData.paymentMethod}
                onChange={(e) => handleChange('paymentMethod', e.target.value)}
                className="w-full pl-12 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none text-gray-900"
              >
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Mobile Money">Mobile Money</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path d="M6 8l4 4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
              DESCRIPTION
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              placeholder="Enter description"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
              DATE
            </label>
            <input
              type="text"
              value={formData.date}
              onChange={(e) => handleChange('date', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
              placeholder="MM/DD/YYYY"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
              CATEGORY
            </label>
            <div className="space-y-3">
              {/* First Row */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleChange('category', 'Shopping')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                    formData.category === 'Shopping'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  {formData.category === 'Shopping' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                        <path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Shopping' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Shopping
                  </span>
                </button>

                <button
                  onClick={() => handleChange('category', 'Subscription')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                    formData.category === 'Subscription'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  {formData.category === 'Subscription' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                        <path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Subscription' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Subscription
                  </span>
                </button>

                <button
                  onClick={() => handleChange('category', 'Housing')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                    formData.category === 'Housing'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  {formData.category === 'Housing' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                        <path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Housing' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Housing
                  </span>
                </button>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleChange('category', 'Food')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                    formData.category === 'Food'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  {formData.category === 'Food' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                        <path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Food' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Food
                  </span>
                </button>

                <button
                  onClick={() => handleChange('category', 'Transportation')}
                  className={`relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                    formData.category === 'Transportation'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  {formData.category === 'Transportation' && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                        <path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <span className={`text-xs font-medium ${
                    formData.category === 'Transportation' ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    Transportation
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="px-8 py-6 border-t border-gray-200 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="flex-1 px-8 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Go back
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-8 py-3 rounded-full bg-purple-900 hover:bg-purple-800 text-white font-medium transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}