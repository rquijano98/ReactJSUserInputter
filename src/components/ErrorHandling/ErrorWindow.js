import { click } from "@testing-library/user-event/dist/click";
import styles from "./ErrorWindow.module.css";

const ErrorWindow = (props) => {
  const clickHandler = (e) => {
    const clickedWindow = e.target.closest(`.${styles["error-window"]}`);
    if (!clickedWindow) {
      props.onClose();
      return;
    }

    if (e.target.classList.contains(styles["okay-button"])) {
      props.onClose();
      return;
    }
  };

  return (
    <div className={styles["error-popup"]} onClick={clickHandler}>
      <div className={styles["error-window"]}>
        <h2 className={styles["error-window-title"]}>Invalid input</h2>
        <p className={styles["error-window-text"]}>{props.message}</p>
        <button className={styles["okay-button"]}>Okay</button>
      </div>
    </div>
  );
};

export default ErrorWindow;
