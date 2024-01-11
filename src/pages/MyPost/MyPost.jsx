import React from "react";
import Nav from "../../components/organisms/Nav/Nav";
import styles from "./mypost.module.css";
import PostCard from "../../components/organisms/PostCard/PostCard";
import Title from "../../components/atoms/Title/Title";
import PopOut from "../../components/molecules/PopOut/PopOut";

const MyPost = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div className={styles.post}>
        <Title>Mis Publicaciones</Title>
        <PostCard
          author="Roberta Lestrada"
          date="21/12/2021"
          avatar="https://assets.isu.pub/document-structure/220322150213-20e7e352f66e32aa9abaaa46904dcf1b/v1/3322ee95f1579a476ddf862f940f0242.jpeg"
          content="Tomando mates con mis amiguitas "
          likes="2"
          comments="1"
          media="https://as2.ftcdn.net/v2/jpg/04/17/45/57/1000_F_417455784_mLtojJduc2G48HLAk1Rnp6EyKk77BHhn.jpg"
        ></PostCard>
        <PostCard
          author="Roberta Lestrada"
          date="21/12/2021"
          avatar="https://assets.isu.pub/document-structure/220322150213-20e7e352f66e32aa9abaaa46904dcf1b/v1/3322ee95f1579a476ddf862f940f0242.jpeg"
          content="Nada mejor que andar en bici"
          likes="2"
          comments="1"
          media="https://cdn.shopify.com/s/files/1/3000/6982/files/luz1_grande.jpg?v=1593775338"
        ></PostCard>
        <PostCard
          author="Roberta Lestrada"
          date="21/12/2021"
          avatar="https://assets.isu.pub/document-structure/220322150213-20e7e352f66e32aa9abaaa46904dcf1b/v1/3322ee95f1579a476ddf862f940f0242.jpeg"
          content="Me encontre con este personaje "
          likes="2"
          comments="1"
          media="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFH4dys-db3fkjxXE1qkqqApdzjy5VkuhbHw&usqp=CAU"
        ></PostCard>
      </div>
    </div>
  );
};

export default MyPost;
