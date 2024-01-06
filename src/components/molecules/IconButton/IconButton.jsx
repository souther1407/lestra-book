import React, { useState } from "react";
import Icon from "../../atoms/Icon/Icon";
import styles from "./iconButton.module.css";
const IconButton = ({
  type,
  size = "md",
  color = "inherit",
  colorStroke,
  onClick,
}) => {
  const [animating, setAnimating] = useState(false);
  const handleAnimating = () => {
    setAnimating(true);
    onClick();
  };
  return (
    <button className={styles.iconButton} onClick={handleAnimating}>
      <Icon type={type} size={size} color={color} colorStroke={colorStroke} />
      <div
        className={`${styles.shadow} ${animating && styles.animanting}`}
        onAnimationEnd={() => setAnimating(false)}
      ></div>
    </button>
  );
};

export default IconButton;
