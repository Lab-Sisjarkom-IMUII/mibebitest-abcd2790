'use client';

import { useState, useEffect, useRef } from 'react';

export default function FinalCTA({ onCTAClick, onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: ''
  });
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    onFormSubmit('final_cta_form');
    
    // Create WhatsApp message
    const message = `Halo, saya ${formData.name} dari ${formData.business}. Saya tertarik dengan Mibebi KasirResto dan ingin konsultasi lebih lanjut.${formData.email ? ` Email: ${formData.email}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/628992050001?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Siap Merasakan Perbedaannya?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Bergabunglah dengan ratusan restoran yang sudah merasakan manfaat Mibebi KasirResto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Summary */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">🎯 Yang Akan Anda Dapatkan:</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Setup gratis dalam 5 menit</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Training gratis untuk tim Anda</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Support 24/7 via WhatsApp</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Garansi 30 hari uang kembali</span>
                </div>
              </div>
            </div>

            <div className="bg-[#A3E635] rounded-2xl p-6 text-[#0F172A] text-center">
              <div className="text-2xl font-bold mb-2">💰 Tidak ada biaya bulanan. Tidak ada risiko. Hanya keuntungan.</div>
              <div className="text-lg">Mulai gratis, bayar hanya ketika ada transaksi</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white rounded-2xl p-8 shadow-2xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6 text-center">
              Mulai Sekarang - Gratis
            </h3>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Nama Restoran/Bisnis *
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                  placeholder="Nama restoran atau bisnis Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                  placeholder="email@example.com"
                />
              </div>

              <button
                type="submit"
                onClick={() => onCTAClick('final_form_submit')}
                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                🔵 Pakai Sekarang
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#334155]">
                Atau hubungi langsung: 
                <a href="https://wa.me/628992050001" className="text-[#2563EB] font-semibold ml-1">
                  📞 0899-2050-001
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Alternative CTAs */}
        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/drive/folders/1bO5obr3gN2ZIR8GijurpmIX_6-j5Kj9d?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onCTAClick('demo_request')}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              🟠 Download Aplikasi
            </a>
            <a
              href="https://wa.me/628992050001?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20Mibebi%20KasirResto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onCTAClick('consultation_request')}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 backdrop-blur-sm"
            >
              💬 Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
