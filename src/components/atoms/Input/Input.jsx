import React from "react";
import styles from "./input.module.css";
const Input = ({ id, onChange, onError, ...otherProps }) => {
  return (
    <input
      className={styles.input}
      id={id}
      {...otherProps}
      onChange={(e) => onChange(id, e.target.value)}
    />
  );
};

export default Input;
