
import React from 'react';
import { Heart, Award, Globe2 } from 'lucide-react';

const ImpactSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#001f3f] text-white relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 italic">Make a Lasting Impact</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            You're not just creating videos; you're building a brighter future for the next generation of Nigerian leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all text-center group backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <Award className="text-[#D4AF37] w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-[#D4AF37]">70%+</h3>
            <p className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Improved Scores</p>
            <p className="text-gray-400">Over 70% of students improve exam scores after engaging with our expert EduCreators.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all text-center group backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <Globe2 className="text-[#D4AF37] w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-[#D4AF37]">36</h3>
            <p className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">States & Beyond</p>
            <p className="text-gray-400">Your teaching reaches every corner of Nigeria and even beyond borders, empowering students everywhere.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all text-center group backdrop-blur-sm">
            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <Heart className="text-[#D4AF37] w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold mb-2 text-[#D4AF37]">Thousands</h3>
            <p className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Lives Transformed</p>
            <p className="text-gray-400">Empower the next generation of top exam scorers. Your skill will be recognized and truly appreciated.</p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
            <div className="flex -space-x-4 mb-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <img key={i} className="w-14 h-14 rounded-full border-4 border-[#001f3f] object-cover ring-2 ring-[#D4AF37]/30" src={`https://picsum.photos/seed/student${i}/200/200`} alt="student" />
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-[#001f3f] bg-[#D4AF37] flex items-center justify-center text-sm font-black text-[#001f3f] ring-2 ring-[#D4AF37]/30">
                    +15k
                </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-2xl md:text-3xl font-bold italic text-[#D4AF37]">"Teach once, impact thousands."</p>
              <p className="text-lg text-gray-400">Empower the next generation of top exam scorers.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
