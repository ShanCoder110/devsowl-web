"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Automations from "./components/Automations";
import ExamplesSection from "./components/ExamplesSection";
import { LanguageProvider } from "./context/LanguageContext";
import ComparisonSection from "./components/ComparisonSection";
import WhyBuildWithUs from "./components/WhyBuildWithUs";
import DevelopmentProcess from "./components/DevelopmentProcess";
import BackgroundEffect from "./components/background";

function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <HeroSection />
        <ComparisonSection />
        <WhyBuildWithUs />
        <Automations />
        <PricingSection />
        <ServicesSection />
        <DevelopmentProcess />
        <ExamplesSection />
        <FAQSection />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
