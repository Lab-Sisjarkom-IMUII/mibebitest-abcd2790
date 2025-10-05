'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection({ onCTAClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#2563EB]/10 to-[#F97316]/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#A3E635]/10 to-[#2563EB]/10 rounded-full animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Kasir Digital yang{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#F97316] animate-pulse">
                  Bukan Sekadar Gratis
                </span>
                {' '}— Tapi Justru{' '}
                <span className="text-[#A3E635] animate-bounce">
                  Menambah Pemasukan
                </span>{' '}
                Restoran Anda.
              </h1>
              
              <p className={`text-lg sm:text-xl text-[#334155] leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Aplikasi kasir modern berbasis AI & QR yang membantu restoran mencatat penjualan, 
                melayani pelanggan lebih cepat, dan bahkan menghasilkan pendapatan tambahan.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button
                onClick={() => onCTAClick('hero_primary')}
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group relative overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                  🔵 Coba Gratis Sekarang
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => onCTAClick('hero_secondary')}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group relative overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                  🟠 Lihat Demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#EA580C] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex items-center space-x-6 pt-4 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-[#A3E635] rounded-full animate-pulse"></div>
                <span className="text-sm text-[#334155] group-hover:text-[#A3E635] transition-colors">Tanpa biaya bulanan</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-[#A3E635] rounded-full animate-pulse delay-200"></div>
                <span className="text-sm text-[#334155] group-hover:text-[#A3E635] transition-colors">Bagi hasil 50:50</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <div className="w-2 h-2 bg-[#A3E635] rounded-full animate-pulse delay-400"></div>
                <span className="text-sm text-[#334155] group-hover:text-[#A3E635] transition-colors">Setup dalam 5 menit</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#E2E8F0] hover:shadow-3xl transition-all duration-500 hover:scale-105">
              {/* Mockup Dashboard */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#2563EB] to-[#F97316] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <span className="font-semibold text-[#0F172A]">Mibebi KasirResto</span>
                  </div>
                  <div className="text-sm text-[#A3E635] font-semibold">● Online</div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F8FAFC] rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#2563EB]">Rp 2.4M</div>
                    <div className="text-sm text-[#334155]">Omzet Hari Ini</div>
                  </div>
                  <div className="bg-[#F8FAFC] rounded-xl p-4">
                    <div className="text-2xl font-bold text-[#A3E635]">+25%</div>
                    <div className="text-sm text-[#334155]">vs Kemarin</div>
                  </div>
                </div>

                {/* QR Code Mockup */}
                <div className="bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-xl p-6 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="text-sm font-medium">QR Meja & Self-Order</div>
                  <div className="text-xs opacity-90">Pelanggan scan untuk pesan</div>
                </div>

                {/* Recent Orders */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-[#0F172A]">Pesanan Terbaru</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#A3E635] rounded-full flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Nasi Goreng Spesial</div>
                          <div className="text-xs text-[#334155]">Meja 5 • QR Order</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-[#2563EB]">Rp 25.000</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center">
                          <span className="text-xs">⏱</span>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Es Teh Manis</div>
                          <div className="text-xs text-[#334155]">Meja 3 • WhatsApp</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-[#2563EB]">Rp 8.000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#A3E635] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#F97316] rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[#2563EB] rounded-full opacity-30 animate-bounce delay-500"></div>
            <div className="absolute top-1/4 -left-6 w-8 h-8 bg-[#8B5CF6] rounded-full opacity-25 animate-ping delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
