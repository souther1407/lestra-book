import { useUserStore } from "../stores/useUserStore";
import { auth } from "../firebase.js";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";

export const useLogin = () => {
  const { setCredentials } = useUserStore((state) => state);

  useEffect(() => {
    onAuthStateChanged(auth, (auth) => {
      setCredentials(auth);
    });
  }, []);

  const loginGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Listo!");
    } catch (error) {
      alert(error.message);
    }
  };
  const loginUserPass = async (user, pass) => {
    await signInWithEmailAndPassword(auth, user, pass);
    alert("Logueado");
  };

  return { loginGoogle, loginUserPass };
};
