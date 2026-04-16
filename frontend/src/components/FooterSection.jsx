import React, { useEffect, useRef, useState } from 'react';
import { weddingData } from '../data/mockData';

const FooterSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targetDate = new Date(weddingData.countdownDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <section
      ref={sectionRef}
      id="bride-and-groom-1"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '85vh' }}
    >
      {/* Background Image - Night Palace */}
      <div className="absolute inset-0">
        <img
          src={weddingData.images.footerBg}
          alt="Night Palace"
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10, 5, 0, 0.2)' }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-4 py-16">
        {/* Crescent Moon / Star Decoration */}
        <div
          className={`relative mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <img
            src={weddingData.images.crescentMoon}
            alt="Crescent Moon"
            className="w-36 h-36 md:w-48 md:h-48 object-contain"
            loading="lazy"
          />
        </div>

        {/* Countdown Title */}
        <div
          className={`text-center mb-4 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            className="font-cormorant-upright text-3xl md:text-[40px]"
            style={{ color: '#E79300', lineHeight: '100.1%' }}
          >
            The countdown begins
          </h2>
        </div>

        {/* Countdown Timer */}
        <div
          className={`text-center mb-12 mt-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p
            className="font-cormorant-upright text-3xl md:text-[34px] font-medium"
            style={{
              color: '#E79300',
              fontVariantNumeric: 'tabular-nums',
              whiteSpace: 'nowrap',
              lineHeight: '1em',
              letterSpacing: '0.05em'
            }}
          >
            {pad(countdown.days)}:{pad(countdown.hours)}:{pad(countdown.minutes)}:{pad(countdown.seconds)}
          </p>
        </div>

        {/* Message */}
        <div
          className={`text-center max-w-md mb-10 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p
            className="font-cormorant-upright text-[14px]"
            style={{ color: '#E79300' }}
          >
            Our families are excited that you are able to join us in celebrating
            what we hope will be one of the happiest days of our lives.
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Copyright */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p
            className="font-cormorant-upright text-[14px]"
            style={{ color: '#E79300' }}
          >
            &copy; Missing Piece 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
