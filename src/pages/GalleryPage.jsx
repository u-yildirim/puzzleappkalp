import React, { useState, useEffect, useCallback } from 'react';
import { memoriesData } from '../data';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % memoriesData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + memoriesData.length) % memoriesData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 20000); // 20 saniye otomatik geçiş
    return () => clearInterval(timer);
  }, [nextSlide, activeIndex]);

  // Aktif Anı
  const activeMemory = memoriesData[activeIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 flex flex-col pt-8 pb-4 px-2 overflow-hidden">
      
      {/* Üst Başlık */}
      <div className="text-center mb-6 flex-shrink-0 z-10 px-4">
        <Heart className="w-12 h-12 md:w-16 md:h-16 mx-auto text-rose-500 mb-4 fill-current animate-pulse" />
        <h1 className="text-3xl md:text-5xl font-serif text-rose-900 mb-2">Bizim Hikayemiz</h1>
        <p className="text-sm md:text-lg text-rose-700 leading-relaxed italic max-w-2xl mx-auto">
          "Birlikte biriktirdiğimiz her bir anı, kalbimin en güzel köşesinde saklı..."
        </p>
      </div>

      {/* 3D Slider Container */}
      <div className="relative flex-grow flex items-center justify-center w-full max-w-6xl mx-auto overflow-visible mt-4 md:mt-8 h-[50vh] min-h-[300px] z-20">
        
        {/* Navigation Butonları */}
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="absolute left-1 md:-left-8 z-50 bg-white/70 hover:bg-white backdrop-blur-md text-rose-600 p-3 md:p-4 rounded-full shadow-xl transition-all hover:scale-110 border border-rose-100"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {memoriesData.map((memory, index) => {
          let diff = index - activeIndex;
          const length = memoriesData.length;

          // Döngüsel indeksleme için offset ayarlama (12 sliderlık mantık)
          if (diff > Math.floor(length / 2)) diff -= length;
          if (diff < -Math.floor(length / 2)) diff += length;

          let transformClass = "scale-50 opacity-0 z-0 pointer-events-none"; 
          let blurClass = "blur-md";

          if (diff === 0) {
            transformClass = "scale-100 opacity-100 z-40 translate-x-0";
            blurClass = "blur-none";
          } else if (diff === 1) {
            transformClass = "scale-[0.8] opacity-70 z-30 translate-x-[55%] md:translate-x-[65%]";
            blurClass = "blur-[2px]";
          } else if (diff === -1) {
            transformClass = "scale-[0.8] opacity-70 z-30 -translate-x-[55%] md:-translate-x-[65%]";
            blurClass = "blur-[2px]";
          } else if (diff === 2) {
            transformClass = "scale-[0.6] opacity-30 z-20 translate-x-[100%] md:translate-x-[120%] pointer-events-none";
            blurClass = "blur-md";
          } else if (diff === -2) {
            transformClass = "scale-[0.6] opacity-30 z-20 -translate-x-[100%] md:-translate-x-[120%] pointer-events-none";
            blurClass = "blur-md";
          } else if (diff > 2) {
             transformClass = "scale-0 opacity-0 z-10 translate-x-[150%] md:translate-x-[200%] pointer-events-none";
          } else if (diff < -2) {
             transformClass = "scale-0 opacity-0 z-10 -translate-x-[150%] md:-translate-x-[200%] pointer-events-none";
          }

          return (
            <div 
              key={memory.id} 
              className={`absolute transition-all duration-[800ms] ease-in-out cursor-pointer flex flex-col items-center justify-center ${transformClass} w-3/4 max-w-sm md:w-[600px] md:max-w-2xl h-full select-none`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Resim Container - Kırpma olmaması için bg-transparent ve object-contain */}
              <div className={`relative w-full h-full flex items-center justify-center rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white/50 border border-rose-100/50 p-2 md:p-3 backdrop-blur-md transition-all duration-700`}>
                <div className={`w-full h-full rounded-[1.5rem] overflow-hidden bg-white/60 flex items-center justify-center ${blurClass} transition-all duration-700`}>
                  <img src={memory.image} alt={memory.title} className="w-full h-full object-contain pointer-events-none drop-shadow-md" />
                </div>
              </div>
            </div>
          );
        })}

        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="absolute right-1 md:-right-8 z-50 bg-white/70 hover:bg-white backdrop-blur-md text-rose-600 p-3 md:p-4 rounded-full shadow-xl transition-all hover:scale-110 border border-rose-100"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Anı Metni (Sadece Aktif Olana Ait) */}
      <div className="w-full flex-shrink-0 z-30 mt-6 px-4 pb-8 min-h-[160px] md:min-h-[200px] flex items-start justify-center">
        <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-rose-100 shadow-xl w-full max-w-2xl text-center transition-all duration-700 relative overflow-hidden">
          {/* Animasyon için ekstra div */}
          <div key={activeIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-rose-100 p-3 rounded-full inline-flex items-center justify-center shadow-inner mb-3">
               {activeMemory.icon}
            </div>
            <h2 className="text-xl md:text-2xl font-serif text-rose-900 mb-3">{activeMemory.title}</h2>
            <p className="text-rose-800 text-base md:text-lg leading-relaxed italic px-2">
              "{activeMemory.description}"
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
