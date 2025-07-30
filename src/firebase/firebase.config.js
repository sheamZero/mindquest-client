// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMITosa4NEirVgRwvZE2xExBO9cxTcj_I",
  authDomain: "mindquest-client.firebaseapp.com",
  projectId: "mindquest-client",
  storageBucket: "mindquest-client.firebasestorage.app",
  messagingSenderId: "753584248595",
  appId: "1:753584248595:web:308220eea415cc26cc2ce6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;