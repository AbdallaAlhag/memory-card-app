import { Link } from "react-router-dom";
import styles from "./Menu.module.css"; // Import CSS module
import VideoBackground from "../../components/VideoBackground";

const Menu = () => {
  return (
    <div className={styles.container}>
      <VideoBackground link="src/assets/background/project-hunters-league-of-legends-moewalls-com.mp4" />
      <div className={styles.content}>
          <div className={styles.title}>
            <img src="src\assets\lol-logo-rendered-hi-res.png" alt="league of legends main logo" />
            <h1>Memory Game</h1>
          </div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link className={styles.link} to="/app">
                Continue
              </Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Menu;
