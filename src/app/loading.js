export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#F97316] rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="text-white font-bold text-2xl">M</span>
        </div>
        <div className="text-[#334155] font-medium">Memuat Mibebi KasirResto...</div>
      </div>
    </div>
  );
}
