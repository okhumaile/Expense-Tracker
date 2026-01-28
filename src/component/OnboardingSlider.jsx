import React, {  useEffect } from 'react';
import MoneyIllustration from '../component/MoneyIllustration';
import BudgetIllustration from '../component/BudgetIllustration';
import PiggyBankIllustration from '../component/PiggyBankIllustration';
import BlobTopLeft from './BlobTopLeft';
import BlobBottomRight from './BlobBottomRight';



function OnboardingSlider({ currentSlide, setCurrentSlide }) {
  const slides = [
    {
      title: "Gain clarity over your finances",
      description: "Track every expenses with precision and see where your money truly goes. Stay informed, stay organized, stay in control.",
      illustration: <MoneyIllustration />
    },
    {
      title: "Set your budget goals- we'll help you stick to them",
      description: "From groceries to getaways, plan your money around what truly matters. Stay in control, save more, and reach your goals faster.",
      illustration: <BudgetIllustration />
    },
    {
      title: "Build financial discipline with ease",
      description: "Set goals, monitor progress, and take actionable steps towards lasting financial stability",
      illustration: <PiggyBankIllustration />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [setCurrentSlide, slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden flex flex-col">
      {/* Decorative blob */}
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

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-12 py-12">
        {/* Illustration */}
        <div className="mb-12 transition-all duration-500">
          {slides[currentSlide].illustration}
        </div>

        {/* Text content */}
        <div className="text-center max-w-lg space-y-5 transition-all duration-500">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center gap-2 mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-12 h-1.5 bg-purple-600' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OnboardingSlider