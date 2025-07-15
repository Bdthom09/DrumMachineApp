import { useEffect, useCallback } from 'react';

export const useKeyboard = (keyMap, onKeyPress) => {
  const handleKeyPress = useCallback((event) => {
    const key = event.key.toUpperCase();
    const action = keyMap[key];
    
    if (action) {
      event.preventDefault();
      onKeyPress(action);
    }
  }, [keyMap, onKeyPress]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
}; 