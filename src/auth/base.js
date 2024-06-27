// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAb10uZunfZZ3CRzay8w-oNVDNXrz5xEs0',
  authDomain: 'mountains-20a11.firebaseapp.com',
  projectId: 'mountains-20a11',
  storageBucket: 'mountains-20a11.appspot.com',
  messagingSenderId: '305653144212',
  appId: '1:305653144212:web:82b9c77e35d6f4bec8f281',
  measurementId: 'G-0TW8YYD34K',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
