import React, { useEffect, useRef, useState } from 'react';
import { weddingData } from '../data/mockData';

const InfoCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex flex-col items-center">
        <div className="w-16 h-20 md:w-20 md:h-24 mb-4">
          <img
            src={item.icon}
            alt={item.title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <h3
          className="font-aboreto text-2xl md:text-[32px] mb-3"
          style={{ color: '#696B36' }}
        >
          {item.title}
        </h3>
        <p
          className="font-yaldevi text-xs md:text-[12px] max-w-[200px]"
          style={{ color: '#696B36' }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};

const ThingsToKnow = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      {/* Vintage Car Divider at Top */}
      <div className="relative z-10 flex justify-center pt-8 md:pt-12">
        <div className="w-48 h-36 md:w-64 md:h-48">
          <img
            src={weddingData.images.vintageCar}
            alt="Vintage Car"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Things to Know Content */}
      <div className="relative z-10 py-12 md:py-20 px-4 max-w-5xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            className="font-aboreto text-4xl md:text-6xl lg:text-[70px] mb-6"
            style={{ color: '#696B36' }}
          >
            Things to know
          </h2>
          <p
            className="font-yaldevi text-base md:text-[20px] max-w-2xl mx-auto"
            style={{ color: '#696B36' }}
          >
            To help you feel at ease and enjoy every moment of the celebrations,
            we've gathered a few thoughtful details we'd love for you to know before the big day.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {weddingData.thingsToKnow.map((item, index) => (
            <InfoCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Follow the Action / Instagram CTA */}
      <div
        id="instagram"
        className={`relative z-10 text-center pb-20 md:pb-28 px-4 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2
          className="font-aboreto text-4xl md:text-5xl lg:text-[70px] mb-2 leading-tight"
          style={{ color: '#696B36', lineHeight: '115.74%' }}
        >
          Follow
        </h2>
        <h2
          className="font-aboreto text-4xl md:text-5xl lg:text-[70px] mb-4"
          style={{ color: '#696B36', lineHeight: '115.74%' }}
        >
          the action
        </h2>
        <p
          className="font-yaldevi text-base md:text-[20px] mb-10"
          style={{ color: '#696B36' }}
        >
          Click to open our Instagram page
        </p>

        {/* Instagram Circle Button */}
        <a
          href={weddingData.instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block relative"
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <div
              className="absolute top-1/2 left-1/2 w-full h-full rounded-full circle-btn-outer"
              style={{ border: '2px solid #696B36' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
              style={{ border: '2px solid rgba(105, 107, 54, 0.5)' }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full"
              style={{ border: '5px solid #696B36' }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ThingsToKnow;
