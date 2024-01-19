import React, { useState } from "react";
import styles from "./heartButton.module.css";
import Icon from "../../atoms/Icon/Icon";
const HeartButton = ({ onClick }) => {
  const [clicked, setCliked] = useState(false);
  const handleClick = () => {
    onClick();
    setCliked(clicked ? false : true);
  };
  return (
    <div
      className={`${styles.heartBtn} ${clicked && styles.fulled}`}
      onClick={handleClick}
    >
      {!clicked ? (
        <Icon type={"heart"} size="lg" color={"var(--secondary)"} />
      ) : (
        <Icon type={"heartFilled"} size="lg" color={"var(--secondary)"} />
      )}
    </div>
  );
};

export default HeartButton;
