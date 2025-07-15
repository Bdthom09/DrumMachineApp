import React from 'react';
import { useDrumMachine } from '../context/DrumMachineContext';

const Display = () => {
  const { displayText, audioLoaded } = useDrumMachine();

  return (
    <div id="display" className={`display ${!audioLoaded ? 'loading' : ''}`}>
      {!audioLoaded ? 'Loading...' : displayText}
    </div>
  );
};

export default Display; 