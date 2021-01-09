import firebase from "firebase";
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAuMethy41vYGUIav-A5drEjZGoVMNZupc",
    authDomain: "repetitor-9e688.firebaseapp.com",
    projectId: "repetitor-9e688",
    storageBucket: "repetitor-9e688.appspot.com",
    messagingSenderId: "75563929269",
    appId: "1:75563929269:web:0c33bfebf93159d0baf8fc",
    measurementId: "G-BRDBEY1CMG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
