'use client';

import { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [currentButton, setCurrentButton] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const buttons = [
    {
      text: "Pakai Sekarang",
      icon: "🔵",
      href: "https://drive.google.com/drive/folders/1bO5obr3gN2ZIR8GijurpmIX_6-j5Kj9d?usp=sharing",
      bgColor: "bg-[#2563EB]",
      hoverColor: "hover:bg-[#1D4ED8]"
    },
    {
      text: "Lihat Demo",
      icon: "📱",
      href: "https://www.tiktok.com/@kasir.resto",
      bgColor: "bg-[#F97316]",
      hoverColor: "hover:bg-[#EA580C]"
    },
    {
      text: "Konsultasi WhatsApp",
      icon: "💬",
      href: "https://wa.me/628992050001?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20Mibebi%20KasirResto",
      bgColor: "bg-[#A3E635]",
      hoverColor: "hover:bg-[#84CC16]",
      textColor: "text-[#0F172A]"
    }
  ];

  useEffect(() => {
    // Always visible
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Change button every 3 seconds
      const interval = setInterval(() => {
        setCurrentButton((prev) => (prev + 1) % buttons.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible, buttons.length]);

  if (!isVisible) return null;

  const currentBtn = buttons[currentButton];

  return (
    <div className="fixed bottom-6 left-6 z-50 transition-all duration-500">
      {/* Single rotating CTA button */}
      <div className="relative">
        <a
          href={currentBtn.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${currentBtn.bgColor} ${currentBtn.hoverColor} ${currentBtn.textColor || 'text-white'} px-6 py-4 rounded-2xl font-semibold transition-all duration-500 hover:shadow-xl hover:scale-105 flex items-center space-x-3 group overflow-hidden relative`}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          {/* Content */}
          <span className="text-2xl animate-bounce">{currentBtn.icon}</span>
          <span className="font-bold text-lg relative z-10">{currentBtn.text}</span>
        </a>

        {/* Floating animation elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#A3E635] rounded-full animate-bounce delay-1000"></div>
        <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-[#F97316] rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 -right-3 w-3 h-3 bg-[#2563EB] rounded-full animate-ping delay-700"></div>
        
        {/* Progress indicator */}
        <div className="absolute -bottom-2 left-0 right-0 flex space-x-1 justify-center">
          {buttons.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentButton ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
