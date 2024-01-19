
import React, { useEffect, useState } from "react";
import styles from "./postCard.module.css";
import Avatar from "../../atoms/Avatar/Avatar";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import HeartButton from "../../molecules/HeartButton/HeartButton";
import TextButton from "../../molecules/TextButton/TextButton";
import PopOut from "../../molecules/PopOut/PopOut";
import TextArea from "../../atoms/TextArea/TextArea";
import Modal from "../../molecules/Modal/Modal";
import moment from "moment";
import { toggleLike } from "../../../services/firestore/firestore";
import { useUserStore } from "../../../stores/useUserStore";
import "moment/dist/locale/es.js";
import { onLikesUpdated } from "../../../services/firestore/firestore";
import { useUserStore } from "../../../stores/useUserStore.js";
const parseDate = (timestamp) => {
  const parsed = moment(`${timestamp}`, "x").fromNow();
  return parsed;
};

const PostCard = ({
  author,
  date,
  avatar,
  content,
  likes,
  comments,
  id,
  media,
}) => {
  const [updatedLikes, setUpdatedLikes] = useState(likes);
  const [showModal, setShowModal] = useState(false);
  const credentials = useUserStore((state) => state.credentials);
  const handleLike = async () => {
    await toggleLike(credentials.uid, id);
    try {
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    onLikesUpdated(id, (newValue) => setUpdatedLikes(newValue));
  }, []);
  return (
    <article className={styles.postCard}>
      <header className={styles.header}>
        <div className={styles.author}>
          <PopOut
            componente={() => {
              return <Avatar src={avatar} />;
            }}
          >
            <div className={styles.contenedorPopOut}>
              <div>
                <Avatar src={avatar} size="xlg" />
              </div>
              <div className={styles.contenedorTextos}>
                <div>
                  <Text>{author}</Text>
                </div>
                <div className={styles.contenedorSecciones}>
                  <Icon type="cake"></Icon>
                  <Text>Cumpleaños el 30/23/3592</Text>
                </div>
                <div className={styles.contenedorSecciones}>
                  <Icon type="person"></Icon>
                  <Text>
                    Se hizo amigo de Roberta Lestrada y 3 Personas mas{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.contenedorBotones}>
              <div className={styles.boton1}>
                <TextButton>Amigos</TextButton>
              </div>
              <div className={styles.boton2}>
                <TextButton>Mensaje</TextButton>
              </div>
              <div className={styles.boton3}>
                <TextButton>...</TextButton>
              </div>
            </div>
          </PopOut>
          <div className={styles.authorInfo}>
            <Text bold>{author}</Text>
            <Text>{parseDate(date)}</Text>
          </div>
        </div>
      </header>
      <main>
        {media && <img src={media} className={styles.media} />}
        <Text>{content}</Text>
      </main>
      <footer>
        <div className={styles.reaction}>
          <HeartButton onClick={handleLike} />
          <Text>{updatedLikes}</Text>
        </div>
        <div className={styles.reaction} onClick={() => setShowModal(true)}>
          <Icon type="bubble" size="xlg" color={"var(--success)"}></Icon>
          <Text>{comments}</Text>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <div className={styles.cajaComentarios}>
              <Avatar
                src={
                  credentials
                    ? credentials.photoURL
                    : "https://imgs.search.brave.com/6Logd6Iw8_Z7K-vEiVPKlvlRn3Xl2d4fMUMaVKMMQLc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE2LzExLzcw/LzM2MF9GXzYxNjEx/NzA3MV9OdTJLbVNl/bjcxYXBrYlhjQVlP/T2YyampjTEptcDRs/Qi5qcGc"
                }
              ></Avatar>
              <TextArea initialRows={1}></TextArea>
            </div>
            <div className={styles.contenedorComentarios}>
              <div className={styles.comentarios}>
                <Avatar
                  src={
                    credentials
                      ? credentials.photoURL
                      : "https://imgs.search.brave.com/6Logd6Iw8_Z7K-vEiVPKlvlRn3Xl2d4fMUMaVKMMQLc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE2LzExLzcw/LzM2MF9GXzYxNjEx/NzA3MV9OdTJLbVNl/bjcxYXBrYlhjQVlP/T2YyampjTEptcDRs/Qi5qcGc"
                  }
                ></Avatar>
                <Text>adasdasdas</Text>
              </div>
              <div className={styles.comentarios}>
                <Avatar
                  src={
                    credentials
                      ? credentials.photoURL
                      : "https://imgs.search.brave.com/6Logd6Iw8_Z7K-vEiVPKlvlRn3Xl2d4fMUMaVKMMQLc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE2LzExLzcw/LzM2MF9GXzYxNjEx/NzA3MV9OdTJLbVNl/bjcxYXBrYlhjQVlP/T2YyampjTEptcDRs/Qi5qcGc"
                  }
                ></Avatar>
                <Text>adasdasdas</Text>
              </div>
              <div className={styles.comentarios}>
                <Avatar
                  src={
                    credentials
                      ? credentials.photoURL
                      : "https://imgs.search.brave.com/6Logd6Iw8_Z7K-vEiVPKlvlRn3Xl2d4fMUMaVKMMQLc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzE2LzExLzcw/LzM2MF9GXzYxNjEx/NzA3MV9OdTJLbVNl/bjcxYXBrYlhjQVlP/T2YyampjTEptcDRs/Qi5qcGc"
                  }
                ></Avatar>
                <Text>adasdasdas</Text>
              </div>
            </div>
          </Modal>
        </div>
      </footer>
    </article>
  );
};

export default PostCard;
