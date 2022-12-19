import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARKSgOS_rgja6xIwJ1JOi4WrpgSyjfNIE",
  authDomain: "pulseratest.firebaseapp.com",
  projectId: "pulseratest",
  storageBucket: "pulseratest.appspot.com",
  messagingSenderId: "604849957881",
  appId: "1:604849957881:web:9ff82cbad50ccb78f6ab28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;