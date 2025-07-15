import React from 'react';
import { DrumMachineProvider } from './context/DrumMachineContext';
import Display from './components/Display';
import DrumPads from './components/DrumPads';
import './DrumMachine.css';

const DrumMachine = () => {
  return (
    <DrumMachineProvider>
      <div id="drum-machine" className="drum-machine">
        <Display />
        <DrumPads />
      </div>
    </DrumMachineProvider>
  );
};

export default DrumMachine; 