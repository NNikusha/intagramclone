import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCoE3kMHZGC-iJqDlQB0ouU3P2-Hamyis0",
  authDomain: "instagramclone-f718f.firebaseapp.com",
  projectId: "instagramclone-f718f",
  storageBucket: "instagramclone-f718f.appspot.com",
  messagingSenderId: "236615927356",
  appId: "1:236615927356:web:b935df8375c5ed84caa539",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
