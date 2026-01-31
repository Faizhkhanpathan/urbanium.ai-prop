// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD-yxxre4gSYxlOdOajqRruip82xwz9_aQ",
//   authDomain: "urbanium-8db16.firebaseapp.com",
//   projectId: "urbanium-8db16",
//   storageBucket: "urbanium-8db16.appspot.com",
//   messagingSenderId: "445154266400",
//   appId: "1:445154266400:web:225edda3f8d6a759c59b45",
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// ----------------------------------------------------------------------------------

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
