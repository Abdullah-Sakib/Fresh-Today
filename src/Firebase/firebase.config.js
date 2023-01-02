// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl6T4HUijQ7nKfnWdmeHrpun_jkwRwPC4",
  authDomain: "fresh-today-bd.firebaseapp.com",
  projectId: "fresh-today-bd",
  storageBucket: "fresh-today-bd.appspot.com",
  messagingSenderId: "993631059563",
  appId: "1:993631059563:web:3060a569226b82f6053b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;