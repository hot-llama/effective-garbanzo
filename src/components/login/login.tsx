import { Link } from '@reach/router';
import * as fb from 'firebase';
import * as firebaseui from 'firebaseui';
import * as React from 'react';

import { FirebaseContext } from '../../providers/firebase';

interface IProps {
  path?: string;
}

interface ILoginConsumerProps {
  firebase: any;
}

export class LoginConsumer extends React.Component<ILoginConsumerProps, {}> {
  ui: any;

  constructor(props: ILoginConsumerProps) {
    super(props);

    this.ui = new firebaseui.auth.AuthUI(this.props.firebase.auth());
  }

  componentDidUpdate() {
    const { firebase } = this.props;
    if (firebase.initialized && !firebase.user) {
      this.mountFbLogin();
    }
  }

  mountFbLogin() {
    this.ui.start('#firebase-login', {
      callbacks: {
        signInSuccessWithAuthResult: () => {
          fb.auth().setPersistence(fb.auth.Auth.Persistence.LOCAL);

          return false;
        }
      },
      signInFlow: 'popup',
      signInOptions: [
        fb.auth.EmailAuthProvider.PROVIDER_ID,
        fb.auth.GoogleAuthProvider.PROVIDER_ID
      ]
      // Other config options...
    });
  }

  render() {
    return (
      <>
        <Link to="/">Back</Link>
        <h1>Login page.</h1>
        <div id="firebase-login" />
      </>
    );
  }
}

export class Login extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <FirebaseContext.Consumer>
        {fb2 => <LoginConsumer firebase={fb2} />}
      </FirebaseContext.Consumer>
    );
  }
}
