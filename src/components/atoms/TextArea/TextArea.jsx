import React from "react";
import styles from "./textArea.module.css";

const TextArea = ({ ...props }) => {
  return <textarea {...props} className={`${styles.areaPost}`}></textarea>;
};

export default TextArea;
