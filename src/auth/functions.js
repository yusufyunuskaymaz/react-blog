import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import { useEffect, useState } from "react";
import { firebase } from "./firebase";

// Push Blog Article To DB
export default function postBlog(email, password) {
  const db = getDatabase(firebase);
  set(push(ref(db, "users/")), {
    email: email,
    password: password,
  });
}

export const useFetch = () => {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = []
      for(let id in data){
        userArray.push({id, ...data[id]})
      }
      setBlogPosts(userArray)
    });
  }, []);
  return blogPosts;
};



export const deletePost = (id)=>{
    const db = getDatabase(firebase);
    // const userRef = ref(db, "users/");
    remove(ref(db, "users/" + id))
}