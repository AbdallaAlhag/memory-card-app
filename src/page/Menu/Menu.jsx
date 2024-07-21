import { Link } from "react-router-dom";
import styles from "./Menu.module.css"; // Import CSS module
import VideoBackground from "../../components/VideoBackground";

const Menu = () => {
  return (
    <div className={styles.container}>
      <VideoBackground />
      <h1 className={styles.title}>Hii Menu</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link className={styles.link} to="/app">
            App
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
