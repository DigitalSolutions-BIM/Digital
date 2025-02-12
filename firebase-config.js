// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAK-L3klvWQARcfU2Vykv4pVxErOAZxsk4",
  authDomain: "sapproject-c53af.firebaseapp.com",
  projectId: "sapproject-c53af",
  storageBucket: "sapproject-c53af.firebasestorage.app",
  messagingSenderId: "606744512422",
  appId: "1:606744512422:web:24fb8200376c58e0a4f167",
  measurementId: "G-P83MM0RZJ6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
