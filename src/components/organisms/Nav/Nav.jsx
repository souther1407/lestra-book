import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import Text from "../../atoms/Text/Text";
import Avatar from "../../atoms/Avatar/Avatar";
import IconButton from "../../molecules/IconButton/IconButton";
import Drawer from "../../molecules/Drawer/Drawer";
import { useUserStore } from "../../../stores/useUserStore.js";
import Logo from "../../../assets/LogoPosta.png";
import { useNavigate } from "react-router-dom";
import { CHAT, LAST_NEWS, MY_POSTS } from "../../../constants/routes.js";
import { useRouteStore } from "../../../stores/useRouteStore.js";

const Nav = () => {
  const [shoDrawer, setShowDrawer] = useState(false);
  const { credentials } = useUserStore((state) => state);
  const navigate = useNavigate();
  const { setRoute, currentRoute } = useRouteStore((state) => state);

  useEffect(() => {
    navigate(currentRoute);
  }, [currentRoute]);

  return (
    <nav className={styles.nav}>
      <img src={Logo} className={styles.logo} />
      <div className={styles.sections}>
        <div
          className={`${styles.section} ${
            currentRoute === LAST_NEWS && styles.current
          }`}
          onClick={() => setRoute(LAST_NEWS)}
        >
          <Text bold size="lg" color={"primary"}>
            Últimas noticias
          </Text>
        </div>
        <div
          className={`${styles.section} ${
            currentRoute === CHAT && styles.current
          }`}
          onClick={() => setRoute(CHAT)}
        >
          <Text bold size="lg" color={"primary"}>
            Chat
          </Text>
        </div>
        <div
          className={`${styles.section} ${
            currentRoute === MY_POSTS && styles.current
          }`}
          onClick={() => setRoute(MY_POSTS)}
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
              credentials
                ? credentials.photoURL
                : "https://imgs.search.brave.com/6Logd6Iw8_Z7K-vEiVPKlvlRn3Xl2d4fMUMaVKMMQLc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE2LzExLzcw/LzM2MF9GXzYxNjEx/NzA3MV9OdTJLbVNl/bjcxYXBrYlhjQVlP/T2YyampjTEptcDRs/Qi5qcGc"
            }
          />
        </div>
        <IconButton
          type={"bars"}
          size="xxlg"
          onClick={() => setShowDrawer(true)}
        />
        <Drawer show={shoDrawer} onClose={() => setShowDrawer(false)} />
      </div>
    </nav>
  );
};

export default Nav;
