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
  constructor(props: ILoginConsumerProps) {
    super(props);
  }

  componentDidMount() {
    const { firebase } = this.props;

    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebase-login', {
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
