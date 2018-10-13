import { Link } from '@reach/router';
import * as React from 'react';

import { FirebaseContext } from '../../providers/firebase';

interface IProps {
  path?: string;
}

interface ILoginConsumerProps {
  firebase: any;
}

export class LoginConsumer extends React.Component<ILoginConsumerProps, {}> {
  componentDidMount() {
    if (this.props.firebase.initialized && !this.props.firebase.user) {
      this.mountFbLogin();
    }
  }

  componentWillUnMount() {
    this.props.firebase.ui.delete();
  }

  mountFbLogin() {
    const fb = this.props.firebase;

    this.props.firebase.ui.start('#firebase-login', {
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
        {fbContext => <LoginConsumer firebase={fbContext} />}
      </FirebaseContext.Consumer>
    );
  }
}
