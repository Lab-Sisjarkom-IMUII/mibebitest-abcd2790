'use client';

import { useState, useEffect, useRef } from 'react';

export default function RevenueModel() {
  const [customers, setCustomers] = useState(2000);
  const [avgOrder, setAvgOrder] = useState(25000);
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

  const revenue = customers * avgOrder * 0.001; // Rp1.000 per customer
  const restaurantShare = revenue * 0.5;
  const mibebiShare = revenue * 0.5;

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Model Bagi Hasil (Revenue Sharing)
          </h2>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto">
            Tidak ada biaya bulanan. Setiap pelanggan hanya dikenakan Rp1.000, dibagi 50:50 antara restoran & Mibebi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Model Explanation */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
                💼 Model Bagi Hasil
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#334155]">Tidak ada biaya bulanan</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#334155]">Setiap pelanggan hanya dikenakan Rp1.000</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#A3E635] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-[#334155]">Dibagi 50:50 antara restoran & Mibebi</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">💰 Semakin ramai restoran Anda, semakin besar pemasukan tambahan.</div>
                  <div className="text-lg opacity-90">Anda tidak membayar aplikasi. Aplikasi ini membayar Anda.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Calculator */}
          <div className={`bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6 text-center">
              🧮 Simulasi Pendapatan
            </h3>
            
            <div className="space-y-6">
              {/* Input Controls */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Jumlah Pelanggan per Bulan
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={customers}
                    onChange={(e) => setCustomers(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-center text-lg font-bold text-[#2563EB] mt-2">
                    {customers.toLocaleString('id-ID')} pelanggan
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Rata-rata Order per Pelanggan
                  </label>
                  <input
                    type="range"
                    min="15000"
                    max="50000"
                    step="5000"
                    value={avgOrder}
                    onChange={(e) => setAvgOrder(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-center text-lg font-bold text-[#2563EB] mt-2">
                    Rp {avgOrder.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <div className="bg-[#F8FAFC] rounded-xl p-4">
                  <div className="text-sm text-[#334155] mb-1">Total Biaya Layanan</div>
                  <div className="text-2xl font-bold text-[#0F172A]">
                    Rp {revenue.toLocaleString('id-ID')}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-[#A3E635] to-[#84CC16] rounded-xl p-4 text-white text-center">
                    <div className="text-sm mb-1">Bagian Restoran</div>
                    <div className="text-xl font-bold">
                      Rp {restaurantShare.toLocaleString('id-ID')}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl p-4 text-white text-center">
                    <div className="text-sm mb-1">Bagian Mibebi</div>
                    <div className="text-xl font-bold">
                      Rp {mibebiShare.toLocaleString('id-ID')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlight */}
              <div className="bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-xl p-4 text-white text-center">
                <div className="text-sm font-semibold mb-1">🎉 Pendapatan Ekstra untuk Restoran</div>
                <div className="text-lg font-bold">
                  Rp {restaurantShare.toLocaleString('id-ID')} per bulan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0]">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-8 text-center">
              Perbandingan dengan Aplikasi Kasir Lain
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#F97316]">❌ Aplikasi Kasir Biasa</h4>
                <ul className="space-y-2 text-[#334155]">
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✗</span>
                    <span>Biaya bulanan Rp 500.000 - Rp 2.000.000</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✗</span>
                    <span>Tidak ada pendapatan tambahan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✗</span>
                    <span>Hanya fitur pencatatan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-red-500">✗</span>
                    <span>Tidak ada fitur promosi otomatis</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-[#A3E635]">✅ Mibebi KasirResto</h4>
                <ul className="space-y-2 text-[#334155]">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Tidak ada biaya bulanan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Menghasilkan pendapatan tambahan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Fitur AI & QR untuk pertumbuhan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Promosi otomatis via Lastbite</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
