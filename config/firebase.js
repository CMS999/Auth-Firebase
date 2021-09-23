import firebase from "firebase/app";
import firestore from "firebase/firestore";
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyBo9y3PmQJkuBZIFg7tk7GCiZS3pgJL7Tk",
    authDomain: "authfirebase-f5c22.firebaseapp.com",
    projectId: "authfirebase-f5c22",
    storageBucket: "authfirebase-f5c22.appspot.com",
    messagingSenderId: "1068333656524",
    appId: "1:1068333656524:web:e65550900adee9d5771569",
    measurementId: "G-JS2J4H1TMR"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {firebaseApp};
export default {
    googleLogar: async()=> {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    } 
}