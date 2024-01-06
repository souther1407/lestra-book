import React from "react";
import styles from "./chat.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Avatar from "../../components/atoms/Avatar/Avatar";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import IconButton from "../../components/molecules/IconButton/IconButton";
const Chat = () => {
  return (
    <div className={styles.chat}>
      <Nav />
      <main className={styles.main}>
        <section className={styles.onlines}>
          {Array.from("12414141").map((i) => (
            <div className={styles.card}>
              <Avatar
                size="md"
                src="https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
              />
              <Text>Igacia Lestrada</Text>
            </div>
          ))}
        </section>
        <section className={styles.areaChat}>
          <div className={styles.area}></div>
          <div className={styles.input}>
            <Input
              id={"msg"}
              variant="bordered"
              onChange={() => {}}
              onError={() => {}}
            />
            <div className={styles.sendBtn}>
              <IconButton
                onClick={() => {}}
                type={"send"}
                size="lg"
                color={"white"}
                colorStroke={"var(--primary)"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Chat;
