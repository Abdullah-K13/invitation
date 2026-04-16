import React, { useEffect, useRef, useState } from 'react';
import { weddingData } from '../data/mockData';
import { Lantern } from './HeroSection';

const EventCard = ({ event, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`event-card relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className="relative overflow-hidden shadow-lg"
        style={{
          borderRadius: '50px',
          background: 'linear-gradient(135deg, #d4c88e 0%, #c4b87a 100%)',
          padding: '3px',
        }}
      >
        <div
          className="px-6 py-8 md:px-8 md:py-10 text-center relative"
          style={{
            borderRadius: '48px',
            background: 'linear-gradient(180deg, #e8ddb0 0%, #f2ecc8 30%, #f5efd0 50%, #f2ecc8 70%, #e8ddb0 100%)',
          }}
        >
          {/* Floral decoration top-right */}
          <div className="absolute top-3 right-3 w-16 h-16 md:w-20 md:h-20 opacity-60">
            <svg viewBox="0 0 80 80" className="w-full h-full">
              <g transform="translate(40,15) rotate(15)">
                <path d="M0,0 Q-8,12 -4,28" fill="none" stroke="#7a8a42" strokeWidth="1.2" />
                <path d="M0,0 Q4,10 12,20" fill="none" stroke="#7a8a42" strokeWidth="1.2" />
                <path d="M0,0 Q-12,8 -16,16" fill="none" stroke="#7a8a42" strokeWidth="0.8" />
                <ellipse cx="-6" cy="24" rx="5" ry="2.5" fill="#7a8a42" transform="rotate(-20,-6,24)" opacity="0.7" />
                <ellipse cx="10" cy="18" rx="4" ry="2" fill="#8a9a52" transform="rotate(15,10,18)" opacity="0.7" />
                <ellipse cx="-14" cy="14" rx="4" ry="2" fill="#7a8a42" transform="rotate(-30,-14,14)" opacity="0.7" />
                <circle cx="0" cy="-2" r="4" fill="#d4b060" opacity="0.8" />
                <circle cx="-2" cy="-4" r="2.5" fill="#e8c875" opacity="0.7" />
                <circle cx="2" cy="-2" r="2.5" fill="#e8c875" opacity="0.7" />
                <circle cx="12" cy="6" r="3" fill="#d4b060" opacity="0.7" />
                <circle cx="-10" cy="8" r="2.5" fill="#c4a050" opacity="0.7" />
              </g>
            </svg>
          </div>

          <h3
            className="font-aboreto text-xl md:text-2xl lg:text-[28px] mb-5 md:mb-6"
            style={{ color: '#4a6b5a' }}
          >
            {event.name}
          </h3>

          <div className="space-y-0.5">
            <p
              className="font-cormorant italic text-sm md:text-[15px]"
              style={{ color: '#4a6b5a' }}
            >
              {event.date}
            </p>
            <p
              className="font-cormorant italic text-sm md:text-[15px]"
              style={{ color: '#4a6b5a' }}
            >
              {event.venue}
            </p>
            <p
              className="font-cormorant italic text-sm md:text-[15px]"
              style={{ color: '#4a6b5a' }}
            >
              {event.city}
            </p>
            <p
              className="font-cormorant italic text-sm md:text-[15px] mt-1"
              style={{ color: '#4a6b5a' }}
            >
              {event.time}
            </p>
          </div>

          <a
            href={event.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 font-yaldevi text-xs md:text-[13px] underline underline-offset-2 hover:no-underline transition-all"
            style={{ color: '#4a6b5a' }}
          >
            See the route
          </a>
        </div>
      </div>
    </div>
  );
};

const EventsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 md:py-24"
      style={{
        background: 'linear-gradient(180deg, #4a7d7a 0%, #5a8f8a 50%, #4a7d7a 100%)'
      }}
    >
      {/* Damask pattern overlay */}
      <div className="absolute inset-0 damask-overlay" />

      {/* Lanterns */}
      <Lantern size="md" className="lantern" style={{ top: '2%', left: '3%', '--rotation': '7deg' }} />
      <Lantern size="sm" className="lantern-alt" style={{ top: '8%', right: '5%', '--rotation': '-7deg' }} />
      <Lantern size="md" className="lantern" style={{ top: '45%', left: '2%', '--rotation': '-5deg' }} />
      <Lantern size="sm" className="lantern-alt" style={{ top: '55%', right: '3%', '--rotation': '8deg' }} />
      <Lantern size="sm" className="lantern" style={{ top: '80%', left: '8%', '--rotation': '3deg' }} />
      <Lantern size="sm" className="lantern-alt" style={{ top: '85%', right: '10%', '--rotation': '-6deg' }} />

      {/* Events Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {weddingData.events.map((event, index) => (
            <EventCard key={event.name} event={event} index={index} />
          ))}
        </div>
      </div>

      {/* See the Route CTA */}
      <div
        className={`relative z-10 text-center mt-16 md:mt-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2
          className="font-aboreto text-4xl md:text-5xl lg:text-[70px] mb-2"
          style={{ color: '#F3ECBA', lineHeight: '115.74%' }}
        >
          SEE THE
        </h2>
        <h2
          className="font-aboreto text-4xl md:text-5xl lg:text-[70px] mb-4"
          style={{ color: '#F3ECBA', lineHeight: '115.74%' }}
        >
          ROUTE
        </h2>
        <p
          className="font-yaldevi text-base md:text-[20px] mb-8"
          style={{ color: '#F3ECBA' }}
        >
          Click to open the map
        </p>

        {/* Vintage Car */}
        <div className="relative w-48 h-36 md:w-64 md:h-48 mx-auto mt-6">
          <img
            src={weddingData.images.vintageCar}
            alt="Vintage Car"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Map circle button */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 relative"
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <div
              className="absolute top-1/2 left-1/2 w-full h-full rounded-full circle-btn-outer"
              style={{ border: '2px solid #F3ECBA' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
              style={{ border: '2px solid rgba(243, 236, 186, 0.5)' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full"
              style={{ border: '4px solid #F3ECBA' }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default EventsSection;
