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
      className="relative w-full overflow-hidden py-20 md:py-32 backdrop-blur-sm"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}
    >
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
