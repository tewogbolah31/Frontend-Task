import { useState } from "react";
import styles from "../components/Header.module.css";
import IconList from "./IconList";
import img from "../assets/person.jpg";

function Header({ onChange, displayDetected }) {
  const [switchIcon, setSwitchIcon] = useState(false);

  function onSwicth() {
    setSwitchIcon(true);
  }

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <h2 className={styles.h2}>System check</h2>
        <p className={styles.paragraph}>
          We utilize your camera image to ensure fairness for all participants,
          and we also employ both your camera and microphone for a video
          questions where you will be prompted to record a response using your
          camera or webcam, so it's essential to verify that your camera and
          microphone are functioning correctly and that you have a stable
          internet connection. To do this, please position yourself in front of
          your camera, ensuring that your entire face is clearly visible on the
          screen. This includes your forehead, eyes, ears, nose, and lips. You
          can initiate a 5-second recording of yourself by clicking the button
          below.
        </p>
        <div className={styles.select}>
          <div className={displayDetected ? styles.uploaded : styles.upload}>
            {!switchIcon && (
              <input
                type="image"
                accept="image/png, image/jpeg"
                onClick={onSwicth}
              />
            )}
            {switchIcon && <img src={img} className={styles.img} />}
            {displayDetected && (
              <span className={styles.dictected}>Desktop detected</span>
            )}
          </div>
          <IconList first={switchIcon} />
        </div>
        <button
          className={styles.button}
          onClick={!switchIcon ? onSwicth : onChange}
          disabled={displayDetected}
        >
          Take picture and continue
        </button>
      </div>
    </main>
  );
}

export default Header;
