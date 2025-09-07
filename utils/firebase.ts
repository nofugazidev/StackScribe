// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALvvdPrSxMhI6cexZGuwZyDPPfQ0rwRaw",
  authDomain: "nofugazidev.firebaseapp.com",
  projectId: "nofugazidev",
  storageBucket: "nofugazidev.firebasestorage.app",
  messagingSenderId: "917365246050",
  appId: "1:917365246050:web:b5c5d8b6a5de1e82c6693b",
  measurementId: "G-65HGJQFCGE"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
