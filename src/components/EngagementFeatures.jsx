'use client';

import { useEffect, useRef, useState } from 'react';

export default function EngagementFeatures() {
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

  const features = [
    {
      icon: "📨",
      title: "Struk WhatsApp + Pesan AI + Review Google Maps",
      description: "Kirim struk digital langsung ke WA pelanggan, lengkap dengan pesan promosi dan tautan review Google Maps.",
      benefit: "Dapatkan bintang lebih banyak dan pelanggan lebih loyal.",
      result: "📈 Hasilnya: repeat order naik hingga 15%, biaya kertas turun 40%.",
      color: "from-[#2563EB] to-[#3B82F6]"
    },
    {
      icon: "📱",
      title: "QR Meja & Self-Order",
      description: "Pelanggan cukup scan QR di meja untuk memesan. Tidak perlu antre, tidak perlu menunggu pelayan.",
      benefit: "Ciptakan pengalaman modern yang cepat dan efisien.",
      result: "📈 Engagement pelanggan meningkat hingga 2x lipat.",
      color: "from-[#A3E635] to-[#84CC16]"
    },
    {
      icon: "🎁",
      title: "Promo, Voucher, dan Platform Lastbite",
      description: "Push menu promo langsung dari kasir ke platform Lastbite — tempat pelanggan mencari makanan diskon di sekitar mereka.",
      benefit: "Omzet naik 20–25%, dan stok berlebih bisa terjual sebelum basi.",
      result: "📈 Omzet naik 20–25%, dan stok berlebih bisa terjual sebelum basi.",
      color: "from-[#F97316] to-[#EA580C]"
    },
    {
      icon: "🔁",
      title: "Reminder Pelanggan Lama + Voucher Retur",
      description: "Sistem otomatis mengenali pelanggan yang lama tak berkunjung, lalu mengirimkan voucher agar mereka datang kembali.",
      benefit: "Kunjungan ulang meningkat hingga 25%.",
      result: "📈 Kunjungan ulang meningkat hingga 25%.",
      color: "from-[#8B5CF6] to-[#7C3AED]"
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-16 lg:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Fitur dengan Engagement Tertinggi
          </h2>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto">
            Fitur-fitur yang dirancang khusus untuk meningkatkan interaksi pelanggan dan pertumbuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-[#E2E8F0] group hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#334155] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Benefit */}
                <div className="bg-[#F8FAFC] rounded-xl p-4">
                  <div className="text-sm font-semibold text-[#0F172A] mb-2">
                    🎯 Benefit:
                  </div>
                  <p className="text-[#334155] text-sm">
                    {feature.benefit}
                  </p>
                </div>

                {/* Result */}
                <div className={`bg-gradient-to-r ${feature.color} rounded-xl p-4 text-white`}>
                  <div className="text-sm font-semibold mb-1">
                    Hasil Terukur:
                  </div>
                  <p className="text-sm font-medium">
                    {feature.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Siap Meningkatkan Engagement Pelanggan?
            </h3>
            <p className="text-[#334155] mb-6">
              Semua fitur ini sudah terintegrasi dalam satu sistem yang mudah digunakan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drive.google.com/drive/folders/1bO5obr3gN2ZIR8GijurpmIX_6-j5Kj9d?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Pakai Sekarang
              </a>
              <a
                href="https://www.tiktok.com/@kasir.resto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Lihat Demo Lengkap
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
