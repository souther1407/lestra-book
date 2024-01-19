import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import Text from "../../atoms/Text/Text";
import Logo from "../../atoms/Logo/Logo";
import Avatar from "../../atoms/Avatar/Avatar";
import IconButton from "../../molecules/IconButton/IconButton";
import Drawer from "../../molecules/Drawer/Drawer";
import { useUserStore } from "../../../stores/useUserStore.js";
import { useNavigate } from "react-router-dom";
import { CHAT, LAST_NEWS, MY_POSTS, LOGIN } from "../../../constants/routes.js";
import { useRouteStore } from "../../../stores/useRouteStore.js";
import { useLogin } from "../../../hooks/useLogin.js";
import Icon from "../../atoms/Icon/Icon.jsx";
const Nav = ({ onChangeRoute = () => {} }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { credentials } = useUserStore((state) => state);
  const navigate = useNavigate();
  const { setRoute, currentRoute } = useRouteStore((state) => state);
  const { logOut } = useLogin();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate(LOGIN);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    onChangeRoute();
    navigate(currentRoute);
  }, [currentRoute]);

  return (
    <nav className={styles.nav}>
      <Logo size="sm"></Logo>
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
        <Drawer show={showDrawer} onClose={() => setShowDrawer(false)}>
          <div className={styles.menuDrawer}>
            <div className={styles.avatar}>
              <Avatar
                src={
                  credentials
                    ? credentials.photoURL
                    : "https://imgs.search.brave.com/6Logd6Iw8_Z7K-vEiVPKlvlRn3Xl2d4fMUMaVKMMQLc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE2LzExLzcw/LzM2MF9GXzYxNjEx/NzA3MV9OdTJLbVNl/bjcxYXBrYlhjQVlP/T2YyampjTEptcDRs/Qi5qcGc"
                }
              ></Avatar>
              {credentials?.displayName}
            </div>
            <hr></hr>
            <div className={styles.botones}>
              <div className={styles.icono}>
                <Icon type="settings" size="xlg"></Icon>
              </div>
              <Text>Configuracion y Privacidad</Text>
            </div>
            <div className={styles.botones}>
              <div className={styles.icono}>
                <Icon type="question" size="xlg"></Icon>
              </div>
              <Text>Ayuda y Soporte Tecnico</Text>
            </div>
            <div className={styles.botones}>
              <div className={styles.icono}>
                <Icon type="dark" size="xlg"></Icon>
              </div>
              <Text>Pantalla y Accesibilidad</Text>
            </div>
            <div className={styles.botones}>
              <div className={styles.icono}>
                <Icon type="comment" size="xlg"></Icon>
              </div>
              <Text>Enviar Comentarios</Text>
            </div>
            <div className={styles.botones} onClick={handleLogout}>
              <div className={styles.icono}>
                <Icon type="exit" size="xlg"></Icon>
              </div>
              <Text>Cerrar Sesión</Text>
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Nav;
