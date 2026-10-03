import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import NamesSection from './components/NamesSection';
import EventsSection from './components/EventsSection';
import BrideGroomSection from './components/BrideGroomSection';
import RSVPSection from './components/RSVPSection';
import ThingsToKnow from './components/ThingsToKnow';
import FooterSection from './components/FooterSection';
import MusicPlayer from './components/MusicPlayer';
import { weddingData } from './data/mockData';

const WeddingInvitation = () => {
  return (
    <div 
      className="w-full max-w-[1400px] mx-auto relative bg-black" 
      style={{ 
        boxShadow: '0 0 60px rgba(0,0,0,0.4)',
        backgroundImage: `url(${weddingData.images.heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      <MusicPlayer />
      <HeroSection />
      <NamesSection />
      <EventsSection />
      <BrideGroomSection />
      <RSVPSection />
      <ThingsToKnow />
      <FooterSection />
    </div>
  );
};

function App() {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeddingInvitation />} />
          <Route path="*" element={<WeddingInvitation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
