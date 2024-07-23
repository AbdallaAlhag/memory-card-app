import { useRef } from 'react';

const useSoundEffect = (soundSrc) => {
  const audioRef = useRef(new Audio(soundSrc));

  const playSound = () => {
    audioRef.current.currentTime = 0; // Reset to start
    audioRef.current.play();
  };

  return playSound;
};

export default useSoundEffect;