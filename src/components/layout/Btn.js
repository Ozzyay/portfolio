import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Btn = (props) => {
  const [classes, setClasses] = useState(props.classes);
  const navigate = useNavigate();
  const hoverHandler = (e) => {
    setClasses("btn");
  };
  const clickHandler = (e) => {
    const link = props.text;
    navigate(`/${link}`);
  };
  return (
    <button
      className={classes}
      onMouseEnter={hoverHandler}
      onClick={clickHandler}
    >
      {props.text}
    </button>
  );
};

export default Btn;
