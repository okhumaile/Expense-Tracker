import React from 'react';

function OnboardingSuccessPage({ onNavigate }) {
  const handleLetsGo = () => {
    console.log('Onboarding completed, navigating to dashboard');
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden flex items-center justify-center">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="#e9d5ff" opacity="0.6"/>
        </svg>
      </div>
      <div className="absolute top-40 right-32">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="#c4b5fd" opacity="0.6"/>
        </svg>
      </div>
      <div className="absolute bottom-32 left-40">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
          <path d="M17.5 0L21 14L35 17.5L21 21L17.5 35L14 21L0 17.5L14 14L17.5 0Z" fill="#ddd6fe" opacity="0.6"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-2xl">
        {/* Celebration emoji/icon */}
        <div className="mb-8 flex justify-center">
          <div className="text-8xl">🎉</div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          You Did It
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-4">
          Your account's ready, now let's keep an eye on those spending habits.
        </p>
        <p className="text-gray-600 text-lg mb-12">
          Track where your money goes and make better choices every week.
        </p>

        {/* Let's go button */}
        <button
          onClick={handleLetsGo}
          className="w-full max-w-xl mx-auto bg-purple-900 hover:bg-purple-800 text-white font-medium py-4 px-8 rounded-full transition-colors duration-200 text-base"
        >
          Let's go
        </button>
      </div>
    </div>
  );
}

export default OnboardingSuccessPage;