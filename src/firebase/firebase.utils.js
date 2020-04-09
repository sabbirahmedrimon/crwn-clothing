import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyC0wHXJMgwEilcsMkkyM4H7aZkEQyRsgzk",
  authDomain: "crwn-db-26f54.firebaseapp.com",
  databaseURL: "https://crwn-db-26f54.firebaseio.com",
  projectId: "crwn-db-26f54",
  storageBucket: "crwn-db-26f54.appspot.com",
  messagingSenderId: "829447406333",
  appId: "1:829447406333:web:a3b731cc0ac9c3b6cbb494",
  measurementId: "G-GEBM1QG17V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =  firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

