// import { useEffect, useRef } from "react";
import { useRef, useState } from "react";
import "./AudioPlayer.css";

// const AutoPlayAudio = ({ src, loop = false, volume = 1.0 }) => {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     const playAudio = () => {
//       if (audioRef.current) {
//         audioRef.current.volume = volume;
//         audioRef.current.play().catch((error) => {
//           console.error("Error playing audio:", error);
//         });
//       }
//     };

//     window.addEventListener("click", playAudio);

//     // Cleanup function to remove event listener
//     return () => {
//       window.removeEventListener("click", playAudio);
//     };
//   }, [volume, src, loop]); // Add necessary dependencies

//   return <audio ref={audioRef} src={src} loop={loop}></audio>;
// };

const AudioPlayer = ({ src, loop = false, volume = 1.0 }) => {
  const [play, setPlay] = useState(true);
  const audioRef = useRef(null);

  // const playAudio = () => {
  //   audioRef.current.volume = volume;
  //   audioRef.current.play();
  // };

  // const pauseAudio = () => {
  //   audioRef.current.pause();
  // };

  const playAudio = () => {
    if (play) {
      audioRef.current.volume = volume;
      audioRef.current.play();
      setPlay(false);
    } else {
      audioRef.current.pause();
      setPlay(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop={loop}></audio>
      {/* <button onClick={playAudio}>play/pause</button> */}
      <div id="button-container" onClick={playAudio}>
        <button id="play-button" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-20 -20 140 140"
            width={100}
            height={100}
            version="1.1"
          >
            {/* top line */}
            <path
              d="M 90 50 L 10 10"
              stroke="white"
              strokeWidth={20}
              strokeLinecap="round"
            >
              <animate
                id="lineAnimation"
                dur="0.3s"
                begin="startAnimation.begin"
                attributeName="d"
                values="M 90 50 L 10 10; M50 50 L50 50; M20 90 L20 50"
                fill="freeze"
              />
              <animate
                dur="0.3s"
                begin="reverseAnimation.begin"
                attributeName="d"
                values="M20 90 L20 50; M50 50 L50 50; M 90 50 L 10 10"
                fill="freeze"
              />
              <animate
                dur="0.7s"
                begin="lineAnimation.end"
                attributeName="d"
                values="M20 90 L20 50; M20 90 L20 80; M20 90 L20 50"
                repeatCount="indefinite"
              />
            </path>
            {/* bottom line */}
            <path
              d="M 90 50 L 10 90"
              stroke="white"
              strokeWidth={20}
              strokeLinecap="round"
            >
              <animate
                dur="0.3s"
                begin="startAnimation.begin"
                attributeName="d"
                values="M 90 50 L 10 90; M50 50 L 50 50; M50 90 L50 20"
                fill="freeze"
              />
              <animate
                dur="0.3s"
                begin="reverseAnimation.begin"
                attributeName="d"
                values="M50 90 L50 20; M50 50 L 50 50; M 90 50 L 10 90"
                fill="freeze"
              />
              <animate
                dur="0.8s"
                begin="lineAnimation.end"
                attributeName="d"
                values="M50 90 L50 20; M50 90 L50 50; M50 90 L50 20"
                repeatCount="indefinite"
              />
            </path>
            {/* left line */}
            <path
              d="M 10 10 L 10 90"
              stroke="white"
              strokeWidth={20}
              strokeLinecap="round"
            >
              <animate
                dur="0.3s"
                begin="startAnimation.begin"
                attributeName="d"
                values="M 10 10 L 10 90; M 50 50 L 50 50; M80 90 L80 50"
                fill="freeze"
              />
              <animate
                dur="0.3s"
                begin="reverseAnimation.begin"
                attributeName="d"
                values="M80 90 L80 50; M 50 50 L 50 50; M 10 10 L 10 90"
                fill="freeze"
              />
              <animate
                dur="0.9s"
                begin="lineAnimation.end"
                attributeName="d"
                values="M80 90 L80 50; M80 90 L80 80; M80 90 L80 50"
                repeatCount="indefinite"
              />
            </path>
            {/*  controls */}
            {/* these are on top of the visible circle.  Their height changes depending on which is active
    Opacity is set to 0 so you can't see them*/}
            <rect width="100%" height="100%" fill="rgba(0,0,0,0)">
              <animate
                dur="0.01s"
                id="startAnimation"
                attributeName="height"
                values="100%; 0%"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.01s"
                attributeName="height"
                values="0%; 100%"
                fill="freeze"
                begin="reverseAnimation.end"
              />
            </rect>
            <rect width="100%" height="0%" fill="rgba(0,0,0,0)">
              <animate
                dur="0.001s"
                id="reverseAnimation"
                attributeName="height"
                values="100%; 0%"
                fill="freeze"
                begin="click"
              />
              <animate
                dur="0.001s"
                attributeName="height"
                values="0%; 100%"
                begin="startAnimation.end"
                fill="freeze"
              />
            </rect>
          </svg>
        </button>
      </div>
    </>
  );
};

export default AudioPlayer;
