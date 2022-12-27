import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA6toZbiiR5osomm4acjjbRlrjQTTCSEqE",
    authDomain: "thedojosite-3e8cc.firebaseapp.com",
    projectId: "thedojosite-3e8cc",
    storageBucket: "thedojosite-3e8cc.appspot.com",
    messagingSenderId: "528553990277",
    appId: "1:528553990277:web:79bc4594037d71340bf1ec"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp = firebase.firestore.Timestamp

//export

export { projectFirestore, projectAuth, timestamp }