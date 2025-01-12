import { useState } from "react";
import styles from "../components/Header.module.css";
import IconList from "./IconList";

function Header({ onChange, displayDetected }) {
  const [fileImage, setFileImage] = useState(null);

  function onSwitch(event) {
    setFileImage(URL.createObjectURL(event.target.files[0]));
  }

  function OnProceed() {}

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
            {!fileImage && (
              <input type="file" onChange={onSwitch} className={styles.file} />
            )}
           {fileImage && <img src={fileImage} className={styles.img} /> }
            {displayDetected && (
              <span className={styles.dictected}>Desktop detected</span>
            )}
          </div>
          <IconList first={fileImage} />
        </div>
        <button
          className={styles.button}
          onClick={!fileImage ? OnProceed : onChange}
          disabled={displayDetected}
        >
          Take picture and continue
        </button>
      </div>
    </main>
  );

  // const [image, setImage] = useState(null)

  // const onImageChange = (event) => {
  //  if (event.target.files && event.target.files[0]) {
  //    setImage(URL.createObjectURL(event.target.files[0]));
  //  }
  // }

  // return (
  //   <div>
  //     <input type="file" onChange={onImageChange} className="filetype" />
  //     <img alt="preview image" src={image} />
  //   </div>
  // )
}

export default Header;
