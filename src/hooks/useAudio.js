import { useState, useEffect, useCallback } from 'react';

export const useAudio = (audioUrls) => {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [audioElements, setAudioElements] = useState({});

  // Preload all audio files
  useEffect(() => {
    const preloadAudio = async () => {
      try {
        const audioPromises = audioUrls.map(({ key, audio }) => {
          return new Promise((resolve, reject) => {
            const audioElement = new Audio();
            audioElement.preload = 'auto';
            audioElement.src = audio;
            
            audioElement.addEventListener('canplaythrough', () => {
              resolve({ key, audioElement });
            }, { once: true });
            
            audioElement.addEventListener('error', () => {
              reject(new Error(`Failed to load audio for ${key}`));
            }, { once: true });
            
            audioElement.load();
          });
        });
        
        const loadedAudios = await Promise.all(audioPromises);
        const audioMap = {};
        
        loadedAudios.forEach(({ key, audioElement }) => {
          audioMap[key] = audioElement;
        });
        
        setAudioElements(audioMap);
        setAudioLoaded(true);
        console.log('All audio files preloaded successfully');
      } catch (error) {
        console.error('Error preloading audio:', error);
        setAudioLoaded(true); // Still allow playback even if preloading fails
      }
    };
    
    preloadAudio();
  }, [audioUrls]);

  // Play audio function
  const playAudio = useCallback((key) => {
    const audio = audioElements[key];
    if (audio && audioLoaded) {
      audio.currentTime = 0;
      
      requestAnimationFrame(() => {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error(`Error playing audio for ${key}:`, error);
          });
        }
      });
    }
  }, [audioElements, audioLoaded]);

  return { audioLoaded, playAudio };
}; 