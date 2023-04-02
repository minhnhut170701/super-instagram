// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT3QoLiIGklkXzCAcg4aUfAQSgSibtlaQ",
  authDomain: "supper-instar.firebaseapp.com",
  projectId: "supper-instar",
  storageBucket: "supper-instar.appspot.com",
  messagingSenderId: "95738466927",
  appId: "1:95738466927:web:6099fa6702b91f41e6b39a",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);