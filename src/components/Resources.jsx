'use client';

import { useEffect, useRef, useState } from 'react';

export default function Resources() {
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

  const resources = [
    {
      title: "Business Coach Guide",
      description: "Panduan lengkap untuk mengoptimalkan bisnis restoran Anda dengan strategi yang terbukti efektif",
      type: "PDF",
      size: "2.4 MB",
      icon: "📊",
      downloadUrl: "/Business_Coach.docx"
    },
    {
      title: "Business Coach PPT",
      description: "Presentasi strategi optimasi menu untuk meningkatkan profit margin restoran",
      type: "PPT",
      size: "5.1 MB", 
      icon: "📈",
      downloadUrl: "/Business_Coaching.pptx"
    },
  ];

  return (
    <section ref={sectionRef} id="resources" className="py-16 lg:py-20 bg-gradient-to-br from-[#F8FAFC] to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#2563EB]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#F97316]/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#A3E635]/5 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
            📚 Resources Gratis untuk Restoran Anda
          </h2>
          <p className="text-xl text-[#334155] max-w-3xl mx-auto">
            Download panduan, template, dan tools gratis yang akan membantu mengembangkan bisnis restoran Anda
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer transition-all duration-1000 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Icon & Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{resource.icon}</div>
                <div className="bg-[#2563EB] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {resource.type}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span>📁 {resource.size}</span>
                  <span className="bg-[#A3E635] text-[#0F172A] px-2 py-1 rounded-full font-medium">
                    Gratis
                  </span>
                </div>
              </div>

              {/* Download Button */}
              <a
                href={resource.downloadUrl}
                download
                className="mt-4 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-xl font-semibold text-center transition-all duration-200 hover:shadow-lg flex items-center justify-center group/btn"
              >
                <span className="mr-2">⬇️</span>
                Download Gratis
                <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
