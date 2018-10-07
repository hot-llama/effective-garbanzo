import * as firebase from 'firebase';
import * as React from 'react';

interface IState {
  auth: any;
  store: any;
}

const config = {
  apiKey: 'AIzaSyC1hn4g8lpvOzjAysCC10vURY-X84oi8rU',
  authDomain: 'karton-app.firebaseapp.com',
  databaseURL: 'https://karton-app.firebaseio.com',
  projectId: 'karton-app',
  storageBucket: 'karton-app.appspot.com',
  messagingSenderId: '206094690246'
};

export const FirebaseContext = React.createContext({
  auth: null,
  store: null
});

export class Firebase extends React.Component<any, IState> {
  state: IState;

  constructor(props: any) {
    super(props);

    firebase.initializeApp(config);

    this.state = {
      auth: firebase.auth,
      store: firebase.firestore
    };
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}
