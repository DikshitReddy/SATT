import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F6F5F4]">
      <div className="h-[88px]" />

      <div className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Ultra Compact Pill */}
          <div className="bg-white rounded-full flex items-center justify-between px-4 py-2 shadow-sm mx-auto max-w-[598px] max-h-[64px] border border-gray-100">

            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8">
                <img
                  src="/Satt_logo.svg"
                  alt="SATT Logo"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Menu - Very tight spacing */}
            <div className="hidden md:flex items-center gap-7 text-[14.5px] font-medium text-gray-700">
              <a href="#about" className="hover:text-[#E6391F] transition-colors">About</a>
              <a href="#join" className="hover:text-[#E6391F] transition-colors">The Circle</a>
              <a href="#reflections" className="hover:text-[#E6391F] transition-colors">Voices</a>
              <a href="#faq" className="hover:text-[#E6391F]">FAQ</a>
            </div>

            {/* Button - Smaller */}
            <button
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-1 bg-[#E6391F] hover:bg-[#d12f1a] text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
              🕊 Enter the Circle
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 p-1"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white border border-gray-100 rounded-3xl px-6 py-6 mt-3 max-w-[680px] mx-auto shadow-sm">
              <div className="flex flex-col gap-5 text-base">
                <a href="#about" className="hover:text-[#E6391F]">About</a>
                <a href="#join" className="hover:text-[#E6391F]">The Circle</a>
                <a href="#reflections" className="hover:text-[#E6391F]">Voices</a>
                <a href="#faq" className="hover:text-[#E6391F]">FAQ</a>

                <button
                  onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-4 bg-[#E6391F] text-white py-3 rounded-full font-medium flex items-center justify-center gap-2">
                  🕊 Enter the Circle
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;