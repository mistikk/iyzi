import firebase from 'firebase';

import FIREBASE from '../constants/firebase';

require('firebase/firestore');

// Initialize Firebase
const config = {
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  databaseURL: FIREBASE.DATABASE_URL,
  projectId: FIREBASE.PROJECT_ID,
  storageBucket: FIREBASE.STORAGE_BUCKET,
  messagingSenderId: FIREBASE.MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

export default firebase;
