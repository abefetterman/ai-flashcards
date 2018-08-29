import { compose } from 'redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const firebaseConfig = {
  apiKey: "AIzaSyB4oid4fOB7Y_j_9fvNAcZcmKtqqpCvYFQ",
  authDomain: "ai-flashcards.firebaseapp.com",
  databaseURL: "https://ai-flashcards.firebaseio.com",
  projectId: "ai-flashcards",
  storageBucket: "ai-flashcards.appspot.com",
  messagingSenderId: "905558543003"
};

firebase.initializeApp(firebaseConfig)

// Initialize Firestore with timeshot settings
firebase.firestore().settings({ timestampsInSnapshots: true })

const withFirebase = compose(
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, rrfConfig)
);

export default withFirebase;
