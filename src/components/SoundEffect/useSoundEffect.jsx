import { useRef } from 'react';

const useSoundEffect = (soundSrc) => {
  const audioRef = useRef(new Audio(soundSrc));

  const playSound = () => {
    console.log('hi')
    audioRef.current.currentTime = 0; // Reset to start
    audioRef.current.play();
  };

  return playSound;
};

export default useSoundEffect;