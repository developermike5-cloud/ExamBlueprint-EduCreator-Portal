
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How do I apply to be an EduCreator?',
    a: 'Simply click any "Apply Now" button on this page, fill out the application form with your credentials, and our team will get in touch with you within 48 hours.'
  },
  {
    q: 'How is my earnings calculated?',
    a: 'Earnings are a mix of upfront payments for approved content and recurring royalties based on student engagement (views, completion rates, and ratings).'
  },
  {
    q: 'What equipment do I need?',
    a: 'You can start with just a modern smartphone and a quiet room. We provide guidelines on lighting and audio to help you create professional-looking content without expensive gear.'
  },
  {
    q: 'Can I teach multiple subjects?',
    a: 'Absolutely! Many of our EduCreators specialize in multiple related subjects (e.g., Mathematics and Further Maths or Physics and Chemistry).'
  },
  {
    q: 'How long before I start earning?',
    a: 'Once your demo video is approved and you upload your first full module, you can receive your first payment milestone immediately.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50 scroll-mt-navbar">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001f3f]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[#001f3f] text-lg">{faq.q}</span>
                {openIndex === idx ? <ChevronUp className="text-[#D4AF37]" /> : <ChevronDown className="text-gray-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
