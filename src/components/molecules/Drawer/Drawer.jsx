import React from "react";
import styles from "./drawer.module.css";
import Icon from "../../atoms/Icon/Icon";
const Drawer = ({ show, children, onClose }) => {
  return (
    <div
      className={`${styles.drawer} ${show && styles.show}`}
      onClick={onClose}
    >
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={onClose}>
          <Icon size="xlg" type={"close"} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
