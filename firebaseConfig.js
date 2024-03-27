import { initializeApp } from 'firebase/app';
import { getAuth, getReactNativePersistence, initializeAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAFMh8lHWXn8kHQydJhlK8_iF07SaJuxtk",
  authDomain: "odpbni305.firebaseapp.com",
  projectId: "odpbni305",
  storageBucket: "odpbni305.appspot.com",
  messagingSenderId: "214153405654",
  appId: "1:214153405654:web:03612a14e94ad046175577",
  measurementId: "G-B3ZFK1LDP1"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export {app, auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged}