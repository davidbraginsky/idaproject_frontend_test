import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGkp4qBPaOCDl6-FMCz2LqKuFayevlEEE",
  authDomain: "idaproject-19650.firebaseapp.com",
  projectId: "idaproject-19650",
  storageBucket: "idaproject-19650.appspot.com",
  messagingSenderId: "1014754383925",
  appId: "1:1014754383925:web:8a9beccc3c6794137d797c",
};

initializeApp(firebaseConfig);

const DB = getFirestore();

export default DB;
