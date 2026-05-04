
import React from 'react';
import { XCircle, CheckCircle, TrendingUp, Users, Home, ShieldCheck, Gift, Award, Laptop, Briefcase } from 'lucide-react';

const PainPointsSolutions: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f]">Your Pain Ends Here</h2>
          <p className="mt-4 text-gray-600">No more barriers. No more exhaustion. Just pure impact and appreciation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden border border-gray-200 relative">
          
          {/* Left: Pain */}
          <div className="bg-white p-10 md:p-16 lg:pr-24">
            <h3 className="text-2xl font-bold text-red-600 mb-8 flex items-center">
              <XCircle className="mr-3" /> The Struggle of Traditional Teaching
            </h3>
            <ul className="space-y-6">
              {[
                'Crowded classrooms with 50+ students',
                'Low fixed monthly salary regardless of effort',
                'Outdated textbooks and zero tech resources',
                'Exhausting 8 AM - 4 PM physical presence',
                'No legacy — lesson is gone once period ends'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-500">
                  <div className="min-w-[6px] h-[6px] rounded-full bg-red-300 mt-2.5 mr-4"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12 bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <p className="text-sm italic text-red-700">"The traditional model limits your potential. It's time to teach on your own terms."</p>
            </div>
          </div>

          {/* Right: Solution */}
          <div className="bg-[#001f3f] p-10 md:p-16 lg:pl-24 text-white relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={180} />
            </div>
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-8 flex items-center">
              <CheckCircle className="mr-3" /> What You Gain as an EduCreator
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {[
                { text: 'Work once, earn forever', icon: <TrendingUp className="w-4 h-4 text-[#D4AF37] mr-2" /> },
                { text: 'Comfort of your home', icon: <Home className="w-4 h-4 text-[#D4AF37] mr-2" /> },
                { text: 'No enrollment barriers', icon: <ShieldCheck className="w-4 h-4 text-[#D4AF37] mr-2" /> },
                { text: 'Private tutoring gigs', icon: <Users className="w-4 h-4 text-[#D4AF37] mr-2" /> },
                { text: 'Skills workshops', icon: <Award className="w-4 h-4 text-[#D4AF37] mr-2" /> },
                { text: 'Gifts & gadgets', icon: <Gift className="w-4 h-4 text-[#D4AF37] mr-2" /> },
                { text: 'Top school employment', icon: <Briefcase className="w-4 h-4 text-[#D4AF37] mr-2" /> },
                { text: 'Skill recognition', icon: <Award className="w-4 h-4 text-[#D4AF37] mr-2" /> },
                { text: 'Reach 1000s online', icon: <Laptop className="w-4 h-4 text-[#D4AF37] mr-2" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center text-sm font-medium text-gray-200">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-[#D4AF37]">50%</div>
                <div className="text-xs text-gray-400">Faster income growth</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <div className="text-2xl font-bold text-[#D4AF37]">10x</div>
                <div className="text-xs text-gray-400">More student reach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSolutions;
