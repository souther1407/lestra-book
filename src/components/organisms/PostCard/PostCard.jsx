import React from "react";
import styles from "./postCard.module.css";
import Avatar from "../../atoms/Avatar/Avatar";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import HeartButton from "../../molecules/HeartButton/HeartButton";
import TextButton from "../../molecules/TextButton/TextButton";
import PopOut from "../../molecules/PopOut/PopOut";
import moment from "moment";
import "moment/dist/locale/es.js";

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
  media,
}) => {
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
          <HeartButton />
          <Text>{likes}</Text>
        </div>
        <div className={styles.reaction}>
          <Icon type="bubble" size="xlg" color={"var(--success)"}></Icon>
          <Text>{comments}</Text>
        </div>
      </footer>
    </article>
  );
};

export default PostCard;
