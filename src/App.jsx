import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/auth/LandingPage";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import OnboardingPersonalization from "./pages/onboarding/OnboardingPersonalization";
import OnboardingSuccessPage from "./pages/onboarding/OnboardingSuccess";
import Dashboard from "./pages/dashboard/Dashboard";
import Analytics from "./pages/dashboard/Analytics";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/onboarding" element={<OnboardingPersonalization/>} />
        <Route path="/success" element={<OnboardingSuccessPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
}