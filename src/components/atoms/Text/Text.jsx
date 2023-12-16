import React from "react";
import styles from "./text.module.css";
const Text = ({ children, size = "md", color, bold }) => {
  return (
    <p
      className={`${styles.text} ${styles[size]} ${color && styles[color]} ${
        bold && styles.bold
      }`}
    >
      {children}
    </p>
  );
};

export default Text;
