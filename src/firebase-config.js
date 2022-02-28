import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCGfUWCv1hVUGyKW1nSuFP1s6HUvJh8e58",
  authDomain: "resume-builder-c880d.firebaseapp.com",
  projectId: "resume-builder-c880d",
  storageBucket: "resume-builder-c880d.appspot.com",
  messagingSenderId: "309263379973",
  appId: "1:309263379973:web:c6f0b1df6034e9b6def66c",
  measurementId: "G-FQ7RJRFRC6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);