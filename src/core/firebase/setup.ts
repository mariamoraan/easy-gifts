// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn2sx9dWEJtQLihZhab_HFz801Ipc_EpY",
  authDomain: "easy-gifts-ddbc2.firebaseapp.com",
  projectId: "easy-gifts-ddbc2",
  storageBucket: "easy-gifts-ddbc2.firebasestorage.app",
  messagingSenderId: "760573927085",
  appId: "1:760573927085:web:5238a645bc7ffa6b447024",
  measurementId: "G-HMJ1T11G7R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
