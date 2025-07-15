import React, { createContext, useContext, useReducer } from 'react';

// Action types
const ACTIONS = {
  SET_DISPLAY_TEXT: 'SET_DISPLAY_TEXT',
  SET_AUDIO_LOADED: 'SET_AUDIO_LOADED',
  PLAY_DRUM: 'PLAY_DRUM'
};

// Initial state
const initialState = {
  displayText: '',
  audioLoaded: false,
  lastPlayed: null
};

// Reducer function
const drumMachineReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DISPLAY_TEXT:
      return {
        ...state,
        displayText: action.payload
      };
    case ACTIONS.SET_AUDIO_LOADED:
      return {
        ...state,
        audioLoaded: action.payload
      };
    case ACTIONS.PLAY_DRUM:
      return {
        ...state,
        displayText: action.payload.id,
        lastPlayed: action.payload
      };
    default:
      return state;
  }
};

// Create context
const DrumMachineContext = createContext();

// Provider component
export const DrumMachineProvider = ({ children }) => {
  const [state, dispatch] = useReducer(drumMachineReducer, initialState);

  const setDisplayText = (text) => {
    dispatch({ type: ACTIONS.SET_DISPLAY_TEXT, payload: text });
  };

  const setAudioLoaded = (loaded) => {
    dispatch({ type: ACTIONS.SET_AUDIO_LOADED, payload: loaded });
  };

  const playDrum = (drum) => {
    dispatch({ type: ACTIONS.PLAY_DRUM, payload: drum });
  };

  const value = {
    ...state,
    setDisplayText,
    setAudioLoaded,
    playDrum
  };

  return (
    <DrumMachineContext.Provider value={value}>
      {children}
    </DrumMachineContext.Provider>
  );
};

// Custom hook to use the context
export const useDrumMachine = () => {
  const context = useContext(DrumMachineContext);
  if (!context) {
    throw new Error('useDrumMachine must be used within a DrumMachineProvider');
  }
  return context;
}; 