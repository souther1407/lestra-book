import React, { useEffect, useState } from "react";
import Nav from "../../components/organisms/Nav/Nav";
import styles from "./mypost.module.css";
import PostCard from "../../components/organisms/PostCard/PostCard";
import Title from "../../components/atoms/Title/Title";
import { getMyPosts } from "../../services/firestore/firestore";
import { useUserStore } from "../../stores/useUserStore";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
const MyPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const credentials = useUserStore((state) => state.credentials);
  useEffect(() => {
    if (credentials) {
      getMyPosts(credentials.uid)
        .then((data) => setPosts(data))
        .catch((err) => alert(err.message))
        .finally(() => setLoading(false));
    }
  }, []);
  return (
    <div>
      {loading && <LoadingScreen />}
      <div>
        <Nav></Nav>
      </div>
      <div className={styles.post}>
        <Title>Mis Publicaciones</Title>
        {posts.map((p) => (
          <PostCard
            author={p.authorName}
            date={p.created}
            avatar={p.avatar}
            content={p.content}
            likes="2"
            comments="1"
            media={p.media}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};

export default MyPost;
