import { Link } from "react-router-dom";
import styles from "./Menu.module.css"; // Import CSS module
import VideoBackground from "../../components/VideoBackground";
import AudioPlayer from "../../components/AudioPlayer";

const Menu = () => {
  return (
    <div className={styles.container}>
      <VideoBackground link="src/assets/background/project-hunters-league-of-legends-moewalls-com.mp4" />
      <div className={styles.content}>
        <div className={styles.title}>
          <img
            src="src\assets\img\lol-logo-rendered-hi-res.png"
            alt="league of legends main logo"
          />
          <h1>Memory Game</h1>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} to="/app">
              Continue
            </Link>
          </li>
        </ul>
        <div className={styles.footer}>
          <AudioPlayer
            src="src\assets\Audio\Ignite (ft. Zedd)  Worlds 2016 - League of Legends.mp3"
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
