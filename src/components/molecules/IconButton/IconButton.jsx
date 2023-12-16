import React, { useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import styles from "./iconButton.module.css";
const IconButton = ({ type, size = "md", onClick }) => {
  const [animating, setAnimating] = useState(false);
  const handleAnimating = () => {
    setAnimating(true);
    onClick();
  };
  return (
    <button className={styles.iconButton} onClick={handleAnimating}>
      <Icon type={type} size={size} />
      <div
        className={`${styles.shadow} ${animating && styles.animanting}`}
        onAnimationEnd={() => setAnimating(false)}
      ></div>
    </button>
  );
};

export default IconButton;
