import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyCGHopG-VSuvnKVgH7qec3RxzkW6-JHNIA",
  authDomain: "facebook-messenger-clone-c9f7a.firebaseapp.com",
  projectId: "facebook-messenger-clone-c9f7a",
  storageBucket: "facebook-messenger-clone-c9f7a.appspot.com",
  messagingSenderId: "312513627943",
  appId: "1:312513627943:web:bb9ec602f3638f94f10b02",
  measurementId: "G-SSQ9FFDYCV"
});

const db = firebaseapp.firestore();
export default db;
