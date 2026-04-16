import React, { useEffect, useRef, useState, useCallback } from 'react';
import { weddingData } from '../data/mockData';

const BrideGroomSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const images = weddingData.galleryImages;

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 4000);
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [nextSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(nextSlide, 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #c9a0b8 0%, #d4adc5 30%, #dbb8cf 60%, #d4adc5 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Textured overlay */}
      <div
        className="absolute inset-0"
        style={{ opacity: 0.06 }}
      >
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="floralPink" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="50" fill="none" stroke="#8a4070" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="#8a4070" strokeWidth="0.3" />
              <path d="M60,100 Q80,65 100,55 Q120,65 140,100 Q120,135 100,145 Q80,135 60,100Z" fill="none" stroke="#8a4070" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="35" fill="none" stroke="#8a4070" strokeWidth="0.3" />
              <circle cx="200" cy="0" r="35" fill="none" stroke="#8a4070" strokeWidth="0.3" />
              <circle cx="0" cy="200" r="35" fill="none" stroke="#8a4070" strokeWidth="0.3" />
              <circle cx="200" cy="200" r="35" fill="none" stroke="#8a4070" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#floralPink)" />
        </svg>
      </div>

      <div className="relative z-10 py-16 md:py-24 px-4">
        {/* Meet the Bride and Groom */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p
            className="font-yaldevi text-sm md:text-base tracking-[0.3em] uppercase mb-3"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            MEET THE
          </p>
          <h2
            className="font-aboreto text-4xl md:text-6xl lg:text-7xl mb-8"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            BRIDE AND<br />GROOM
          </h2>
          <p
            className="font-cormorant-upright italic text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            {weddingData.brideGroomText}
          </p>
        </div>

        {/* Photo Gallery in Ornate Frame */}
        <div
          className={`relative max-w-sm mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Ornate Mughal-style Frame */}
          <div className="relative" style={{ filter: 'drop-shadow(0 8px 30px rgba(0,0,0,0.15))' }}>
            {/* Frame background */}
            <div
              className="relative rounded-[30px] md:rounded-[40px] p-3 md:p-4"
              style={{
                background: 'linear-gradient(180deg, #f5e6b8 0%, #e8d490 30%, #dcc680 50%, #e8d490 70%, #f5e6b8 100%)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -2px 4px rgba(0,0,0,0.1)'
              }}
            >
              {/* Top decorative flourish */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-16 md:w-56 md:h-20">
                <svg viewBox="0 0 200 70" className="w-full h-full">
                  {/* Center flower */}
                  <circle cx="100" cy="35" r="12" fill="#f0dca0" stroke="#c4a860" strokeWidth="1" />
                  <circle cx="100" cy="35" r="7" fill="#e8d090" stroke="#c4a860" strokeWidth="0.5" />
                  <circle cx="100" cy="35" r="3" fill="#d4b870" />
                  {/* Petals around center */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <ellipse
                      key={angle}
                      cx={100 + Math.cos((angle * Math.PI) / 180) * 18}
                      cy={35 + Math.sin((angle * Math.PI) / 180) * 18}
                      rx="8"
                      ry="5"
                      fill="#f5e6b8"
                      stroke="#c4a860"
                      strokeWidth="0.5"
                      transform={`rotate(${angle}, ${100 + Math.cos((angle * Math.PI) / 180) * 18}, ${35 + Math.sin((angle * Math.PI) / 180) * 18})`}
                    />
                  ))}
                  {/* Side scrolling curves */}
                  <path d="M55,45 Q40,30 50,15 Q55,8 65,15" fill="none" stroke="#c4a860" strokeWidth="1.5" />
                  <path d="M145,45 Q160,30 150,15 Q145,8 135,15" fill="none" stroke="#c4a860" strokeWidth="1.5" />
                  {/* Outer leaves */}
                  <ellipse cx="40" cy="42" rx="10" ry="6" fill="#f0dca0" stroke="#c4a860" strokeWidth="0.5" transform="rotate(-30,40,42)" />
                  <ellipse cx="160" cy="42" rx="10" ry="6" fill="#f0dca0" stroke="#c4a860" strokeWidth="0.5" transform="rotate(30,160,42)" />
                </svg>
              </div>

              {/* Inner frame with cross-hatch at bottom */}
              <div
                className="rounded-[24px] md:rounded-[32px] overflow-hidden relative"
                style={{
                  border: '2px solid #c4a860',
                  aspectRatio: '3/4'
                }}
              >
                {/* Image slideshow */}
                <div className="w-full h-full relative">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Wedding ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover gallery-slide"
                      style={{
                        opacity: idx === currentSlide ? 1 : 0,
                      }}
                      loading="lazy"
                    />
                  ))}
                </div>

                {/* Cross-hatch overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 md:h-20"
                  style={{ pointerEvents: 'none' }}
                >
                  <svg width="100%" height="100%" className="w-full h-full">
                    <defs>
                      <pattern id="crossHatch" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                        <line x1="0" y1="0" x2="12" y2="12" stroke="#c4a860" strokeWidth="0.5" opacity="0.4" />
                        <line x1="12" y1="0" x2="0" y2="12" stroke="#c4a860" strokeWidth="0.5" opacity="0.4" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#crossHatch)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: idx === currentSlide ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                  transform: idx === currentSlide ? 'scale(1.3)' : 'scale(1)',
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideGroomSection;
