import React from "react";
import styles from "./textButton.module.css";
import Text from "../../atoms/Text/Text";
const TextButton = ({ children, type = "fulled", color = "primary" }) => {
  return (
    <button className={`${styles.textButton} ${styles[type]} ${styles[color]}`}>
      <Text bold>{children}</Text>
    </button>
  );
};

export default TextButton;
