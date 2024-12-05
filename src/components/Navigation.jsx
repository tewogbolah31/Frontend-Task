import Styles from "../components/Navigation.module.css";
import logo from "../assets/logo.png";
import time from "../assets/time.png";
import eye from "../assets/eye.png";

function Navigation() {
  return (
    <nav className={Styles.nav__box}>
      <div className={Styles.nav1}>
        <div>
          <img src={logo} className={Styles.logo} />
        </div>
        <div>
          <h2>Frontend developer</h2>
          <p className={Styles.text}>skills assesement test</p>
        </div>
      </div>
      <div className={Styles.nav2}>
        <div className={Styles.time__box}>
          <img src={time} className={Styles.time__img} />
          <p className={Styles.time__text}>
            <i className={Styles.time__bold}>29:10</i> time left
          </p>
        </div>
        <div>
          <img src={eye} className={Styles.eye} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
