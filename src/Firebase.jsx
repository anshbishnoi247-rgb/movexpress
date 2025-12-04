// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDneAHVRFBJWeohvOwe3WGpLy7_Ea0G-sk",
  authDomain: "movexpress-test.firebaseapp.com",
  projectId: "movexpress-test",
  storageBucket: "movexpress-test.firebasestorage.app",
  messagingSenderId: "930327479684",
  appId: "1:930327479684:web:9934331d41dec74f1349d1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
