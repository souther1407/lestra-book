import {
  collection,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  getCountFromServer,
  deleteDoc,
  where,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const addPost = async (data) => {
  const docRef = doc(collection(db, "posts"));
  await setDoc(docRef, { ...data, id: docRef.id, created: Date.now() });
};

const getLikes = async (results) => {
  const likes = results.docs.map((d) =>
    getCountFromServer(collection(db, "posts", d.id, "likes"))
  );
  const likesCant = await Promise.all(likes);
  return likesCant;
};
export const getAllPosts = async () => {
  const results = await getDocs(
    query(collection(db, "posts"), orderBy("created", "desc"))
  );
  const likesCant = await getLikes(results);
  return results.docs.map((d, i) => ({
    ...d.data(),
    likes: likesCant[i].data().count,
  }));
};

export const getMyPosts = async (uid) => {
  const results = await getDocs(
    query(
      collection(db, "posts"),
      where("authorUid", "==", uid),
      orderBy("created", "desc")
    )
  );
  const likesCant = await getLikes(results);
  return results.docs.map((d, i) => ({
    ...d.data(),
    likes: likesCant[i].data().count,
  }));
};

export const giveLike = async (uid, postId) => {
  const ref = doc(collection(db, "posts", postId, "likes"));
  await setDoc(ref, { id: ref.id, postId, userUid: uid });
};

export const ungiveLike = async (id, postsId) => {
  const deleted = doc(db, "posts", postsId, "likes", id);
  await deleteDoc(deleted);
};

export const toggleLike = async (uid, postId) => {
  const cantElements = await getDocs(
    query(collection(db, "posts", postId, "likes"), where("userUid", "==", uid))
  );

  const exists = !cantElements.empty;
  console.log(exists);
  if (exists) {
    ungiveLike(cantElements.docs[0].id, postId);
  } else {
    giveLike(uid, postId);
  }
};
export const onLikesUpdated = (postId, onUpdate, onError) => {
  onSnapshot(query(collection(db, "posts", postId, "likes")), {
    next(snapshot) {
      onUpdate(snapshot.docs.length);
    },
    error(error) {
      onError(error.message);
    },
  });
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
