import * as fb from 'firebase';
import * as React from 'react';

interface IState {
  auth: any;
  store: any;
  user?: any;
  initialized: boolean;
}

const config = {
  apiKey: 'AIzaSyC1hn4g8lpvOzjAysCC10vURY-X84oi8rU',
  authDomain: 'karton-app.firebaseapp.com',
  databaseURL: 'https://karton-app.firebaseio.com',
  projectId: 'karton-app',
  storageBucket: 'karton-app.appspot.com',
  messagingSenderId: '206094690246'
};

const defaultContext: IState = {
  auth: null,
  store: null,
  user: null,
  initialized: false
};

export const FirebaseContext = React.createContext(defaultContext);

export class Firebase extends React.Component<any, IState> {
  state: IState;

  constructor(props: any) {
    super(props);

    fb.initializeApp(config);

    this.state = {
      auth: fb.auth,
      store: fb.firestore,
      user: null,
      initialized: false
    };
  }

  componentDidMount() {
    fb.auth().onAuthStateChanged(user => {
      console.log('USER', user);
      if (user) {
        this.setState({
          user,
          initialized: true
        });
      } else {
        this.setState({
          initialized: true
        });
      }
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}
