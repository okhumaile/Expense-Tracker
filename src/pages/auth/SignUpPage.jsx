import { useState } from "react";
import OnboardingSlider from "../../component/OnboardingSlider";
import SignUpForm from "../../component/SignUpForm";

function SignUpPage({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen flex">

      <div className="hidden md:block md:w-1/2 lg:w-1/2">
        <OnboardingSlider 
          currentSlide={currentSlide} 
          setCurrentSlide={setCurrentSlide} 
        />
      </div>
      

      <div className="w-full md:w-1/2 lg:w-1/2">
        <SignUpForm onNavigate={onNavigate} />
      </div>
    </div>
  );
}

export default SignUpPage;