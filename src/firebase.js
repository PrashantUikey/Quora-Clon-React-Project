// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCuKVCta_Rq-T1IES-SQZZd9QsxDaIL3B4",
//   authDomain: "quora-clone-b6277.firebaseapp.com",
//   projectId: "quora-clone-b6277",
//   storageBucket: "quora-clone-b6277.appspot.com",
//   messagingSenderId: "105187988074",
//   appId: "1:105187988074:web:2d936e753956672db23013",
//   measurementId: "G-T0WV5C9PNG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAsWpZy5ALQTHPcNv7PAujMfd-tVHmDIwY",
  authDomain: "quora-clone-3ab31.firebaseapp.com",
  projectId: "quora-clone-3ab31",
  storageBucket: "quora-clone-3ab31.appspot.com",
  messagingSenderId: "137177999009",
  appId: "1:137177999009:web:995e161d4166beebbc72e0",
  measurementId: "G-PTKPKZFZXD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);


export { auth, provider };
export default db;
