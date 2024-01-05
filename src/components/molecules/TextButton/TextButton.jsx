import React from "react";
import styles from "./textButton.module.css";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
const TextButton = ({
  children,
  type = "fulled",
  color = "primary",
  onClick,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.textButton} ${styles[type]} ${styles[color]}`}
    >
      {icon && <Icon type={icon} color={"inherit"} size="md" />}
      <Text bold>{children}</Text>
    </button>
  );
};

export default TextButton;
