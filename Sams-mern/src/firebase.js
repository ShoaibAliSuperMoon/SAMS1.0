// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGh03dU0WKN_fdDXf1QbrEGsbbVB0Fv-Y",
  authDomain: "sams1-0.firebaseapp.com",
  projectId: "sams1-0",
  storageBucket: "sams1-0.appspot.com",
  messagingSenderId: "1052901484304",
  appId: "1:1052901484304:web:6485cde7f8a36534fb6795",
  measurementId: "G-BK3KGXP3R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);