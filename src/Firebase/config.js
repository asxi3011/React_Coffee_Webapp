

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBMOmBQ91pcP2bsMOFeJbEfLT9k_hf6NNQ",
    authDomain: "app-coffeehouse.firebaseapp.com",
    projectId: "app-coffeehouse",
    storageBucket: "app-coffeehouse.appspot.com",
    messagingSenderId: "441990919705",
    appId: "1:441990919705:web:28b418644eba9f2ca15c88",
    measurementId: "G-6KSEM8YCW2"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const authentication =getAuth(app);