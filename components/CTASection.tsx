
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#001f3f]"></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src="https://picsum.photos/seed/classroom/1920/1080" alt="Background" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight animate-pulse">
            Start Your Journey as an <br />
            <span className="text-[#D4AF37]">EduCreator Today!</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            The future of Nigerian education is digital. Join the platform that rewards your expertise and extends your legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gold px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transform">
              Apply Now
            </button>
          </div>
          <p className="mt-8 text-gray-400 text-sm">
            Join 100+ top-tier educators who have already shifted their careers.
          </p>
        </div>
      </div>

      {/* Floating Graphic elements */}
      <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[#D4AF37] animate-ping opacity-70"></div>
      <div className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-[#D4AF37] animate-bounce opacity-50"></div>
    </section>
  );
};

export default CTASection;
