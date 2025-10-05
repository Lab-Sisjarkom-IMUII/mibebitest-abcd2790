export default function OperationalFeatures() {
  const features = [
    {
      icon: "🧠",
      title: "Scan Menu dengan AI",
      description: "Tinggal foto menu, sistem mengenali nama & harga secara otomatis.",
      benefit: "Hemat waktu input hingga 70%",
      color: "from-[#2563EB] to-[#3B82F6]",
      stats: "⏱️ Hemat waktu input hingga 70%"
    },
    {
      icon: "👨‍🍳",
      title: "Cetak Pesanan Dapur Otomatis",
      description: "Pesanan langsung tercetak di dapur — tanpa miskomunikasi.",
      benefit: "Kurangi kesalahan dapur hingga 90%",
      color: "from-[#A3E635] to-[#84CC16]",
      stats: "✅ Kurangi kesalahan dapur hingga 90%"
    },
    {
      icon: "📊",
      title: "Dashboard BI & Laporan Penjualan",
      description: "Pantau omzet, pelanggan, dan performa menu terlaris.",
      benefit: "Bantu ambil keputusan berbasis data",
      color: "from-[#F97316] to-[#EA580C]",
      stats: "📈 Bantu ambil keputusan berbasis data"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            Fitur Operasional
          </h2>
          <p className="text-lg text-[#334155] max-w-3xl mx-auto">
            Efisiensi & Kecepatan dalam operasional harian restoran Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#F8FAFC] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E2E8F0] group hover:scale-105"
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#334155] text-center leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefit Card */}
                <div className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                  <div className="text-sm font-semibold text-[#0F172A] mb-2 text-center">
                    🎯 Benefit:
                  </div>
                  <p className="text-[#334155] text-sm text-center">
                    {feature.benefit}
                  </p>
                </div>

                {/* Stats */}
                <div className={`bg-gradient-to-r ${feature.color} rounded-xl p-4 text-white text-center`}>
                  <p className="text-sm font-semibold">
                    {feature.stats}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Satu Sistem Terintegrasi untuk Semua Kebutuhan
            </h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <div className="font-semibold text-sm">Kasir</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👨‍🍳</div>
                <div className="font-semibold text-sm">Dapur</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-semibold text-sm">Pelanggan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold text-sm">Laporan</div>
              </div>
            </div>
            <p className="mt-6 text-lg opacity-90">
              Semua terhubung dalam satu platform yang mudah digunakan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
