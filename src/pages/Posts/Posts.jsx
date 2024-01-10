import React from "react";
import Title from "../../components/atoms/Title/Title";
import PostCard from "../../components/organisms/PostCard/PostCard";
import styles from "./posts.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import CrearPost from "../../components/organisms/CrearPost/CrearPost";

const Posts = () => {
  return (
    <div className={styles.posts}>
      <Nav />
      <Title>Que paso hoy?</Title>
      <CrearPost></CrearPost>
      <div className={styles.postsList}>
        <PostCard
          author={"Ignacia Lestrada"}
          avatar={
            "https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
          }
          date={"hace 1 hora"}
          content={
            "Que bonita vecindaaaaad, que bonita vecindaaaaad, es la vecindad del chavooo....."
          }
          comments={10}
          likes={15}
        />
        <PostCard
          author={"Ignacia Lestrada"}
          avatar={
            "https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
          }
          date={"hace 1 hora"}
          content={
            "Que bonita vecindaaaaad, que bonita vecindaaaaad, es la vecindad del chavooo....."
          }
          comments={10}
          likes={15}
          media={
            "https://imgs.search.brave.com/SomRxH31ZBlaVM0b0QYvPKfF4ZDlZjgqiUsE9oGz1m4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3VpZGFlbG1lZGlv/YW1iaWVudGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzEwL0xhLWhpc3Rv/cmlhLWRlLWxvcy1w/YWlzYWplcy5qcGc"
          }
        />
        <PostCard
          author={"Ignacia Lestrada"}
          avatar={
            "https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
          }
          date={"hace 1 hora"}
          content={
            "Que bonita vecindaaaaad, que bonita vecindaaaaad, es la vecindad del chavooo....."
          }
          comments={10}
          likes={15}
          media={
            "https://imgs.search.brave.com/SomRxH31ZBlaVM0b0QYvPKfF4ZDlZjgqiUsE9oGz1m4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3VpZGFlbG1lZGlv/YW1iaWVudGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzEwL0xhLWhpc3Rv/cmlhLWRlLWxvcy1w/YWlzYWplcy5qcGc"
          }
        />
        <PostCard
          author={"Ignacia Lestrada"}
          avatar={
            "https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
          }
          date={"hace 1 hora"}
          content={
            "Que bonita vecindaaaaad, que bonita vecindaaaaad, es la vecindad del chavooo....."
          }
          comments={10}
          likes={15}
          media={
            "https://imgs.search.brave.com/SomRxH31ZBlaVM0b0QYvPKfF4ZDlZjgqiUsE9oGz1m4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3VpZGFlbG1lZGlv/YW1iaWVudGUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzEwL0xhLWhpc3Rv/cmlhLWRlLWxvcy1w/YWlzYWplcy5qcGc"
          }
        />
      </div>
    </div>
  );
};

export default Posts;
