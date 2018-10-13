import * as fb from 'firebase/app';
import * as firebaseui from 'firebaseui';
import * as React from 'react';

interface IState {
  auth: any;
  store: any;
  user?: any;
  initialized: boolean;
  ui: any; //ui needs to be a global singleton. See issue: https://github.com/firebase/firebaseui-web/issues/216
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
  initialized: false,
  ui: null
};

export const FirebaseContext = React.createContext(defaultContext);

export class Firebase extends React.Component<{}, IState> {
  state: IState;
  ui: any;

  constructor(props: any) {
    super(props);

    fb.initializeApp(config);
    this.ui = new firebaseui.auth.AuthUI(fb.auth());

    this.state = {
      auth: fb.auth,
      store: fb.firestore,
      user: null,
      initialized: false,
      ui: this.ui
    };
  }

  componentDidMount() {
    fb.auth().onAuthStateChanged(user => {
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
