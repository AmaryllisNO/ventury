// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

let app: FirebaseApp;

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyCAl9L9-BapGflYSvbIMNASgAI1AnFJoRU',
  authDomain: 'ventury-a26e0.firebaseapp.com',
  projectId: 'ventury-a26e0',
  storageBucket: 'ventury-a26e0.appspot.com',
  messagingSenderId: '92759387194',
  appId: '1:92759387194:web:fc7dbcbe4c4a26191f1903',
};

// Initialize Firebase

if (getApps().length) {
  app = getApp();
} else {
  app = initializeApp(firebaseConfig);
}

export default app;
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
