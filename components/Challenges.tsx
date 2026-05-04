
import React from 'react';
import { UserX, MonitorOff, Globe, Wallet, BookOpen } from 'lucide-react';

const Challenges: React.FC = () => {
  const challenges = [
    {
      title: 'Lack of access to experienced students',
      description: 'Many great teachers are limited to local circles and never get to impact high-potential students nationwide.',
      icon: <UserX className="w-10 h-10 text-[#D4AF37]" />,
      num: '01'
    },
    {
      title: 'Outdated teaching methods',
      description: 'Physical constraints often force teachers to stick to traditional chalk-and-talk methods without digital leverage.',
      icon: <MonitorOff className="w-10 h-10 text-[#D4AF37]" />,
      num: '02'
    },
    {
      title: 'Limited reach beyond local classrooms',
      description: 'Your teaching prowess is locked behind the four walls of your current school, limiting your professional growth.',
      icon: <Globe className="w-10 h-10 text-[#D4AF37]" />,
      num: '03'
    },
    {
      title: 'Low remuneration for effort',
      description: 'The massive time spent preparing and grading often doesn\'t reflect in the monthly salary teachers receive.',
      icon: <Wallet className="w-10 h-10 text-[#D4AF37]" />,
      num: '04'
    },
    {
      title: 'Expensive teaching materials',
      description: 'Buying textbooks, props, and stationery often comes directly out of a teacher\'s pocket.',
      icon: <BookOpen className="w-10 h-10 text-[#D4AF37]" />,
      num: '05'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f] mb-4">
            The Education Challenges Teachers Face in Nigeria
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-[#D4AF37]/5 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {challenge.icon}
                </div>
                <span className="text-4xl font-black text-gray-200 group-hover:text-[#D4AF37]/20 transition-colors">
                  {challenge.num}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#001f3f] mb-3">{challenge.title}</h3>
              <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
            </div>
          ))}
          
          <div className="p-8 rounded-2xl bg-[#001f3f] flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-2xl font-bold mb-4 italic">Break Free.</h3>
            <p className="text-gray-300 mb-6 text-sm">Join the platform designed specifically to solve these bottlenecks for Nigerian educators.</p>
            <button className="text-[#D4AF37] font-bold flex items-center hover:underline group">
              Start Your Evolution <Globe className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
