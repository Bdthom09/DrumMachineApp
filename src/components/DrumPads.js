import React from 'react';
import DrumPad from './DrumPad';
import { useAudio } from '../hooks/useAudio';
import { useKeyboard } from '../hooks/useKeyboard';
import { useDrumMachine } from '../context/DrumMachineContext';

// Audio data with the required drum sounds
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

const DrumPads = () => {
  const { playDrum } = useDrumMachine();
  const { audioLoaded, playAudio } = useAudio(drumData);

  // Create key map for keyboard events
  const keyMap = drumData.reduce((acc, drum) => {
    acc[drum.key] = drum;
    return acc;
  }, {});

  // Handle drum click
  const handleDrumClick = (drum) => {
    playAudio(drum.key);
    playDrum(drum);
  };

  // Handle keyboard press
  const handleKeyPress = (drum) => {
    playAudio(drum.key);
    playDrum(drum);
  };

  // Set up keyboard events
  useKeyboard(keyMap, handleKeyPress);

  return (
    <div className="drum-pads">
      {drumData.map((drum) => (
        <DrumPad
          key={drum.key}
          drum={drum}
          onDrumClick={handleDrumClick}
        />
      ))}
    </div>
  );
};

export default DrumPads; 