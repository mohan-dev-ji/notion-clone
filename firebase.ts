import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxLk4pQlQtzvU50V-jbX5lZCZifDImTHE",
    authDomain: "notion-clone-3e393.firebaseapp.com",
    projectId: "notion-clone-3e393",
    storageBucket: "notion-clone-3e393.appspot.com",
    messagingSenderId: "1001127918844",
    appId: "1:1001127918844:web:b07100846195d76f94ab79"
  };
  
  // Initialize Firebase
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export { db };