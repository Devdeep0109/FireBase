
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9e2GO09_gSmNbLjtZTQaMcoPQCF2Xf2o",
  authDomain: "app-2b3c0.firebaseapp.com",
  projectId: "app-2b3c0",
  storageBucket: "app-2b3c0.appspot.com",
  messagingSenderId: "908481041946",
  appId: "1:908481041946:web:b8ae9d0660be9f6c0623a3",
  databaseURL : "https://app-2b3c0-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);