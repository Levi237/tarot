// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGqIRtuLUpdpME4SSOIM2EE8id5K_HGEY",
  authDomain: "tarot-app-2022.firebaseapp.com",
  databaseURL: "https://tarot-app-2022-default-rtdb.firebaseio.com",
  projectId: "tarot-app-2022",
  storageBucket: "tarot-app-2022.appspot.com",
  messagingSenderId: "1031174377188",
  appId: "1:1031174377188:web:7cc2991ba9f01494aa66f1",
  measurementId: "G-J7QY6BWRTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);