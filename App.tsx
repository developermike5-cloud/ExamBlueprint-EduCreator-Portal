
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import PainPointsSolutions from './components/PainPointsSolutions';
import EarningsBenefits from './components/EarningsBenefits';
import ImpactSection from './components/ImpactSection';
import Comparison from './components/Comparison';
import StudentAdoption from './components/StudentAdoption';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-[#001f3f] text-white py-2 px-4 text-center text-sm md:text-base border-b border-[#D4AF37]/30">
        <p>
          Join the <span className="text-[#D4AF37] font-bold italic">EduCreator</span> community today! 
          <span className="hidden md:inline"> &nbsp;|&nbsp; </span>
          Impact thousands of students while <span className="text-[#D4AF37] font-bold">earning forever!</span>
        </p>
      </div>

      <Navbar />

      <main>
        <Hero />
        <Challenges />
        <PainPointsSolutions />
        <EarningsBenefits />
        <ImpactSection />
        <Comparison />
        <StudentAdoption />
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
