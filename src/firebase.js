import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZapjc338FsvifEe3rBHdkMygCp3wnHgQ",
  authDomain: "twitter-clone-abb4f.firebaseapp.com",
  projectId: "twitter-clone-abb4f",
  storageBucket: "twitter-clone-abb4f.appspot.com",
  messagingSenderId: "487137518370",
  appId: "1:487137518370:web:40be2e0a97621bdf8fbb7b",
  measurementId: "G-S6NWBHR8EP",
});


const db = firebaseApp.firestore();

export default db;