import React from "react";
import styles from "./postCard.module.css";
import Avatar from "../../atoms/Avatar/Avatar";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import HeartButton from "../../molecules/HeartButton/HeartButton";
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
      <header>
        <div className={styles.author}>
          <Avatar src={avatar} />
          <div className={styles.authorInfo}>
            <Text bold>{author}</Text>
            <Text>{date}</Text>
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
