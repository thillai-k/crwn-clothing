import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbHw_fn8OnmgRXNMMgoj5xl3RzwdfgBEI",
    authDomain: "crwn-db-60c67.firebaseapp.com",
    projectId: "crwn-db-60c67",
    storageBucket: "crwn-db-60c67.appspot.com",
    messagingSenderId: "554948643958",
    appId: "1:554948643958:web:53c9e03bec8799a6606357",
    measurementId: "G-STHP9TXRNJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;