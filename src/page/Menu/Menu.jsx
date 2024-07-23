import { Link } from "react-router-dom";
import styles from "./Menu.module.css"; // Import CSS module
import VideoBackground from "../../components/VideoBackground";
import AudioPlayer from "../../components/AudioPlayer";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <div className={styles.container}>
      <VideoBackground link="./assets/background/project-hunters-league-of-legends-moewalls-com.mp4" />
      <div className={styles.content}>
        <div className={styles.title}>
          <motion.div
            className={styles.icon}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="./assets/img/lol-logo-rendered-hi-res.png"
              alt="league of legends main logo"
            />
          </motion.div>
          <motion.h1
            className={styles.titleGame}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1>Memory Game</h1>
          </motion.h1>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <motion.button
              className={styles.continueButton}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link className={styles.link} to="/app">
                Continue
              </Link>
            </motion.button>
          </li>
        </ul>
        <div className={styles.footer}>
          <motion.button
            className={styles.soundButton}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <AudioPlayer
              src="./assets/Audio/Ignite (ft. Zedd)  Worlds 2016 - League of Legends.mp3"
              loop={true}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
