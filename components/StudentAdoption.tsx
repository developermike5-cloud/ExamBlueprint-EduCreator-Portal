
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Chinedu Eze',
    school: 'Federal Government College, Lagos',
    text: 'ExamBlueprint changed how I prep for JAMB. The videos by our EduCreators are so much clearer than my school notes!',
    img: 'https://picsum.photos/seed/std1/200/200'
  },
  {
    name: 'Amina Yusuf',
    school: 'Barewa College, Zaria',
    text: 'I can learn at my own pace. The teachers explain complex chemistry topics like they are talking to a friend.',
    img: 'https://picsum.photos/seed/std2/200/200'
  },
  {
    name: 'Tunde Bakare',
    school: 'Kings College, Lagos',
    text: 'I used to struggle with Physics, but since I joined, my grades have moved from C to A. Truly life-changing!',
    img: 'https://picsum.photos/seed/std3/200/200'
  }
];

const StudentAdoption: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f] mb-4">Students Are Loving ExamBlueprint</h2>
          <p className="text-gray-600">The growth is exponential. Thousands of students from all 36 states are waiting for YOUR lessons.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
              <div className="flex space-x-1 text-[#D4AF37] mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" />)}
              </div>
              <p className="text-gray-700 italic mb-6">"{item.text}"</p>
              <div className="flex items-center">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full mr-4 border-2 border-[#D4AF37]" />
                <div>
                  <h4 className="font-bold text-[#001f3f]">{item.name}</h4>
                  <p className="text-xs text-gray-400">{item.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#001f3f] rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-around gap-12 border-t-4 border-[#D4AF37]">
          <div className="text-center">
            <div className="text-5xl font-black text-[#D4AF37]">36</div>
            <div className="text-sm uppercase tracking-widest mt-2">States Engaged</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-[#D4AF37]">2k+</div>
            <div className="text-sm uppercase tracking-widest mt-2">New Signups / Week</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-[#D4AF37]">15k+</div>
            <div className="text-sm uppercase tracking-widest mt-2">Active Learners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentAdoption;
