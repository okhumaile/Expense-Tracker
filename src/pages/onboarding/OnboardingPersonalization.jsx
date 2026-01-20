import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OnboardingPersonalization({ onNavigate }) {
  const [step, setStep] = useState(1);
  
  // Step 1 state
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedTracking, setSelectedTracking] = useState('');
  const [selectedInsights, setSelectedInsights] = useState('');
  
  // Step 2 state
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [selectedIncome, setSelectedIncome] = useState('');
  const [selectedSpending, setSelectedSpending] = useState([]);

  const handleStep1Continue = () => {
    if (selectedGoal && selectedTracking && selectedInsights) {
      setStep(2);
    }
  };

  const handleStep2Continue = () => {
    if (selectedFrequency && selectedIncome && selectedSpending.length > 0) {
      console.log('All onboarding data:', {
        goal: selectedGoal,
        tracking: selectedTracking,
        insights: selectedInsights,
        frequency: selectedFrequency,
        income: selectedIncome,
        spending: selectedSpending
      });
      onNavigate('success');
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      onNavigate('signup');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-100 rounded-full opacity-50 blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-purple-100 rounded-full opacity-50 blur-3xl -translate-x-1/4 translate-y-1/4"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-12">
        <div className="w-full max-w-2xl">
          {/* Back button */}
          <Link to="/">
          <button onClick={handleBack} className="mb-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          </Link>

          {/* Render Step 1 or Step 2 */}
          {step === 1 ? (
            <Step1Content
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
              selectedTracking={selectedTracking}
              setSelectedTracking={setSelectedTracking}
              selectedInsights={selectedInsights}
              setSelectedInsights={setSelectedInsights}
              onContinue={handleStep1Continue}
            />
          ) : (
            <Step2Content
              selectedFrequency={selectedFrequency}
              setSelectedFrequency={setSelectedFrequency}
              selectedIncome={selectedIncome}
              setSelectedIncome={setSelectedIncome}
              selectedSpending={selectedSpending}
              setSelectedSpending={setSelectedSpending}
              onContinue={handleStep2Continue}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Step 1 Component
function Step1Content({
  selectedGoal,
  setSelectedGoal,
  selectedTracking,
  setSelectedTracking,
  selectedInsights,
  setSelectedInsights,
  onContinue
}) {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Let's personalize your experience
        </h1>
        <p className="text-gray-500 text-sm">
          Tell us what you want to achieve so we can tailor your dashboard to your goals
        </p>
      </div>

      {/* Money Goal Section - WITH GREEN HIGHLIGHT */}
      <div className="mb-10 relative">
        {/* Green highlight border - only shows when a goal is selected */}
        {selectedGoal && (
          <div className="absolute -inset-4 border-4 border-green-500 rounded-[40px] pointer-events-none animate-pulse"></div>
        )}
        
        <div className="relative bg-white/50 rounded-3xl p-6">
          <h2 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
            WHAT IS YOUR MONEY GOAL RIGHT NOW?
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedGoal('save')}
              className={`px-6 py-3 rounded-full text-sm transition-all ${
                selectedGoal === 'save'
                  ? 'bg-purple-900 text-white'
                  : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
              }`}
            >
              {selectedGoal === 'save' && (
                <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
              Save more money
              {selectedGoal !== 'save' && <span className="ml-2 text-gray-400">+</span>}
            </button>
            <button
              onClick={() => setSelectedGoal('habits')}
              className={`px-6 py-3 rounded-full text-sm transition-all ${
                selectedGoal === 'habits'
                  ? 'bg-purple-900 text-white'
                  : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
              }`}
            >
              {selectedGoal === 'habits' && (
                <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
              Build better habits
              {selectedGoal !== 'habits' && <span className="ml-2 text-gray-400">+</span>}
            </button>
            <button
              onClick={() => setSelectedGoal('business')}
              className={`px-6 py-3 rounded-full text-sm transition-all ${
                selectedGoal === 'business'
                  ? 'bg-purple-900 text-white'
                  : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
              }`}
            >
              {selectedGoal === 'business' && (
                <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
              Manage business expenses
              {selectedGoal !== 'business' && <span className="ml-2 text-gray-400">+</span>}
            </button>
            <button
              onClick={() => setSelectedGoal('track')}
              className={`px-6 py-3 rounded-full text-sm transition-all ${
                selectedGoal === 'track'
                  ? 'bg-purple-900 text-white'
                  : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
              }`}
            >
              {selectedGoal === 'track' && (
                <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
              Track my daily spending
              {selectedGoal !== 'track' && <span className="ml-2 text-gray-400">+</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Tracking Method Section */}
      <div className="mb-10">
        <h2 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
          HOW DO YOU TRACK YOUR EXPENSES NOW
        </h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedTracking('notes')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedTracking === 'notes'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
            }`}
          >
            Notes app
            <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedTracking('another')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedTracking === 'another'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
            }`}
          >
            Another tracking app
            <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedTracking('none')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedTracking === 'none'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
            }`}
          >
            I don't track yet
            <span className="ml-2">+</span>
          </button>
        </div>
      </div>

      {/* Insights Frequency Section */}
      <div className="mb-12">
        <h2 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
          HOW OFTEN DO YOU WANT SPENDING INSIGHTS
        </h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedInsights('monthly')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedInsights === 'monthly'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
            }`}
          >
            Just monthly
            <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedInsights('daily')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedInsights === 'daily'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
            }`}
          >
            Every day
            <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedInsights('weekly')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedInsights === 'weekly'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
            }`}
          >
            Every week
            <span className="ml-2">+</span>
          </button>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        className={`w-full py-4 rounded-full text-sm font-medium transition-all ${
          selectedGoal && selectedTracking && selectedInsights
            ? 'bg-purple-900 text-white hover:bg-purple-800'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
        disabled={!selectedGoal || !selectedTracking || !selectedInsights}
      >
        Continue
      </button>
    </>
  );
}

// Step 2 Component
function Step2Content({
  selectedFrequency,
  setSelectedFrequency,
  selectedIncome,
  setSelectedIncome,
  selectedSpending,
  setSelectedSpending,
  onContinue
}) {
  const handleSpendingToggle = (category) => {
    if (selectedSpending.includes(category)) {
      setSelectedSpending(selectedSpending.filter(item => item !== category));
    } else {
      setSelectedSpending([...selectedSpending, category]);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Let's personalize your experience
        </h1>
        <p className="text-gray-500 text-sm">
          Knowing your income cycle helps us show you how your spending aligns with payday
        </p>
      </div>

      {/* Salary Frequency Section */}
      <div className="mb-10">
        <h2 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
          HOW OFTEN DO YOU EARN YOUR SALARY?
        </h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedFrequency('weekly')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedFrequency === 'weekly'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            Weekly <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedFrequency('biweekly')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedFrequency === 'biweekly'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            Biweekly <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedFrequency('monthly')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedFrequency === 'monthly'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            Monthly <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedFrequency('irregular')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedFrequency === 'irregular'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            Irregular <span className="ml-2">+</span>
          </button>
        </div>
      </div>

      {/* Income Range Section */}
      <div className="mb-10">
        <h2 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
          HOW MUCH DO YOU EARN (ON AVERAGE)?
        </h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedIncome('under100k')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedIncome === 'under100k'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            Less than ₦ 100,000 <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedIncome('100k-300k')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedIncome === '100k-300k'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            ₦ 100,000 - ₦ 300,000 <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedIncome('300k-600k')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedIncome === '300k-600k'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            ₦ 300,000 - ₦ 600,000 <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedIncome('600k-1m')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedIncome === '600k-1m'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            ₦ 600,000 - ₦ 1,000,000 <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedIncome('above1m')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedIncome === 'above1m'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            Above ₦ 1,000,000 <span className="ml-2">+</span>
          </button>
          <button
            onClick={() => setSelectedIncome('prefer-not')}
            className={`px-6 py-3 rounded-full text-sm transition-all ${
              selectedIncome === 'prefer-not'
                ? 'bg-purple-900 text-white'
                : 'bg-white border border-gray-200 text-gray-400'
            }`}
          >
            Prefer not to say <span className="ml-2">+</span>
          </button>
        </div>
      </div>

      {/* Spending Categories Section - WITH GREEN HIGHLIGHT */}
      <div className="mb-12 relative">
        {/* Green highlight border - only shows when categories are selected */}
        {selectedSpending.length > 0 && (
          <div className="absolute -inset-4 border-4 border-green-500 rounded-[40px] pointer-events-none animate-pulse"></div>
        )}
        
        <div className="relative bg-white/50 rounded-3xl p-6">
          <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
            WHAT DO YOU SPEND ON MOST?
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Shopping */}
            <button
              onClick={() => handleSpendingToggle('shopping')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('shopping')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Shopping & Miscellaneous</span>
              {selectedSpending.includes('shopping') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                    <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>

            {/* Subscription */}
            <button
              onClick={() => handleSpendingToggle('subscription')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('subscription')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Subscription & Utilities</span>
              {selectedSpending.includes('subscription') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                    <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>

            {/* Housing */}
            <button
              onClick={() => handleSpendingToggle('housing')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('housing')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Housing</span>
              {selectedSpending.includes('housing') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                    <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>

            {/* Food */}
            <button
              onClick={() => handleSpendingToggle('food')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('food')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Food & Drinks</span>
              {selectedSpending.includes('food') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                    <path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>

            {/* Transportation */}
            <button
              onClick={() => handleSpendingToggle('transportation')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('transportation')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H15L19 9V15C19 15.5304 18.7893 16.0391 18.4142 16.4142C18.0391 16.7893 17.5304 17 17 17H16" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7.5" cy="17" r="2" stroke="#ef4444" strokeWidth="2"/>
                  <circle cx="13.5" cy="17" r="2" stroke="#ef4444" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Transportation</span>
              {selectedSpending.includes('transportation') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                  </svg>
                  </div>
              )}
                  </button>
                  </div>
                  </div>
                  </div>

                  {/* Continue Button */}
   <Link to="/success">         
  <button
    className={`w-full py-4 rounded-full text-sm font-medium transition-all ${
      selectedFrequency && selectedIncome && selectedSpending.length > 0
        ? 'bg-purple-900 text-white hover:bg-purple-800'
        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
    }`}
    disabled={!selectedFrequency || !selectedIncome || selectedSpending.length === 0}
  >
    Continue
  </button>
  </Link>      
</>
  );
}