import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7SYXRiJE1b3ig9wB2QGPe3fhuFphFtEo",
  authDomain: "imovil-bf856.firebaseapp.com",
  projectId: "imovil-bf856",
  storageBucket: "imovil-bf856.appspot.com",
  messagingSenderId: "776379191275",
  appId: "1:776379191275:web:36f09ffe38faad5d7c13ae",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
