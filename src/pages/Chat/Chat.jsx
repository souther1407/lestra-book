import React, { useEffect, useState } from "react";
import styles from "./chat.module.css";
import Nav from "../../components/organisms/Nav/Nav";
import Avatar from "../../components/atoms/Avatar/Avatar";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import IconButton from "../../components/molecules/IconButton/IconButton";
import { Socket } from "../../services/socket/socket";
import { useUserStore } from "../../stores/useUserStore";
const Chat = () => {
  const [socket, setSocket] = useState(null);
  const credentials = useUserStore((state) => state.credentials);
  const [users, setUsers] = useState({});
  const [msgs, setMsgs] = useState([]);
  const [myMsg, setMyMsg] = useState("");

  const handleUpdateUsers = (users) => {
    setUsers(users);
  };
  const handleGetMsg = (user) => {
    setMsgs((prev) => [...prev, user]);
  };
  const usersToArray = () => {
    const arr = [];
    for (let user in users) {
      arr.push(users[user]);
    }

    return arr;
  };

  const sendMsg = () => {
    socket?.sendMsg(myMsg);
  };
  useEffect(() => {
    if (credentials) {
      const sok = new Socket();
      sok.connect(
        credentials?.displayName,
        handleGetMsg,
        (user) => {
          console.log(user);
        },
        (user) => {
          console.log(user);
        },
        handleUpdateUsers,
        handleUpdateUsers
      );

      setSocket(sok);
    }
  }, []);
  return (
    <div className={styles.chat}>
      <Nav onChangeRoute={() => socket?.disconnect()} />
      <main className={styles.main}>
        <section className={styles.onlines}>
          {usersToArray().map((user) => (
            <div className={styles.card}>
              <Avatar
                size="md"
                src="https://imgs.search.brave.com/VJdZ7LwDiZiFQeFoniOSwUEsz5OkKwAZG38N2G3Uq_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGF0aHNvY2lhbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDUvYXZ0YXIt/aW1nMi1uZXctMS5q/cGVn"
              />
              <Text>{user.name}</Text>
            </div>
          ))}
        </section>
        <section className={styles.areaChat}>
          <div className={styles.area}>
            {msgs.map((user) => (
              <div
                className={`${styles.msg} ${
                  user.uid === socket.id && styles.me
                }`}
              >
                <Text>{user.name}</Text>
                <Text>{user.msg}</Text>
              </div>
            ))}
          </div>
          <div className={styles.input}>
            <Input
              id={"msg"}
              variant="bordered"
              onChange={(id, value) => {
                setMyMsg(value);
              }}
              onError={() => {}}
            />
            <div className={styles.sendBtn}>
              <IconButton
                onClick={sendMsg}
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
