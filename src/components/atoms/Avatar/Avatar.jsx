import React from "react";
import styles from "./avatar.module.css";
const Avatar = ({ src, size = "md", bordered }) => {
  return (
    <img
      src={src}
      className={`${styles.avatar} ${styles[size]} ${
        bordered && styles.bordered
      }`}
    />
  );
};

export default Avatar;
