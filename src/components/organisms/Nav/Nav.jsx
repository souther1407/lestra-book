import React, { useState } from "react";
import styles from "./nav.module.css";
import Text from "../../atoms/Text/Text";
import Avatar from "../../atoms/Avatar/Avatar";
const Nav = () => {
  const [currentSection, setCurrentSection] = useState("Last news");
  return (
    <nav className={styles.nav}>
      <p>Logo</p>
      <div className={styles.sections}>
        <div
          className={`${styles.section} ${
            currentSection === "Last news" && styles.current
          }`}
          onClick={() => setCurrentSection("Last news")}
        >
          <Text bold size="lg" color={"primary"}>
            Últimas noticias
          </Text>
        </div>
        <div
          className={`${styles.section} ${
            currentSection === "Chat" && styles.current
          }`}
          onClick={() => setCurrentSection("Chat")}
        >
          <Text bold size="lg" color={"primary"}>
            Chat
          </Text>
        </div>
        <div
          className={`${styles.section} ${
            currentSection === "My posts" && styles.current
          }`}
          onClick={() => setCurrentSection("My posts")}
        >
          <Text bold size="lg" color={"primary"}>
            Mis posts
          </Text>
        </div>
      </div>
      <div className={styles.options}>
        <div className={styles.profile}>
          <Avatar
            bordered
            size="md"
            src={
              "https://imgs.search.brave.com/6Logd6Iw8_Z7K-vEiVPKlvlRn3Xl2d4fMUMaVKMMQLc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE2LzExLzcw/LzM2MF9GXzYxNjEx/NzA3MV9OdTJLbVNl/bjcxYXBrYlhjQVlP/T2YyampjTEptcDRs/Qi5qcGc"
            }
          />
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
