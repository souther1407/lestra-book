import React, { useState } from "react";
import styles from "./login.module.css";
import Input from "../../components/atoms/Input/Input";
import TextButton from "../../components/molecules/TextButton/TextButton";
import TextTypeEffect from "../../components/molecules/TextTypeEffect/TextTypeEffect";
import Logo from "../../components/atoms/Logo/Logo";

import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [input, setInput] = useState({
    user: "",
    password: "",
  });
  const { loginGoogle, loginUserPass } = useLogin();
  const [loading, setLoading] = useState(false);
  const handleChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
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
        <TextButton onClick={() => loginUserPass(input.user,input.password)}>Login</TextButton>
        <div className={styles.loginSocialMedia}>
          <div className={styles.btn}>
            <TextButton icon={"google"} color="success" onClick={loginGoogle}>
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
