// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsWpZy5ALQTHPcNv7PAujMfd-tVHmDIwY",
  authDomain: "quora-clone-3ab31.firebaseapp.com",
  projectId: "quora-clone-3ab31",
  storageBucket: "quora-clone-3ab31.appspot.com",
  messagingSenderId: "137177999009",
  appId: "1:137177999009:web:1dd9d4e41a9e66cdbc72e0",
  measurementId: "G-7QY7HLSN9G"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
