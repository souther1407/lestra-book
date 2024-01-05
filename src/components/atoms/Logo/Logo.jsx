import React from "react";
import LogoImg from "../../../assets/Logo.png";
import styles from "./logo.module.css";
const Logo = ({ size = "md" }) => {
  return <img className={`${styles.logo} ${styles[size]}`} src={LogoImg} />;
};

export default Logo;
