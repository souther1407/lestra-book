import {
  collection,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

export const addPost = async (data) => {
  const docRef = doc(collection(db, "posts"));
  await setDoc(docRef, { ...data, id: docRef.id, created: Date.now() });
};

export const getAllPosts = async () => {
  const results = await getDocs(collection(db, "posts"));
  return results.docs.map((d) => d.data());
};

export const onNewPostCreated = (onUpdate, onError) => {
  onSnapshot(collection(db, "posts"), {
    next: (snapshot) => {
      const parsedPosts = snapshot.docs.map((post) => post.data());
      onUpdate(parsedPosts);
    },
    error: (error) => {
      onError("a");
    },
  });
};
