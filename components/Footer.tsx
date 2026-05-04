
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-black text-[#001f3f]">
              EXAM<span className="text-[#D4AF37]">BLUEPRINT</span>
            </span>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Nigeria's premier exam preparation platform, empowering teachers to reach thousands of students while building a sustainable passive income stream.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#001f3f] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#001f3f] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#001f3f] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#001f3f] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#001f3f] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#D4AF37]">Home</a></li>
              <li><a href="#how-it-works" className="hover:text-[#D4AF37]">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-[#D4AF37]">Benefits</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37]">FAQs</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Apply Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#001f3f] mb-6">EduCreators</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#earnings" className="hover:text-[#D4AF37]">Earnings Potential</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Creator Dashboard</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Recording Guidelines</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Subject Wishlist</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#001f3f] mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-[#D4AF37]" />
                <a href="mailto:support@examblueprint.com" className="hover:text-[#D4AF37]">support@examblueprint.com</a>
              </li>
              <li><a href="#" className="hover:text-[#D4AF37]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D4AF37]">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} ExamBlueprint Nigeria. All rights reserved. Transform your teaching career today.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
