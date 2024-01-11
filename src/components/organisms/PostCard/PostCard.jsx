import React from "react";
import styles from "./postCard.module.css";
import Avatar from "../../atoms/Avatar/Avatar";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import HeartButton from "../../molecules/HeartButton/HeartButton";
import PopOut from "../../molecules/PopOut/PopOut";
import moment from "moment";
import {} from "moment";
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
          ></PopOut>
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
