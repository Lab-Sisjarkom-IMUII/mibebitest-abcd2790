import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-2xl">🔍</span>
        </div>
        
        <h1 className="text-2xl font-bold text-[#0F172A] mb-4">
          Halaman Tidak Ditemukan
        </h1>
        
        <p className="text-[#334155] mb-6">
          Halaman yang Anda cari tidak ditemukan. Mungkin halaman tersebut telah dipindah atau dihapus.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Kembali ke Beranda
          </Link>
          
          <a
            href="https://wa.me/628992050007"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#A3E635] hover:bg-[#84CC16] text-[#0F172A] px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Butuh Bantuan?
          </a>
        </div>
      </div>
    </div>
  );
}
