import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyC1hn4g8lpvOzjAysCC10vURY-X84oi8rU',
  authDomain: 'karton-app.firebaseapp.com',
  databaseURL: 'https://karton-app.firebaseio.com',
  projectId: 'karton-app',
  storageBucket: 'karton-app.appspot.com',
  messagingSenderId: '206094690246'
}

class FireStore {
  constructor() {
    firebase.initializeApp(config)
    this.store = firebase.firestore
    this.auth = firebase.auth
  }

  get data() {
    return this.store().collection('users')
  }
}

export default new FireStore()
