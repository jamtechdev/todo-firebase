// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNhtdtBdJoVqZ3bK1Un9JwXlugCIv3Y4A",
  authDomain: "todo-app-18dc6.firebaseapp.com",
  projectId: "todo-app-18dc6",
  storageBucket: "todo-app-18dc6.firebasestorage.app",
  messagingSenderId: "29308126639",
  appId: "1:29308126639:web:6cb7f58eabeb086a8c9b5a",
  measurementId: "G-6T2D478PNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
