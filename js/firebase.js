// js/firebase.js
// Initialize Firebase (compat mode for simple usage)
const firebaseConfig = {
  apiKey: "AIzaSyC2xsjjP29TEVE7p3VnRM7g2SjyAjins4I",
  authDomain: "travel-destination-explore.firebaseapp.com",
  projectId: "travel-destination-explore",
  storageBucket: "travel-destination-explore.firebasestorage.app",
  messagingSenderId: "8049027933",
  appId: "1:8049027933:web:f5844d2f93a2dcbc1a56b4"
};

if (!window.firebase) {
  console.error("Firebase SDK not loaded. Make sure you included firebase-app and other SDK scripts.");
} else {
  firebase.initializeApp(firebaseConfig);
  // Expose shortcuts
  window.auth = firebase.auth();
  window.db = firebase.firestore();
  console.log("Firebase initialized.");
}