
import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#001f3f] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4AF37]/5 skew-x-12 transform translate-x-1/2 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Teach Once, <br />
              <span className="text-[#D4AF37]">Earn Forever.</span><br />
              Transform Nigerian Education.
            </h1>
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              Become an <span className="text-[#D4AF37] font-semibold">EduCreator</span> and join hundreds of teachers reaching thousands of students online. Teach from the comfort of your classroom or home setup!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-gold px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:scale-105 transform transition">
                Start Your Journey Today
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-white/20 hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                <Play size={20} className="fill-white" />
                <span>See How it Works</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-[#D4AF37]">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Students Daily</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-[#D4AF37]">100+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">EduCreators Onboarded</div>
              </div>
              <div className="text-center sm:text-left col-span-2 sm:col-span-1">
                <div className="text-3xl font-bold text-[#D4AF37]">Unlimited</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Earnings Potential</div>
              </div>
            </div>
          </div>
          
          <div className="relative group animate-fade-in-right">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#001f3f] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Nigerian teacher teaching from a professional home setup with a smartboard"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                  <p className="text-sm font-medium italic text-white">"ExamBlueprint gave me the platform to scale my impact beyond my local classroom. I teach from my living room and reach thousands."</p>
                  <p className="mt-2 text-[#D4AF37] font-bold">- Mr. Okonkwo, Senior Physics EduCreator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
