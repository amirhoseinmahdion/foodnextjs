import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <Apple />
      <Tesla />
      <Binance />
      <SpaceX />
    </div>
  );
};

export default Logo;
