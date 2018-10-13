import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC1hn4g8lpvOzjAysCC10vURY-X84oi8rU',
  authDomain: 'karton-app.firebaseapp.com',
  databaseURL: 'https://karton-app.firebaseio.com',
  projectId: 'karton-app',
  storageBucket: 'karton-app.appspot.com',
  messagingSenderId: '206094690246'
};

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
