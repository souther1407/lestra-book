import React, { useState } from "react";
import styles from "./popOut.module.css";

const PopOut = ({ children, componente }) => {
  const [showPopOut, setShowPopOut] = useState(false);
  return (
    <div
      className={`${styles.popOut}}`}
      onMouseLeave={() => {
        setShowPopOut(false);
      }}
    >
      <div
        className={styles.container}
        onMouseEnter={() => {
          setShowPopOut(true);
        }}
      >
        {componente()}
      </div>
      {showPopOut && <div className={styles.children}>{children}</div>}
    </div>
  );
};

export default PopOut;
