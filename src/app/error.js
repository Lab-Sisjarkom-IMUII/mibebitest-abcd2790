'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Landing page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-2xl">⚠️</span>
        </div>
        
        <h1 className="text-2xl font-bold text-[#0F172A] mb-4">
          Oops! Terjadi Kesalahan
        </h1>
        
        <p className="text-[#334155] mb-6">
          Maaf, terjadi kesalahan saat memuat halaman. Silakan coba lagi atau hubungi tim support kami.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Coba Lagi
          </button>
          
          <a
            href="https://wa.me/628992050007"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#A3E635] hover:bg-[#84CC16] text-[#0F172A] px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Hubungi Support
          </a>
        </div>
      </div>
    </div>
  );
}
