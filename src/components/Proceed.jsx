import styles from "./Proceed.module.css";

function Proceed({ onClose, detected }) {
  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div className={styles.start}>
            <h3>Start Assessment</h3>
            <button className={styles.close} onClick={onClose}>Close</button>
          </div>
          <div className={styles.text}>
            <h3>Proceed to start assessment</h3>
            <p>
              Kindly keep to the rule of the assesment and sit up, stay infront
              of the camera/Webcam and start your assesement.
            </p>
          </div>
          <button className={styles.button} onClick={detected}>Proceed</button>
        </div>
      </div>
    </>
  );
}

export default Proceed;
