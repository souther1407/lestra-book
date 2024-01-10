import React from "react";
import styles from "./modal.module.css";
import Icon from "../../atoms/Icon/Icon";
import Title from "../../atoms/Title/Title";

const Modal = ({ show, children, onClose, title}) => {
  return (
    <div className={`${styles.modal} ${show && styles.show}`} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close} onClick={onClose}>
          <Title size="lg" >{title}</Title>
          <Icon size="xlg" type={"close"} />
        </div>
        <hr />
        {children}
      </div>
    </div>
  );
};

export default Modal;
