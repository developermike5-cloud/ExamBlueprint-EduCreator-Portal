
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DollarSign, Zap, History } from 'lucide-react';

const data = [
  { name: 'Month 1', earning: 50000 },
  { name: 'Month 2', earning: 75000 },
  { name: 'Month 3', earning: 120000 },
  { name: 'Month 4', earning: 180000 },
  { name: 'Month 5', earning: 250000 },
  { name: 'Month 6', earning: 400000 },
];

const EarningsBenefits: React.FC = () => {
  return (
    <section id="earnings" className="py-24 bg-white scroll-mt-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f] mb-6">How Much Can You Earn?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our unique revenue model ensures that your hard work pays off indefinitely. 
              The better your content, the higher the engagement, and the larger your paycheck.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 border-l-4 border-[#D4AF37]">
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg text-[#D4AF37]">
                  <DollarSign />
                </div>
                <div>
                  <h4 className="font-bold text-[#001f3f]">Base Earning</h4>
                  <p className="text-sm text-gray-500">Get paid for every high-quality video uploaded and approved.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 border-l-4 border-[#D4AF37]">
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg text-[#D4AF37]">
                  <Zap />
                </div>
                <div>
                  <h4 className="font-bold text-[#001f3f]">Performance Bonus</h4>
                  <p className="text-sm text-gray-500">Earnings increase exponentially as your views and student ratings soar.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 border-l-4 border-[#D4AF37]">
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg text-[#D4AF37]">
                  <History />
                </div>
                <div>
                  <h4 className="font-bold text-[#001f3f]">Passive Royalty</h4>
                  <p className="text-sm text-gray-500">One great lesson can continue earning you income forever.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-[#001f3f] rounded-2xl text-white">
              <div className="text-sm uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">Projected Monthly Potential</div>
              <div className="text-4xl font-black">₦250,000+</div>
              <p className="text-xs text-gray-400 mt-2">*Based on top-tier creators with high student engagement</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-inner h-[450px]">
            <h4 className="text-center font-bold text-[#001f3f] mb-8">Growth of Potential Monthly Earnings</h4>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                  formatter={(value: number) => [`₦${value.toLocaleString()}`, 'Earnings']}
                />
                <Bar dataKey="earning" radius={[6, 6, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#D4AF37' : '#001f3f'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-gray-400 mt-4 italic">Example trajectory of an active EduCreator</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsBenefits;
