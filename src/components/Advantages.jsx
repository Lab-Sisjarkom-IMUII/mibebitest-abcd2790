export default function Advantages() {
  const advantages = [
    {
      icon: "💰",
      title: "Gratis tanpa biaya tetap",
      description: "Tidak ada biaya bulanan atau setup fee. Hanya bayar ketika ada transaksi.",
      color: "from-[#A3E635] to-[#84CC16]"
    },
    {
      icon: "📈",
      title: "Menghasilkan uang dari setiap pelanggan",
      description: "Setiap transaksi pelanggan memberikan pendapatan tambahan untuk restoran Anda.",
      color: "from-[#2563EB] to-[#3B82F6]"
    },
    {
      icon: "🤖",
      title: "Fitur cerdas berbasis AI & QR",
      description: "Teknologi terdepan untuk operasional yang lebih efisien dan pengalaman pelanggan yang lebih baik.",
      color: "from-[#8B5CF6] to-[#7C3AED]"
    },
    {
      icon: "📱",
      title: "Promosi otomatis via Lastbite",
      description: "Sistem promosi otomatis yang terintegrasi dengan platform Lastbite untuk jangkauan yang lebih luas.",
      color: "from-[#F97316] to-[#EA580C]"
    },
    {
      icon: "🔗",
      title: "Satu sistem untuk semua kebutuhan",
      description: "Kasir, dapur, pelanggan, dan laporan dalam satu platform terintegrasi.",
      color: "from-[#06B6D4] to-[#0891B2]"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            ✨ Kenapa Mibebi KasirResto Berbeda
          </h2>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto">
            Keunggulan yang membuat Mibebi KasirResto menjadi pilihan terbaik untuk pertumbuhan bisnis restoran Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-[#F8FAFC] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0] group hover:scale-105"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg mx-auto`}>
                  {advantage.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-[#334155] leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Summary */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-3xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Satu Platform, Banyak Keuntungan
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <div className="text-lg font-semibold mb-2">Operasional Lebih Cepat</div>
                <div className="text-sm opacity-90">AI & QR untuk efisiensi maksimal</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">💰</div>
                <div className="text-lg font-semibold mb-2">Pendapatan Bertambah</div>
                <div className="text-sm opacity-90">Model bagi hasil tanpa biaya bulanan</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3">📈</div>
                <div className="text-lg font-semibold mb-2">Bisnis Tumbuh</div>
                <div className="text-sm opacity-90">Fitur promosi otomatis & engagement</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="text-lg font-semibold mb-2">
                🎯 Hasil yang Terukur
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>📈 Omzet naik 20-25%</div>
                <div>🔄 Repeat order +15%</div>
                <div>⭐ Rating Google +0.8</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#F8FAFC] rounded-2xl p-8 shadow-lg border border-[#E2E8F0] max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Siap Merasakan Perbedaannya?
            </h3>
            <p className="text-[#334155] mb-6">
              Bergabunglah dengan ratusan restoran yang sudah merasakan manfaat Mibebi KasirResto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105">
                Mulai Sekarang - Gratis
              </button>
              <button className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105">
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
