import React, { useEffect, useRef, useState } from 'react';

const RSVPSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="rsvp"
      className="relative w-full overflow-hidden py-20 md:py-32"
      style={{
        background: 'linear-gradient(180deg, #d4adc5 0%, #c9a0b8 50%, #bf94ab 100%)'
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Floral pattern */}
      <div className="absolute inset-0" style={{ opacity: 0.06 }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern id="floralRsvp" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="40" fill="none" stroke="#8a4070" strokeWidth="0.5" />
              <path d="M60,100 Q80,70 100,60 Q120,70 140,100 Q120,130 100,140 Q80,130 60,100Z" fill="none" stroke="#8a4070" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#floralRsvp)" />
        </svg>
      </div>

      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2
          className="font-aboreto text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight"
          style={{ color: '#FBEDE2', lineHeight: '115.74%' }}
        >
          Please<br />rsvp
        </h2>

        <p
          className="font-yaldevi text-base md:text-xl mb-12"
          style={{ color: '#FBEDE2' }}
        >
          Click to message on WhatsApp
        </p>

        {/* Animated Circle Button */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative"
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            {/* Outer pulsing ring */}
            <div
              className="absolute top-1/2 left-1/2 w-full h-full rounded-full circle-btn-outer"
              style={{
                border: '2px solid #FBEDE2',
              }}
            />
            {/* Static ring */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
              style={{
                border: '2px solid rgba(251, 237, 226, 0.5)',
              }}
            />
            {/* Inner filled circle */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full"
              style={{
                border: '5px solid #FBEDE2',
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default RSVPSection;
