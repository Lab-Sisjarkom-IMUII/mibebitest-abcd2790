export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0F172A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#F97316] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="ml-3 text-2xl font-bold">Mibebi</span>
            </div>
            
            <p className="text-[#94A3B8] leading-relaxed mb-6 max-w-md">
              Aplikasi kasir modern berbasis AI & QR yang membantu restoran mencatat penjualan, 
              melayani pelanggan lebih cepat, dan bahkan menghasilkan pendapatan tambahan.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/mibebi.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center hover:bg-[#1D4ED8] transition-colors"
              >
                📸
              </a>
              <a 
                href="https://wa.me/628992050007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#A3E635] rounded-lg flex items-center justify-center hover:bg-[#84CC16] transition-colors"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Fitur</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-[#94A3B8] hover:text-white transition-colors">
                  QR Meja & Self-Order
                </a>
              </li>
              <li>
                <a href="#features" className="text-[#94A3B8] hover:text-white transition-colors">
                  Struk WhatsApp
                </a>
              </li>
              <li>
                <a href="#features" className="text-[#94A3B8] hover:text-white transition-colors">
                  Dashboard BI
                </a>
              </li>
              <li>
                <a href="#features" className="text-[#94A3B8] hover:text-white transition-colors">
                  Platform Lastbite
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-[#2563EB]">🌐</span>
                <a 
                  href="https://www.mibebi.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  www.mibebi.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#A3E635]">📞</span>
                <a 
                  href="https://wa.me/628992050007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  0899-2050-007
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#F97316]">📍</span>
                <span className="text-[#94A3B8]">Yogyakarta, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#8B5CF6]">📸</span>
                <a 
                  href="https://instagram.com/mibebi.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#94A3B8] hover:text-white transition-colors"
                >
                  @mibebi.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#334155] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#94A3B8] text-sm">
              © 2024 Mibebi KasirResto. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#94A3B8] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-6 bg-[#1E293B] rounded-xl px-6 py-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#A3E635]">🔒</span>
              <span className="text-sm text-[#94A3B8]">Data Aman</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#A3E635]">⚡</span>
              <span className="text-sm text-[#94A3B8]">Setup Cepat</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#A3E635]">💰</span>
              <span className="text-sm text-[#94A3B8]">Tanpa Biaya Bulanan</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#A3E635]">📈</span>
              <span className="text-sm text-[#94A3B8]">Hasil Terukur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
