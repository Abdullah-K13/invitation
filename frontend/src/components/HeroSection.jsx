import React, { useEffect, useState } from 'react';
import { weddingData } from '../data/mockData';

const Lantern = ({ style, className = '', size = 'md' }) => {
  const sizes = {
    sm: 'w-10 h-16 md:w-14 md:h-20',
    md: 'w-14 h-22 md:w-20 md:h-32',
    lg: 'w-20 h-32 md:w-24 md:h-40',
    xl: 'w-24 h-36 md:w-32 md:h-52'
  };

  return (
    <div
      className={`absolute ${sizes[size]} ${className}`}
      style={{
        ...style,
        animationDelay: `${Math.random() * 3}s`,
      }}
    >
      <img
        src={weddingData.images.lantern}
        alt="Lantern"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Image - Mughal Haveli Courtyard */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={weddingData.images.heroBg}
          alt="Mughal Courtyard"
          className="w-full h-full object-cover object-top"
          style={{ minHeight: '100vh' }}
        />
      </div>

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.15) 100%)' }}
      />

      {/* Floating Lanterns */}
      <Lantern size="lg" className="lantern" style={{ top: '3%', left: '3%', '--rotation': '7deg' }} />
      <Lantern size="md" className="lantern-alt" style={{ top: '10%', left: '12%', '--rotation': '-8deg' }} />
      <Lantern size="sm" className="lantern" style={{ top: '20%', left: '5%', '--rotation': '-7deg' }} />
      <Lantern size="md" className="lantern-alt" style={{ top: '6%', left: '20%', '--rotation': '5deg' }} />

      <Lantern size="lg" className="lantern-alt" style={{ top: '2%', right: '5%', '--rotation': '-7deg' }} />
      <Lantern size="md" className="lantern" style={{ top: '12%', right: '14%', '--rotation': '7deg' }} />
      <Lantern size="sm" className="lantern-alt" style={{ top: '18%', right: '3%', '--rotation': '10deg' }} />
      <Lantern size="md" className="lantern" style={{ top: '8%', right: '22%', '--rotation': '-5deg' }} />

      <Lantern size="sm" className="lantern" style={{ top: '2%', left: '42%', '--rotation': '3deg' }} />
      <Lantern size="sm" className="lantern-alt" style={{ top: '7%', right: '38%', '--rotation': '-6deg' }} />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-end min-h-screen px-4 pb-16 md:pb-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Bismillah */}
        <div className="text-center mb-6">
          <p
            className="font-cormorant text-lg md:text-xl mb-1"
            style={{ color: '#F3ECBA' }}
          >
            {weddingData.blessingArabic}
          </p>
          <p
            className="font-yaldevi text-sm md:text-base tracking-wider"
            style={{ color: '#F3ECBA' }}
          >
            {weddingData.blessing}
          </p>
        </div>

        {/* Blessings Text */}
        <div className="text-center mb-6 max-w-2xl">
          <p
            className="font-cormorant italic text-xl md:text-2xl mb-2"
            style={{ color: '#F3ECBA' }}
          >
            With the heavenly blessings of
          </p>
          <p
            className="font-cormorant italic text-xl md:text-2xl font-semibold mb-3"
            style={{ color: '#F3ECBA' }}
          >
            {weddingData.couple.groomParents.mother} &amp; {weddingData.couple.groomParents.father}
          </p>
          <p
            className="font-cormorant italic text-xl md:text-2xl font-semibold"
            style={{ color: '#F3ECBA' }}
          >
            {weddingData.couple.grandParents.maternal}
          </p>
        </div>

        {/* Invite Text */}
        <div className="text-center mb-4">
          <h2
            className="font-aboreto text-3xl md:text-5xl lg:text-6xl tracking-wider"
            style={{ color: '#F3ECBA' }}
          >
            INVITE
          </h2>
          <p
            className="font-cormorant italic text-xl md:text-2xl mt-3"
            style={{ color: '#F3ECBA' }}
          >
            you to the wedding celebration of
          </p>
        </div>
      </div>
    </section>
  );
};

export { Lantern };
export default HeroSection;
