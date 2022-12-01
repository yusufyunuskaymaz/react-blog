import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBP2bbnfTD1zzr-AQvQRIlJ3wPUuYx3XmU",
  authDomain: "blog-app-49120.firebaseapp.com",
  projectId: "blog-app-49120",
  storageBucket: "blog-app-49120.appspot.com",
  messagingSenderId: "534135035542",
  appId: "1:534135035542:web:9def1654b9bf5e891cd4b7"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase)

export const createUser = async (email,password, navigate)=>{
  try{
    const currentSignedUser = await createUserWithEmailAndPassword(auth,email,password)
  // console.log(currentSignedUser)
  navigate("/")
  }catch (error){
    alert(error.message)
  }
}

export const LogIn = async (email,password,navigate)=>{
    try{
      const currentLoggedInUser = await signInWithEmailAndPassword(auth,email,password)
      console.log("başarılı");
    navigate("/")
    }catch (error){
      console.log(error.message)
    }
}

export const logOut = (navigate)=>{
  signOut(auth)
  navigate("/login")
}

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setCurrentUser(user)
      }else{
        setCurrentUser(false)
      }
    })
}