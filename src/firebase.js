import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHq6VYLEk7pZz9hYtcog4qGb-NgzUPoeY",
    authDomain: "clon-c5197.firebaseapp.com",
    databaseURL: "https://clon-c5197.firebaseio.com",
    projectId: "clon-c5197",
    storageBucket: "clon-c5197.appspot.com",
    messagingSenderId: "708101269106",
    appId: "1:708101269106:web:b1ccefbc80e1809b4d04eb",
    measurementId: "G-8QZ3LVB448"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };