
import React from 'react';
import { MousePointer2, Video, Upload, CheckCircle2, LayoutDashboard } from 'lucide-react';

const steps = [
  {
    title: 'Pick a topic to teach',
    desc: 'Choose from our curated list of high-demand exam topics across WAEC, JAMB, or NECO.',
    icon: <MousePointer2 className="w-8 h-8" />
  },
  {
    title: 'Record Demo Video',
    desc: 'Create a 20-minute engaging video using our visual guidelines and templates.',
    icon: <Video className="w-8 h-8" />
  },
  {
    title: 'Upload via Portal',
    desc: 'Submit your lesson files through our easy-to-use creator dashboard.',
    icon: <Upload className="w-8 h-8" />
  },
  {
    title: 'Get Approved & Earn',
    desc: 'Once approved, your video goes live and you receive your first payment milestone.',
    icon: <CheckCircle2 className="w-8 h-8" />
  },
  {
    title: 'Track Growth',
    desc: 'Monitor your analytics and royalties as your lessons reach thousands of students.',
    icon: <LayoutDashboard className="w-8 h-8" />
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white scroll-mt-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f] mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Becoming an EduCreator is simple. We provide the platform, you provide the knowledge.</p>
        </div>

        <div className="relative">
          {/* Connector Line (visible on large screens) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-[#001f3f] text-[#D4AF37] rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-xl group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-50 hover:border-[#D4AF37]/30 transition-all hover:shadow-lg h-full">
                  <div className="text-[#D4AF37] font-black text-xl mb-2">Step {idx + 1}</div>
                  <h4 className="font-bold text-[#001f3f] mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#D4AF37]/5 to-[#001f3f]/5 border border-dashed border-[#D4AF37]/30 text-center">
            <h5 className="font-bold text-[#001f3f] text-lg mb-2">Ready to start?</h5>
            <p className="text-gray-600 text-sm mb-6">No expensive equipment required! Just your knowledge and a smartphone or laptop.</p>
            <button className="btn-gold px-10 py-3 rounded-full font-bold">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
