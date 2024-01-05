import React, { useState } from "react";
import styles from "./login.module.css";
import Input from "../../components/atoms/Input/Input";
import TextButton from "../../components/molecules/TextButton/TextButton";
import TextTypeEffect from "../../components/molecules/TextTypeEffect/TextTypeEffect";
import Logo from "../../components/atoms/Logo/Logo";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [input, setInput] = useState({
    user: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, input.user, input.password)
      .then(async (credentials) => {
        localStorage.setItem("token", await credentials.user.getIdToken());
        alert("Logueado");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className={styles.login}>
      <div className={styles.welcome}>
        <Logo size="xlg" />
        <TextTypeEffect type="title" size="lg">
          Bienvenidos
        </TextTypeEffect>
      </div>
      <div className={styles.loginForm}>
        <Input
          id={"user"}
          placeholder="ingrese su email"
          value={input.user}
          onChange={handleChange}
        />
        <Input
          id={"password"}
          type={"password"}
          placeholder="ingrese su contraseña"
          onChange={handleChange}
          value={input.password}
        />
        <TextButton onClick={handleLogin}>Login</TextButton>
        <div className={styles.loginSocialMedia}>
          <div className={styles.btn}>
            <TextButton icon={"google"} color="success">
              Google
            </TextButton>
          </div>
          <div className={styles.btn}>
            <TextButton icon={"github"} color="black">
              Github
            </TextButton>
          </div>
          <div className={styles.btn}>
            <TextButton icon={"twitter"} color="black">
              Twitter
            </TextButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
