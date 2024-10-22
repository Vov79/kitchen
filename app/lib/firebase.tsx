import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB3n_PKe2r4deOOZqS_R-lgGzMpny6idPc",
  authDomain: "kitchen-5a418.firebaseapp.com",
  projectId: "kitchen-5a418",
  storageBucket: "kitchen-5a418.appspot.com",
  messagingSenderId: "496337949110",
  appId: "1:496337949110:web:8f41f4b82ec49b7adef117"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);