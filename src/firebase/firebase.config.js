// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: import.meta.env.VITE_apiKey,
authDomain: import.meta.env.VITE_authDomain,
projectId: import.meta.env.VITE_projectId,
storageBucket: import.meta.env.VITE_storageBucket,
messagingSenderId: import.meta.env.VITE_messagingSenderId,
appId: import.meta.env.VITE_appId,




  // apiKey: "AIzaSyDZBMHL670n515nfcA-VWiTd0s6rpNq2g8",
  // authDomain: "dragon-news-app-1161f.firebaseapp.com",
  // projectId: "dragon-news-app-1161f",
  // storageBucket: "dragon-news-app-1161f.firebasestorage.app",
  // messagingSenderId: "470448429787",
  // appId: "1:470448429787:web:b752de15ba3c402db8cafe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;