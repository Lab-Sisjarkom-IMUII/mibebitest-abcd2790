'use client';

import { useState, useEffect } from 'react';

export default function Header({ onCTAClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const colorSchemes = [
    {
      demo: { 
        bg: 'bg-[#FF0000]', 
        hover: 'hover:bg-[#CC0000]', 
        textColor: 'text-white'
      },
      cta: { 
        bg: 'bg-[#000000]', 
        hover: 'hover:bg-[#333333]', 
        textColor: 'text-white'
      }
    },
    {
      demo: { 
        bg: 'bg-[#0000FF]', 
        hover: 'hover:bg-[#0000CC]', 
        textColor: 'text-white'
      },
      cta: { 
        bg: 'bg-[#FFFF00]', 
        hover: 'hover:bg-[#CCCC00]', 
        textColor: 'text-black'
      }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Change colors every 1 second
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colorSchemes.length);
    }, 1000);

    return () => clearInterval(interval);
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full overflow-x-hidden">
        <div className="flex items-center justify-between h-12 sm:h-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img 
                src="/LogoMibebiWithText.png" 
                alt="Mibebi Logo" 
                className="h-5 w-16 sm:h-6 sm:w-20 object-contain"
              />
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
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <a
              href="https://www.tiktok.com/@kasir.resto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onCTAClick('header_demo')}
              className={`${colorSchemes[colorIndex].demo.bg} ${colorSchemes[colorIndex].demo.hover} ${colorSchemes[colorIndex].demo.textColor} px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 hover:shadow-lg hover:scale-105 cursor-pointer text-xs sm:text-base whitespace-nowrap`}
            >
              <span className="hidden sm:inline">Lihat Demo</span>
              <span className="sm:hidden">Demo</span>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1bO5obr3gN2ZIR8GijurpmIX_6-j5Kj9d?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onCTAClick('header_cta')}
              className={`${colorSchemes[colorIndex].cta.bg} ${colorSchemes[colorIndex].cta.hover} ${colorSchemes[colorIndex].cta.textColor} px-2 sm:px-6 py-1.5 sm:py-2.5 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 hover:shadow-lg hover:scale-105 cursor-pointer text-xs sm:text-base whitespace-nowrap`}
            >
              <span className="hidden sm:inline">Pakai Sekarang</span>
              <span className="sm:hidden">Pakai Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
