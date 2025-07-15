import React, { useState, useEffect } from 'react';
import './DrumMachine.css';

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState('');

  // Audio data with the required drum sounds - using working URLs
  const drumData = [
    { key: 'Q', id: 'Heater-1', audio: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/testable-projects-fcc/audio/Heater-1.mp3' },
    { key: 'W', id: 'Heater-2', audio: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/testable-projects-fcc/audio/Heater-2.mp3' },
    { key: 'E', id: 'Heater-3', audio: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/testable-projects-fcc/audio/Heater-3.mp3' },
    { key: 'A', id: 'Heater-4', audio: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/testable-projects-fcc/audio/Heater-4.mp3' },
    { key: 'S', id: 'Clap', audio: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/testable-projects-fcc/audio/Clap.mp3' },
    { key: 'D', id: 'Open-HH', audio: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/testable-projects-fcc/audio/Open-HH.mp3' },
    { key: 'Z', id: 'Kick-n\'-Hat', audio: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
    { key: 'X', id: 'Kick', audio: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/testable-projects-fcc/audio/Kick.mp3' },
    { key: 'C', id: 'Closed-HH', audio: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/main/build/testable-projects-fcc/audio/Closed-HH.mp3' }
  ];

  // Function to play drum sound and update display
  const playDrum = (drum) => {
    const audio = document.getElementById(drum.key);
    if (audio) {
      // Update display immediately for better UX
      setDisplayText(drum.id);
      
      // Reset audio to beginning and play
      audio.currentTime = 0;
      
      // Try to play the audio with better error handling
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error(`Error playing audio for ${drum.key}:`, error);
          // Audio failed but display is already updated
        });
      }
    }
  };

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
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="drum-machine" className="drum-machine">
      <div id="display" className="display">
        {displayText}
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrumMachine; 