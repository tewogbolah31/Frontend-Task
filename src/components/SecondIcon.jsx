import styles from "../components/SecondIcon.module.css";

function SecondIcon({ text, Icon, third, fourth, Span }) {
  return (
    <li className={styles.box}>
      <div className={third || fourth ? styles.iconBox3 : styles.iconBox}>
        {!fourth && <Icon className={third ? styles.icon3 : styles.icon} />}
        {fourth && <Icon className={styles.icon4} />}
        <p className={styles.text}>{text}</p>
        {!fourth && <span className={third ? styles.spam3 : styles.spam}>
          <Span className={styles.spamIcon} />
        </span>}
        {fourth && <span className={styles.spam4}>
          <Span className={styles.spamIcon} />
        </span>}
      </div>
    </li>
  );
}

export default SecondIcon;
