import React from "react";
import styles from "./input.module.css";
const Input = ({ id, variant = "lined", onChange, onError, ...otherProps }) => {
  return (
    <input
      className={`${styles.input} ${styles[variant]}`}
      id={id}
      {...otherProps}
      onChange={(e) => onChange(id, e.target.value)}
    />
  );
};

export default Input;
