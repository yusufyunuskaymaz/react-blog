import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useEffect, useState } from "react";
import { firebase } from "./firebase";

// Push Blog Article To DB
export default function postBlog(title, imgUrl, keywords, content,currentUser) {
  const db = getDatabase(firebase);
  set(push(ref(db, "posts/")), {
    title,
    imgUrl,
    keywords,
    content,
    email:currentUser.email
  });
}

//Reading Data
export const useFetch = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "posts/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setBlogPosts(userArray);
    });
  }, []);
  return blogPosts;
};

export const deletePost = (id) => {
  const db = getDatabase(firebase);
  // const userRef = ref(db, "users/");
  remove(ref(db, "posts/" + id));
};
