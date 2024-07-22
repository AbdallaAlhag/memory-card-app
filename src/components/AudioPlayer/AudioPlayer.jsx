import { useEffect, useRef } from "react";

const AutoPlayAudio = ({ src, loop = false, volume = 1.0 }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    };

    window.addEventListener("click", playAudio);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, [volume, src, loop]); // Add necessary dependencies

  return <audio ref={audioRef} src={src} loop={loop}></audio>;
};

export default AutoPlayAudio;


// const AudioPlayer = ({ src, loop = false, volume = 1.0 }) => {
//   const audioRef = useRef(null);

//   const playAudio = () => {
//     audioRef.current.volume = volume;
//     audioRef.current.play();
//   };

//   const pauseAudio = () => {
//     audioRef.current.pause();
//   };

//   return (
//     <div>
//       <audio ref={audioRef} src={src} loop={loop}></audio>
//       <button onClick={playAudio}>Play</button>
//       <button onClick={pauseAudio}>Pause</button>
//     </div>
//   );
// };