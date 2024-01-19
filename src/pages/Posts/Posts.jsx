import React, { useEffect, useState } from "react";
import Title from "../../components/atoms/Title/Title";
import PostCard from "../../components/organisms/PostCard/PostCard";
import styles from "./posts.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import CrearPost from "../../components/organisms/CrearPost/CrearPost";
import {
  getAllPosts,
  onNewPostCreated,
} from "../../services/firestore/firestore";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.posts}>
      <Nav />
      {loading && <LoadingScreen />}
      <Title>Que paso hoy?</Title>
      <CrearPost></CrearPost>
      <div className={styles.postsList}>
        {posts.map((p) => (
          <PostCard
            key={p.id}
            id={p.id}
            author={p.authorName}
            avatar={p.avatar}
            date={p.created}
            media={p?.media}
            content={p.content}
            comments={10}
            likes={p.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
