// 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBgj5NBy9bv26Sz8YqxkawdDBd1T57nwMM",
  authDomain: "chat-d424e.firebaseapp.com",
  projectId: "chat-d424e",
  storageBucket: "chat-d424e.appspot.com",
  messagingSenderId: "792454304224",
  appId: "1:792454304224:web:221bcdefa4b937d9255b85"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
