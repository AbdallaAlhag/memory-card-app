// src/components/VideoBackground.js
import "./VideoBackground.css"; // Import the CSS file for styling

const VideoBackground = ({ link }) => {
  return (
    <div className="video-background-wrapper">
      <video className="video-background" autoPlay muted loop>
        <source
          // src="{./assets/background/3leagueBackground.mp4}"
          src={link}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
