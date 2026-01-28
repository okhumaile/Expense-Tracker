import React from 'react';
import { Link } from 'react-router-dom';
import PartyPopper from '../../component/PartyPopper';

function OnboardingSuccessPage({ onNavigate }) {
  const handleLetsGo = () => {
    console.log('Onboarding completed, navigating to dashboard');
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden flex items-center justify-center">
      {/* Decorative elements */}
     

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-2xl w-full">
        
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="absolute top-[200px] text-8xl">🎉</div>
        </div>
        
       <PartyPopper />
       

       
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          You Did It
        </h1>

      
        <p className="text-gray-600 text-base sm:text-lg mb-3 sm:mb-4 px-2">
          Your account's ready, now let's keep an eye on those spending habits.
        </p>
        <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 px-2">
          Track where your money goes and make better choices every week.
        </p>

        <Link to='/dashboard' className="block">
          <button
            onClick={handleLetsGo}
            className="w-full max-w-xl mx-auto bg-purple-900 hover:bg-purple-800 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-colors duration-200 text-sm sm:text-base"
          >
            Let's go
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OnboardingSuccessPage;