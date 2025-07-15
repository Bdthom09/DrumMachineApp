import React from 'react';

const DrumPad = ({ drum, onDrumClick }) => {
  return (
    <div
      className="drum-pad"
      id={drum.id}
      onClick={() => onDrumClick(drum)}
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
  );
};

export default DrumPad; 