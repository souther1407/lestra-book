import {
  collection,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

export const addPost = async (data) => {
  const docRef = doc(collection(db, "posts"));
  await setDoc(docRef, { ...data, id: docRef.id, created: Date.now() });
};

export const getAllPosts = async () => {
  const results = await getDocs(
    query(collection(db, "posts"), orderBy("created", "desc"))
  );
  return results.docs.map((d) => d.data());
};

export const getMyPosts = async (uid) => {
  const results = await getDocs(
    query(
      collection(db, "posts"),
      where("authorUid", "==", uid),
      orderBy("created", "desc")
    )
  );
  return results.docs.map((d) => d.data());
};

export const onNewPostCreated = (onUpdate, onError) => {
  onSnapshot(query(collection(db, "posts"), orderBy("created", "desc")), {
    next: (snapshot) => {
      const parsedPosts = snapshot.docs.map((post) => post.data());
      onUpdate(parsedPosts);
    },
    error: (error) => {
      onError("a");
    },
  });
};
