'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: "💸",
      title: "Aplikasi kasir hanya mencatat — tapi tidak membuat penjualan bertambah.",
      description: "Setiap bulan bayar biaya langganan, tapi omzet tetap segitu-segitu saja."
    },
    {
      icon: "📉",
      title: "Promosi manual yang tidak efektif.",
      description: "Diskon diposting di Instagram, tapi jarang dilihat pelanggan sekitar. Tidak ada sistem otomatis untuk menarik pelanggan lama agar kembali."
    },
    {
      icon: "🕓",
      title: "Waktu pelanggan banyak habis hanya untuk antre dan menunggu.",
      description: "Semakin lama pelanggan menunggu, semakin kecil peluang mereka membeli lagi."
    },
    {
      icon: "📊",
      title: "Pemilik resto tidak punya insight untuk melihat apa yang benar-benar laku.",
      description: "Tidak tahu menu mana yang paling menguntungkan atau kapan waktu terbaik untuk promo."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Aplikasi Kasir Lain Mungkin Bisa Mencatat Transaksi.
            <br />
            <span className="text-[#F97316] animate-pulse">Tapi, Apakah Mereka Bisa Membantu Anda MENINGKATKAN PENJUALAN?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-all duration-500 hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{problem.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-[#F97316] transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-[#334155] leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Transition */}
        <div className={`text-center bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-3xl p-8 lg:p-12 text-white transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-6 animate-bounce">💡</div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Karena itu kami menciptakan{' '}
              <span className="text-[#A3E635] animate-pulse">Mibebi KasirResto</span>
              {' '}— bukan sekadar aplikasi pencatat, tapi{' '}
              <span className="text-[#A3E635] animate-pulse">mesin pertumbuhan restoran</span>:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2 group-hover:animate-bounce">📈</div>
                <div className="font-semibold">Meningkatkan Penjualan</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2 group-hover:animate-bounce">🔄</div>
                <div className="font-semibold">Mengembalikan Pelanggan Lama</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2 group-hover:animate-bounce">💰</div>
                <div className="font-semibold">Menambah Pemasukan Tanpa Biaya Bulanan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
