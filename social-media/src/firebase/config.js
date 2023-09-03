import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCB_6HrT3GjXPjEd5oiYDM-8j_qFBeCQzc",
  authDomain: "social-media-c0f96.firebaseapp.com",
  projectId: "social-media-c0f96",
  storageBucket: "social-media-c0f96.appspot.com",
  messagingSenderId: "933662798336",
  appId: "1:933662798336:web:3035361842d6b820851ee5",
  measurementId: "G-8RGBXQZZJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
