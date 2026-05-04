
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Earnings', href: '#earnings' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black text-[#001f3f]">
              EXAM<span className="text-[#D4AF37]">BLUEPRINT</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[#001f3f] font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="btn-gold px-6 py-2 rounded-full font-bold">
              Apply as EduCreator
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#001f3f] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#001f3f] hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full text-center mt-4 btn-gold px-6 py-3 rounded-md font-bold">
              Apply as EduCreator
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
