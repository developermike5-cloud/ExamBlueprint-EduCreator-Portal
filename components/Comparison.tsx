
import React from 'react';
import { ShieldCheck, TrendingDown } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white scroll-mt-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f] mb-4">
            Why EduCreators Choose ExamBlueprint
          </h2>
          <p className="text-gray-600">We prioritize our creators because we know you are the heart of education.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Other Platforms */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 opacity-80 grayscale-[0.5] hover:grayscale-0 transition-all">
            <div className="flex items-center space-x-3 mb-8">
              <TrendingDown className="text-gray-400 w-8 h-8" />
              <h3 className="text-2xl font-bold text-gray-500">Other Platforms</h3>
            </div>
            <ul className="space-y-6">
              {[
                'Low visibility for individual tutors',
                'One-off payment with no future royalties',
                'Limited student analytics and feedback',
                'Generic curriculum with no local context',
                'Zero support for content creation or marketing'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-500 border-b border-gray-200 pb-4 last:border-0">
                  <span className="w-2 h-2 rounded-full bg-gray-300 mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ExamBlueprint */}
          <div className="bg-gradient-to-br from-[#001f3f] to-[#003366] rounded-3xl p-8 border-2 border-[#D4AF37] shadow-2xl transform md:scale-105 relative z-10">
            <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-[#001f3f] font-black py-1 px-4 rounded-full text-sm shadow-lg">RECOMMENDED</div>
            <div className="flex items-center space-x-3 mb-8">
              <ShieldCheck className="text-[#D4AF37] w-8 h-8" />
              <h3 className="text-2xl font-bold text-white">Exam<span className="text-[#D4AF37]">Blueprint</span></h3>
            </div>
            <ul className="space-y-6">
              {[
                'High reach and targeted student promotion',
                'Fair initial payment + Lifetime royalties',
                'Detailed dashboard with student insights',
                'Tailored to Nigerian JAMB, WAEC & NECO',
                'Dedicated growth manager for your brand'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-white border-b border-white/10 pb-4 last:border-0">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] mr-4 shadow-[0_0_8px_#D4AF37]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
