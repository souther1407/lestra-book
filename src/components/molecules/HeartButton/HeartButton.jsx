import React, { useState } from "react";
import styles from "./heartButton.module.css";
import Icon from "../../atoms/Icon/Icon";
const HeartButton = () => {
  const [clicked, setCliked] = useState(false);
  return (
    <div
      className={`${styles.heartBtn} ${clicked && styles.fulled}`}
      onClick={() => setCliked(clicked ? false : true)}
    >
      {!clicked ? (
        <Icon type={"heart"} size="lg" color={"var(--secondary)"} />
      ) : (
        <Icon type={"heartFilled"} size="lg" color={"var(--secondary)"} />
      )}
    </div>
  );
};

export default HeartButton;
