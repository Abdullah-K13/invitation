import React, { useEffect, useRef, useState } from 'react';
import { weddingData } from '../data/mockData';
import { Lantern } from './HeroSection';

const NamesSection = () => {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #3d6b6e 0%, #4a7d7a 50%, #5a8f8a 100%)'
      }}
    >
      {/* Background - painted sky with lanterns */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #5b85a8 0%, #7ba0bf 30%, #a0bdd4 60%, #c5d6e3 100%)'
        }}
      />

      {/* Damask overlay */}
      <div className="absolute inset-0 damask-overlay" />

      {/* Many floating lanterns */}
      <Lantern size="xl" className="lantern" style={{ top: '5%', left: '2%', '--rotation': '7deg' }} />
      <Lantern size="lg" className="lantern-alt" style={{ top: '10%', left: '12%', '--rotation': '-8deg' }} />
      <Lantern size="md" className="lantern" style={{ top: '3%', left: '22%', '--rotation': '-7deg' }} />
      <Lantern size="lg" className="lantern-alt" style={{ top: '15%', left: '8%', '--rotation': '10deg' }} />
      <Lantern size="md" className="lantern" style={{ top: '25%', left: '3%', '--rotation': '-5deg' }} />
      <Lantern size="sm" className="lantern-alt" style={{ top: '35%', left: '15%', '--rotation': '7deg' }} />

      <Lantern size="xl" className="lantern-alt" style={{ top: '2%', right: '3%', '--rotation': '-7deg' }} />
      <Lantern size="lg" className="lantern" style={{ top: '12%', right: '15%', '--rotation': '7deg' }} />
      <Lantern size="md" className="lantern-alt" style={{ top: '5%', right: '25%', '--rotation': '10deg' }} />
      <Lantern size="lg" className="lantern" style={{ top: '18%', right: '5%', '--rotation': '-10deg' }} />
      <Lantern size="md" className="lantern-alt" style={{ top: '30%', right: '10%', '--rotation': '5deg' }} />
      <Lantern size="sm" className="lantern" style={{ top: '40%', right: '20%', '--rotation': '-7deg' }} />

      {/* Center lanterns */}
      <Lantern size="lg" className="lantern" style={{ top: '0%', left: '35%', '--rotation': '3deg' }} />
      <Lantern size="md" className="lantern-alt" style={{ top: '8%', left: '45%', '--rotation': '-6deg' }} />
      <Lantern size="lg" className="lantern" style={{ top: '2%', right: '35%', '--rotation': '8deg' }} />
      <Lantern size="md" className="lantern-alt" style={{ top: '12%', right: '40%', '--rotation': '-4deg' }} />
      <Lantern size="sm" className="lantern" style={{ top: '20%', left: '48%', '--rotation': '5deg' }} />
      <Lantern size="sm" className="lantern-alt" style={{ top: '50%', left: '5%', '--rotation': '-3deg' }} />
      <Lantern size="sm" className="lantern" style={{ top: '55%', right: '8%', '--rotation': '6deg' }} />
      <Lantern size="md" className="lantern-alt" style={{ top: '45%', left: '25%', '--rotation': '-8deg' }} />
      <Lantern size="md" className="lantern" style={{ top: '48%', right: '25%', '--rotation': '4deg' }} />

      {/* Names Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div
          className={`text-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1
            className="font-cormorant text-7xl md:text-[100px] lg:text-[130px] uppercase leading-none tracking-tight"
            style={{ color: '#F3ECBA', letterSpacing: '-0.01em', lineHeight: '0.85' }}
          >
            {weddingData.couple.groom}
          </h1>
        </div>

        <div
          className={`text-center my-2 md:my-3 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2
            className="font-cormorant text-3xl md:text-[42px] tracking-[0.42em] uppercase"
            style={{ color: '#F3ECBA', lineHeight: '60px' }}
          >
            WEDS
          </h2>
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h1
            className="font-cormorant text-7xl md:text-[100px] lg:text-[130px] uppercase leading-none tracking-tight"
            style={{ color: '#F3ECBA', letterSpacing: '-0.01em', lineHeight: '0.85' }}
          >
            {weddingData.couple.bride}
          </h1>
        </div>

        {/* Daughter of */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p
            className="font-cormorant italic text-xl md:text-2xl mb-2"
            style={{ color: 'rgba(243, 236, 186, 0.85)' }}
          >
            Daughter of
          </p>
          <p
            className="font-cormorant italic text-xl md:text-2xl font-semibold"
            style={{ color: '#F3ECBA' }}
          >
            {weddingData.couple.brideParents.mother} &amp; {weddingData.couple.brideParents.father}
          </p>
        </div>

        {/* On the following events */}
        <div
          className={`text-center mt-10 transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p
            className="font-cormorant italic text-xl md:text-2xl"
            style={{ color: 'rgba(243, 236, 186, 0.85)' }}
          >
            On the following events
          </p>
        </div>
      </div>
    </section>
  );
};

export default NamesSection;
