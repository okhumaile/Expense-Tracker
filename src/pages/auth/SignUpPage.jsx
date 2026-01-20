import { useState } from "react";
import OnboardingSlider from "../../component/OnboardingSlider";
import SignUpForm from "../../component/SignUpForm";

function SignUpPage({ onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen flex">
      <OnboardingSlider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <SignUpForm onNavigate={onNavigate} />
    </div>
  );
}
export default SignUpPage