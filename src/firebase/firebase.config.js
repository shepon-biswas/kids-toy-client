// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ejbJYu7x8FSMZvmT2Bnmneo-637w1Dg",
  authDomain: "kids-toys-with-education.firebaseapp.com",
  projectId: "kids-toys-with-education",
  storageBucket: "kids-toys-with-education.appspot.com",
  messagingSenderId: "460214795025",
  appId: "1:460214795025:web:59b2468ee9d7decde46ab0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;