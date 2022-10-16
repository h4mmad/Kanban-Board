import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js';
import {getFirestore, arrayRemove, updateDoc, doc,arrayUnion, getDoc, setDoc} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyD0iCm2xcAlQElNFC-b7hbcrxz5kPPj7FE",
    authDomain: "kanban-44ca1.firebaseapp.com",
    projectId: "kanban-44ca1",
    storageBucket: "kanban-44ca1.appspot.com",
    messagingSenderId: "860103350446",
    appId: "1:860103350446:web:584413d1a9c535a5f1f53f"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const docRef = doc(db, "users", "zzdWYA5outWWsK6Pd8TeXJbAKJV2");

