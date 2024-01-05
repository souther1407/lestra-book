import React from "react";
import Icon from "../../atoms/Icon/Icon";
import styles from "./loadingScreen.module.css";
const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <Icon type={"loading"} size="big" color={"var(--primary)"} />
    </div>
  );
};

export default LoadingScreen;
