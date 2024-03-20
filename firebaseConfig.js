import { initializeApp } from "firebase/app";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyANa4RecQvF-t_C9ZBlHDxsHTRjJjUP-9A",
  authDomain: "etacapp.firebaseapp.com",
  projectId: "etacapp",
  storageBucket: "etacapp.appspot.com",
  messagingSenderId: "73658630088",
  appId: "1:73658630088:web:76d8b426ca2ff397934afd",
  measurementId: "G-LDPDYSBRYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
