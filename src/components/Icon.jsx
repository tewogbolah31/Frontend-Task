import styles from "../components/Icon.module.css";

function Icon({ text, Icon }) {
  return (
    <li className={styles.box}>
      <div className={styles.iconBox}>
        <Icon className={styles.icon} />
        <div>
          <p className={styles.text}>{text}</p>
        </div>
        <span className={styles.spam}></span>
      </div>
    </li>
  );
}

export default Icon;
