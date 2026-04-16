import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Autoplay blocked by browser
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://framerusercontent.com/assets/7dqA8jlZHij9fuyhj602jarV4eg.mp3"
        loop
        preload="metadata"
      />
      <button
        onClick={togglePlay}
        className={`fixed top-4 right-4 z-50 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 ${
          isPlaying ? 'music-btn' : ''
        }`}
        style={{
          backgroundColor: '#F86800',
          color: '#333',
        }}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 size={20} />
        ) : (
          <VolumeX size={20} />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
