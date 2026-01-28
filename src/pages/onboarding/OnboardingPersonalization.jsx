import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlobTopLeft from '../../component/BlobTopLeft';
import BlobBottomRight from '../../component/BlobBottomRight';

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
    <div className="min-h-screen flex bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
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
          opacity: 1,
          
        }}
      />
      

      <BlobBottomRight
       className="absolute pointer-events-none"
        style={{
          bottom: '-10px',
          right: '-10px',
          width: '650px',
          height: 'auto',
          zIndex: 0,
        }}
      />
      </div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 py-12">
        <div className="w-full max-w-2xl">
          {/* Back button */}
        <Link to='/signup'> 
          <button onClick={handleBack} className="mb-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          </Link> 
          

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
     
      <div className="text-left mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Let's personalize your experience
        </h1>
        <p className="text-gray-500 text-sm">
          Tell us what you want to achieve so we can tailor your dashboard to your goals
        </p>
      </div>

      
        
       <div className="relative bg-white/50 rounded-3xl mb-12">
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
      {selectedTracking === 'notes' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Notes app
      {selectedTracking !== 'notes' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedTracking('another')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedTracking === 'another'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedTracking === 'another' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Another tracking app
      {selectedTracking !== 'another' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedTracking('none')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedTracking === 'none'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedTracking === 'none' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      I don't track yet
      {selectedTracking !== 'none' && <span className="ml-2 text-gray-400">+</span>}
    </button>
  </div>
</div>


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
      {selectedInsights === 'monthly' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Just monthly
      {selectedInsights !== 'monthly' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedInsights('daily')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedInsights === 'daily'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedInsights === 'daily' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Every day
      {selectedInsights !== 'daily' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedInsights('weekly')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedInsights === 'weekly'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedInsights === 'weekly' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Every week
      {selectedInsights !== 'weekly' && <span className="ml-2 text-gray-400">+</span>}
    </button>
  </div>
</div>

    
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
      <div className="text-left mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Let's personalize your experience
        </h1>
        <p className="text-gray-500 text-sm">
          Knowing your income cycle helps us show you how your spending aligns with payday
        </p>
      </div>

      
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
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedFrequency === 'weekly' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Weekly
      {selectedFrequency !== 'weekly' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedFrequency('biweekly')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedFrequency === 'biweekly'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedFrequency === 'biweekly' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Biweekly
      {selectedFrequency !== 'biweekly' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedFrequency('monthly')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedFrequency === 'monthly'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedFrequency === 'monthly' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Monthly
      {selectedFrequency !== 'monthly' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedFrequency('irregular')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedFrequency === 'irregular'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedFrequency === 'irregular' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Irregular
      {selectedFrequency !== 'irregular' && <span className="ml-2 text-gray-400">+</span>}
    </button>
  </div>
</div>


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
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedIncome === 'under100k' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Less than ₦ 100,000
      {selectedIncome !== 'under100k' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedIncome('100k-300k')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedIncome === '100k-300k'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedIncome === '100k-300k' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      ₦ 100,000 - ₦ 300,000
      {selectedIncome !== '100k-300k' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedIncome('300k-600k')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedIncome === '300k-600k'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedIncome === '300k-600k' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      ₦ 300,000 - ₦ 600,000
      {selectedIncome !== '300k-600k' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedIncome('600k-1m')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedIncome === '600k-1m'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedIncome === '600k-1m' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      ₦ 600,000 - ₦ 1,000,000
      {selectedIncome !== '600k-1m' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedIncome('above1m')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedIncome === 'above1m'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedIncome === 'above1m' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Above ₦ 1,000,000
      {selectedIncome !== 'above1m' && <span className="ml-2 text-gray-400">+</span>}
    </button>
    <button
      onClick={() => setSelectedIncome('prefer-not')}
      className={`px-6 py-3 rounded-full text-sm transition-all ${
        selectedIncome === 'prefer-not'
          ? 'bg-purple-900 text-white'
          : 'bg-white border border-gray-200 text-gray-400 hover:border-gray-300'
      }`}
    >
      {selectedIncome === 'prefer-not' && (
        <svg className="inline-block w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )}
      Prefer not to say
      {selectedIncome !== 'prefer-not' && <span className="ml-2 text-gray-400">+</span>}
    </button>
  </div>
</div>
    
        
        <div className="relative bg-white/50 rounded-3xl p-6">
          <h2 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
            WHAT DO YOU SPEND ON MOST?
          </h2>
          <div className="grid grid-cols-2 gap-4">
         
            <button
              onClick={() => handleSpendingToggle('shopping')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('shopping')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#3030CF" fill-opacity="0.07"/>
<path d="M36.4463 20.5101H35.9797L32.0363 16.5668C31.7213 16.2518 31.208 16.2518 30.8813 16.5668C30.5663 16.8818 30.5663 17.3951 30.8813 17.7218L33.6697 20.5101H22.3297L25.118 17.7218C25.433 17.4068 25.433 16.8935 25.118 16.5668C24.803 16.2518 24.2897 16.2518 23.963 16.5668L20.0313 20.5101H19.5647C18.5147 20.5101 16.333 20.5101 16.333 23.4968C16.333 24.6285 16.5663 25.3751 17.0563 25.8651C17.3363 26.1568 17.6747 26.3085 18.0363 26.3901C18.3747 26.4718 18.7363 26.4835 19.0863 26.4835H36.913C37.2747 26.4835 37.613 26.4601 37.9397 26.3901C38.9197 26.1568 39.6663 25.4568 39.6663 23.4968C39.6663 20.5101 37.4847 20.5101 36.4463 20.5101Z" fill="#3030CF"/>
<path d="M36.2248 28H19.6814C18.9581 28 18.4098 28.6417 18.5264 29.3533L19.5064 35.35C19.8331 37.3567 20.7081 39.6667 24.5931 39.6667H31.1381C35.0698 39.6667 35.7698 37.695 36.1898 35.49L37.3681 29.3883C37.5081 28.665 36.9598 28 36.2248 28ZM26.3781 35.525C26.3781 35.98 26.0164 36.3417 25.5731 36.3417C25.1181 36.3417 24.7564 35.98 24.7564 35.525V31.675C24.7564 31.2317 25.1181 30.8583 25.5731 30.8583C26.0164 30.8583 26.3781 31.2317 26.3781 31.675V35.525ZM31.3714 35.525C31.3714 35.98 31.0098 36.3417 30.5548 36.3417C30.1114 36.3417 29.7381 35.98 29.7381 35.525V31.675C29.7381 31.2317 30.1114 30.8583 30.5548 30.8583C31.0098 30.8583 31.3714 31.2317 31.3714 31.675V35.525Z" fill="#3030CF"/>
</svg>

              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Shopping & Miscellaneous</span>
              {selectedSpending.includes('shopping') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91699 12.4585C6.91699 12.4585 7.79199 12.4585 8.95866 14.5002C8.95866 14.5002 12.2013 9.15294 15.0837 8.0835" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
              )}
            </button>

           
            <button
              onClick={() => handleSpendingToggle('subscription')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('subscription')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-3">
               <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#FFD951" fill-opacity="0.08"/>
<path d="M32.4097 16.3335H23.5897C19.1797 16.3335 18.083 17.5118 18.083 22.2135V35.3502C18.083 38.4535 19.7863 39.1885 21.8513 36.9718L21.863 36.9602C22.8197 35.9452 24.278 36.0268 25.1063 37.1352L26.2847 38.7102C27.2297 39.9585 28.758 39.9585 29.703 38.7102L30.8813 37.1352C31.7213 36.0152 33.1797 35.9335 34.1363 36.9602C36.213 39.1768 37.9047 38.4418 37.9047 35.3385V22.2135C37.9163 17.5118 36.8197 16.3335 32.4097 16.3335ZM31.4997 27.7085H24.4997C24.0213 27.7085 23.6247 27.3118 23.6247 26.8335C23.6247 26.3552 24.0213 25.9585 24.4997 25.9585H31.4997C31.978 25.9585 32.3747 26.3552 32.3747 26.8335C32.3747 27.3118 31.978 27.7085 31.4997 27.7085ZM32.6663 23.0418H23.333C22.8547 23.0418 22.458 22.6452 22.458 22.1668C22.458 21.6885 22.8547 21.2918 23.333 21.2918H32.6663C33.1447 21.2918 33.5413 21.6885 33.5413 22.1668C33.5413 22.6452 33.1447 23.0418 32.6663 23.0418Z" fill="#ECBD13"/>
</svg>

              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Subscription & Utilities</span>
              {selectedSpending.includes('subscription') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91699 12.4585C6.91699 12.4585 7.79199 12.4585 8.95866 14.5002C8.95866 14.5002 12.2013 9.15294 15.0837 8.0835" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
              )}
            </button>

          
            <button
              onClick={() => handleSpendingToggle('housing')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('housing')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
               <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#8B5CF6" fill-opacity="0.08"/>
<path d="M25.667 32.0835C25.1887 32.0835 24.792 32.4802 24.792 32.9585V34.7085C24.792 35.1868 25.1887 35.5835 25.667 35.5835C26.1453 35.5835 26.542 35.1868 26.542 34.7085V32.9585C26.542 32.4802 26.1453 32.0835 25.667 32.0835Z" fill="#6D2FF9"/>
<path d="M39.6663 38.7917H38.4997V25.6433C38.4997 24.92 38.173 24.2433 37.6013 23.8L29.4347 17.4533C28.5947 16.7883 27.4047 16.7883 26.5647 17.4533L18.398 23.8C17.8263 24.2433 17.4997 24.92 17.4997 25.6317L17.4413 38.7917H16.333C15.8547 38.7917 15.458 39.1767 15.458 39.6667C15.458 40.145 15.8547 40.5417 16.333 40.5417H39.6663C40.1447 40.5417 40.5413 40.145 40.5413 39.6667C40.5413 39.1767 40.1447 38.7917 39.6663 38.7917ZM26.2497 21.875H29.7497C30.228 21.875 30.6247 22.2717 30.6247 22.75C30.6247 23.2283 30.228 23.625 29.7497 23.625H26.2497C25.7713 23.625 25.3747 23.2283 25.3747 22.75C25.3747 22.2717 25.7713 21.875 26.2497 21.875ZM33.833 38.7917H22.1663V28.5833C22.1663 27.615 22.948 26.8333 23.9163 26.8333H32.083C33.0513 26.8333 33.833 27.615 33.833 28.5833V38.7917Z" fill="#6D2FF9"/>
</svg>

              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Housing</span>
              {selectedSpending.includes('housing') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91699 12.4585C6.91699 12.4585 7.79199 12.4585 8.95866 14.5002C8.95866 14.5002 12.2013 9.15294 15.0837 8.0835" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
              )}
            </button>

           
            <button
              onClick={() => handleSpendingToggle('food')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('food')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3">
               <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#48BB78" fill-opacity="0.1"/>
<path d="M39.7353 24.0467C39.3538 22.1613 37.6841 20.7374 35.6879 20.7374C35.0868 20.7374 34.4993 20.869 33.9625 21.1159L33.7704 20.4982C33.4229 19.3811 32.6064 18.4769 31.5305 18.0175C30.4546 17.5581 29.237 17.5937 28.1898 18.1151C27.4279 18.4944 26.5189 18.4307 25.8176 17.9487L25.6497 17.8334C24.8666 17.2952 23.9148 17.0543 22.9699 17.1553C22.025 17.2563 21.1456 17.6927 20.4938 18.3842L18.5344 20.4628L15.838 19.4575V24.0467H14V27.0563C14 31.7615 16.3444 36.1256 20.2713 38.7303L20.4774 38.867H35.5225L35.7287 38.7303C39.6556 36.1256 42 31.7615 42 27.0563V24.0467H39.7353ZM38.0372 24.0467H35.3568C35.2478 23.5084 35.034 23.0077 34.7373 22.567C35.0361 22.4435 35.3586 22.378 35.6878 22.378C36.7729 22.3781 37.6974 23.0762 38.0372 24.0467ZM33.6587 24.0467H28.9599C29.2997 23.0762 30.2243 22.378 31.3093 22.378C32.3944 22.3781 33.3189 23.0762 33.6587 24.0467ZM21.6876 19.5095C22.4859 18.6627 23.7614 18.5263 24.7206 19.1855L24.8883 19.3008C26.0806 20.1202 27.6259 20.2286 28.921 19.5837C29.5371 19.2769 30.2534 19.256 30.8862 19.5263C31.4658 19.7738 31.9167 20.2411 32.1456 20.8226C31.8755 20.7668 31.5958 20.7374 31.3093 20.7374C29.4215 20.7374 27.8266 22.0112 27.3361 23.744L20.2027 21.0846L21.6876 19.5095ZM17.4786 21.8201L23.4513 24.0467H17.4786V21.8201ZM15.6406 25.6874H40.3594C40.3594 25.6874 40.3572 27.2393 40.3552 27.3307H15.6448C15.6428 27.2393 15.6406 25.6874 15.6406 25.6874ZM35.0237 37.2264H20.9763C18.1622 35.2801 16.3078 32.2943 15.7893 28.9713H40.2107C39.6922 32.2943 37.8378 35.2801 35.0237 37.2264Z" fill="#48BB78"/>
</svg>

              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Food & Drinks</span>
              {selectedSpending.includes('food') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91699 12.4585C6.91699 12.4585 7.79199 12.4585 8.95866 14.5002C8.95866 14.5002 12.2013 9.15294 15.0837 8.0835" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </div>
              )}
            </button>

          
            <button
              onClick={() => handleSpendingToggle('transportation')}
              className={`flex items-center p-4 rounded-2xl transition-all ${
                selectedSpending.includes('transportation')
                  ? 'bg-purple-50 border-2 border-purple-900'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-3">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#F56565" fill-opacity="0.08"/>
<path d="M28 35.8752C27.5217 35.8752 27.125 35.4785 27.125 35.0002V33.8335C27.125 33.3552 27.5217 32.9585 28 32.9585C28.4783 32.9585 28.875 33.3552 28.875 33.8335V35.0002C28.875 35.4785 28.4783 35.8752 28 35.8752Z" fill="#D60000"/>
<path d="M28 40.5417C27.5217 40.5417 27.125 40.145 27.125 39.6667V38.5C27.125 38.0217 27.5217 37.625 28 37.625C28.4783 37.625 28.875 38.0217 28.875 38.5V39.6667C28.875 40.145 28.4783 40.5417 28 40.5417Z" fill="#D60000"/>
<path d="M16.3334 40.5416C16.2634 40.5416 16.1934 40.5299 16.1234 40.5183C15.6568 40.4016 15.3651 39.9233 15.4818 39.4566L16.6484 34.79C16.7651 34.3233 17.2318 34.0316 17.7101 34.1483C18.1768 34.265 18.4684 34.7433 18.3518 35.21L17.1851 39.8766C17.0801 40.2733 16.7301 40.5416 16.3334 40.5416Z" fill="#D60000"/>
<path d="M39.3777 40.2532C38.9811 40.2532 38.6311 39.9849 38.5261 39.5882L37.3594 34.9216C37.2427 34.4549 37.5227 33.9766 38.0011 33.8599C38.4677 33.7432 38.9461 34.0232 39.0627 34.5016L40.2294 39.1682C40.3461 39.6349 40.0661 40.1132 39.5877 40.2299C39.5177 40.2416 39.4477 40.2532 39.3777 40.2532Z" fill="#D60000"/>
<path d="M36.3296 20.1832C36.3296 20.5332 36.038 20.8132 35.6996 20.8132H20.4513C20.1013 20.8132 19.8213 20.5215 19.8213 20.1832C19.8213 19.8332 20.113 19.5532 20.4513 19.5532H21.3146L21.6413 18.0248C21.9446 16.5315 22.5746 15.1665 25.0946 15.1665H31.033C33.553 15.1665 34.1946 16.5315 34.498 18.0132L34.8246 19.5415H35.688C36.038 19.5415 36.3296 19.8332 36.3296 20.1832Z" fill="#D60000"/>
<path d="M36.6912 24.9666C36.5629 23.5666 36.1895 22.085 33.4712 22.085H22.6679C19.9495 22.085 19.5879 23.5783 19.4479 24.9666L18.9695 30.1233C18.9112 30.765 19.1212 31.4066 19.5645 31.8966C20.0195 32.3866 20.6495 32.6666 21.3262 32.6666H22.9129C24.2895 32.6666 24.5462 31.885 24.7212 31.36L24.8962 30.8466C25.0945 30.2633 25.1412 30.1233 25.8995 30.1233H30.2395C30.9979 30.1233 31.0212 30.205 31.2429 30.8466L31.4179 31.36C31.5812 31.885 31.8495 32.6666 33.2145 32.6666H34.8012C35.4662 32.6666 36.1079 32.3866 36.5629 31.8966C37.0062 31.4183 37.2162 30.765 37.1579 30.1233L36.6912 24.9666ZM25.5262 26.74H22.9945C22.6445 26.74 22.3645 26.4483 22.3645 26.11C22.3645 25.7716 22.6562 25.48 22.9945 25.48H25.5379C25.8879 25.48 26.1679 25.7716 26.1679 26.11C26.1679 26.4483 25.8762 26.74 25.5262 26.74ZM33.1445 26.74H30.6012C30.2512 26.74 29.9712 26.4483 29.9712 26.11C29.9712 25.7716 30.2629 25.48 30.6012 25.48H33.1445C33.4945 25.48 33.7745 25.7716 33.7745 26.11C33.7745 26.4483 33.4945 26.74 33.1445 26.74Z" fill="#D60000"/>
</svg>

              </div>
              <span className="text-gray-700 text-sm font-medium flex-1 text-left">Transportation</span>
              {selectedSpending.includes('transportation') && (
                <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" fill="#13003D"/>
<path d="M6.91699 12.4585C6.91699 12.4585 7.79199 12.4585 8.95866 14.5002C8.95866 14.5002 12.2013 9.15294 15.0837 8.0835" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </div>
              )}
                  </button>
                  </div>
                  </div>
                  

                
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