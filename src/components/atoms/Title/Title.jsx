import React from "react";
import styles from "./title.module.css";

const Title = ({ type = "title", children, size = "xlg", color }) => {
  if (type === "title")
    return <h1 className={`${styles.title} ${styles[size]}`}>{children}</h1>;
  else return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
