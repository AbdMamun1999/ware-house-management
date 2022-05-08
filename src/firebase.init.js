import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdrXS9GHxwAaRPfNztknhKbA3lzhqOCNY",
  authDomain: "warehouse-practice-f05eb.firebaseapp.com",
  projectId: "warehouse-practice-f05eb",
  storageBucket: "warehouse-practice-f05eb.appspot.com",
  messagingSenderId: "994018638063",
  appId: "1:994018638063:web:a88f8ba14d3f0b549ec31a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;