import React, { useState, useEffect } from 'react';
import './DrumMachine.css';

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('');
  const [audioLoaded, setAudioLoaded] = useState(false);

  // Audio data with the required drum sounds - optimized for performance
  const drumData = [
    { key: 'Q', id: 'Heater-1', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { key: 'W', id: 'Heater-2', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { key: 'E', id: 'Heater-3', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    { key: 'A', id: 'Heater-4', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3' },
    { key: 'S', id: 'Clap', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Clap.mp3' },
    { key: 'D', id: 'Open-HH', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Open-HH.mp3' },
    { key: 'Z', id: 'Kick-n\'-Hat', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    { key: 'X', id: 'Kick', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick.mp3' },
    { key: 'C', id: 'Closed-HH', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Closed-HH.mp3' }
  ];

  // Function to play drum sound and update display - optimized for performance
  const playDrum = (drum) => {
    const audio = document.getElementById(drum.key);
    if (audio && audioLoaded) {
      // Update display immediately for better UX
      setDisplayText(drum.id);
      
      // Reset audio to beginning and play immediately
      audio.currentTime = 0;
      
      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error(`Error playing audio for ${drum.key}:`, error);
          });
        }
      });
    }
  };

  // Preload all audio files for better performance
  useEffect(() => {
    const preloadAudio = async () => {
      try {
        const audioPromises = drumData.map(drum => {
          return new Promise((resolve, reject) => {
            const audio = new Audio();
            audio.preload = 'auto';
            audio.src = drum.audio;
            
            audio.addEventListener('canplaythrough', () => resolve(), { once: true });
            audio.addEventListener('error', () => reject(), { once: true });
            
            // Start loading
            audio.load();
          });
        });
        
        await Promise.all(audioPromises);
        setAudioLoaded(true);
        console.log('All audio files preloaded successfully');
      } catch (error) {
        console.error('Error preloading audio:', error);
        setAudioLoaded(true); // Still allow playback even if preloading fails
      }
    };
    
    preloadAudio();
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      const drum = drumData.find(d => d.key === key);
      if (drum) {
        playDrum(drum);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [audioLoaded]); // Re-run when audio is loaded

  return (
    <div id="drum-machine" className="drum-machine">
      <div id="display" className={`display ${!audioLoaded ? 'loading' : ''}`}>
        {!audioLoaded ? 'Loading...' : displayText}
      </div>
      
      <div className="drum-pads">
        {drumData.map((drum) => (
          <div
            key={drum.key}
            className="drum-pad"
            id={drum.id}
            onClick={() => playDrum(drum)}
          >
            {drum.key}
            <audio
              className="clip"
              id={drum.key}
              src={drum.audio}
              preload="auto"
              crossOrigin="anonymous"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine; 