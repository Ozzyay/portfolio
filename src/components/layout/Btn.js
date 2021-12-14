import { useNavigate } from "react-router-dom";
import styles from "./Btn.module.scss";

const Btn = (props) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    const link = props.text;
    navigate(`/${link}`);
  };
  return (
    <div className={styles.btn} onClick={clickHandler}>
      <p className={styles.span}>{props.text}</p>
      <p className={styles.innerText}>{props.innerText}</p>
    </div>
  );
};

export default Btn;
