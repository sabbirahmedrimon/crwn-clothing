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
export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt, 
        ...additionalData,
      })
    } catch (error){
      console.log('error creating user',error.message );
    }
  }
  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
