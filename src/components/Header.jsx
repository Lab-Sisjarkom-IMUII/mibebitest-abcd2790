'use client';

import { useState, useEffect } from 'react';

export default function Header({ onCTAClick }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full overflow-x-hidden ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#F97316] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="ml-2 text-xl font-bold text-[#0F172A]">
                Mibebi
              </span>
            </div>
          </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                  <button
                    onClick={() => scrollToSection('features')}
                    className="text-[#334155] hover:text-[#2563EB] transition-colors duration-200 font-medium cursor-pointer"
                  >
                    Fitur
                  </button>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="text-[#334155] hover:text-[#2563EB] transition-colors duration-200 font-medium cursor-pointer"
                  >
                    Testimoni
                  </button>
                  <button
                    onClick={() => scrollToSection('resources')}
                    className="text-[#334155] hover:text-[#2563EB] transition-colors duration-200 font-medium cursor-pointer"
                  >
                    Resources
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-[#334155] hover:text-[#2563EB] transition-colors duration-200 font-medium cursor-pointer"
                  >
                    Kontak
                  </button>
                </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <a
              href="https://www.tiktok.com/@kasir.resto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onCTAClick('header_demo')}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-3 sm:px-4 py-2.5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden cursor-pointer text-sm sm:text-base whitespace-nowrap"
            >
              <span className="relative z-10">Lihat Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#EA580C] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1bO5obr3gN2ZIR8GijurpmIX_6-j5Kj9d?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onCTAClick('header_cta')}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-3 sm:px-6 py-2.5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden cursor-pointer text-sm sm:text-base whitespace-nowrap"
            >
              <span className="relative z-10">Pakai Sekarang</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
