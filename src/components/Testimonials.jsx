'use client';

import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Ayu",
      business: "Resto Ayam Geprek Kita",
      avatar: "👩‍🍳",
      quote: "Dulu kami pakai kasir manual dan sering salah hitung. Sekarang semua otomatis, dan bahkan pelanggan kami senang karena bisa pesan lewat QR.",
      rating: 5,
      improvement: "Operasional 90% lebih efisien"
    },
    {
      name: "Rizal",
      business: "Kopi Jalanan",
      avatar: "👨‍💼",
      quote: "Paling keren pas struk WA-nya langsung ngajak review di Google. Rating kami naik dari 3.8 ke 4.6 dalam dua bulan!",
      rating: 5,
      improvement: "Rating Google +0.8 poin"
    },
    {
      name: "Sari",
      business: "Warung Nasi Gudeg",
      avatar: "👩‍💻",
      quote: "Sekarang promosi jadi otomatis via Lastbite. Omzet naik 30% dalam 3 bulan pertama. Yang paling senang, tidak ada biaya bulanan!",
      rating: 5,
      improvement: "Omzet naik 30%"
    }
  ];

  const stats = [
    { number: "500+", label: "Restoran Aktif" },
    { number: "25%", label: "Rata-rata Peningkatan Omzet" },
    { number: "4.8/5", label: "Rating Kepuasan" },
    { number: "90%", label: "Pengurangan Kesalahan" }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 lg:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            💬 Testimoni dari Pemilik Restoran
          </h2>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto">
            Dengarkan pengalaman nyata dari pemilik restoran yang sudah merasakan manfaat Mibebi KasirResto
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-6 shadow-lg text-center border border-[#E2E8F0] hover:shadow-xl transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-[#2563EB] mb-2 animate-pulse">{stat.number}</div>
              <div className="text-sm text-[#334155]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-[#E2E8F0] group hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[#334155] leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Improvement */}
                <div className="bg-gradient-to-r from-[#A3E635] to-[#84CC16] rounded-xl p-4 text-white text-center">
                  <div className="text-sm font-semibold">Hasil Terukur:</div>
                  <div className="font-bold">{testimonial.improvement}</div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A]">{testimonial.name}</div>
                    <div className="text-sm text-[#334155]">{testimonial.business}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Bergabung dengan Ratusan Restoran yang Sudah Sukses
            </h3>
            <p className="text-[#334155]">
              Dari warung kecil hingga restoran besar, semua merasakan manfaat yang sama
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#F8FAFC] rounded-xl">
              <div className="text-3xl mb-3">🏪</div>
              <div className="font-semibold text-[#0F172A] mb-2">Warung & Kafe</div>
              <div className="text-sm text-[#334155]">Operasional lebih efisien</div>
            </div>
            
            <div className="text-center p-6 bg-[#F8FAFC] rounded-xl">
              <div className="text-3xl mb-3">🍽️</div>
              <div className="font-semibold text-[#0F172A] mb-2">Restoran Menengah</div>
              <div className="text-sm text-[#334155]">Omzet naik signifikan</div>
            </div>
            
            <div className="text-center p-6 bg-[#F8FAFC] rounded-xl">
              <div className="text-3xl mb-3">🏢</div>
              <div className="font-semibold text-[#0F172A] mb-2">Restoran Besar</div>
              <div className="text-sm text-[#334155]">Manajemen terintegrasi</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              🛡️ Dipercaya oleh Ratusan Restoran
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl mb-2">🔒</div>
                <div className="text-sm font-semibold">Keamanan Data</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-semibold">Setup Cepat</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm font-semibold">Hasil Terukur</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">💬</div>
                <div className="text-sm font-semibold">Support 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
