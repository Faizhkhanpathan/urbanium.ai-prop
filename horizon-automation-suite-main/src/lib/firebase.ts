import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-yxxre4gSYxlOdOajqRruip82xwz9_aQ",
  authDomain: "urbanium-8db16.firebaseapp.com",
  projectId: "urbanium-8db16",
  storageBucket: "urbanium-8db16.firebasestorage.app",
  messagingSenderId: "445154266400",
  appId: "1:445154266400:web:225edda3f8d6a759c59b45",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
