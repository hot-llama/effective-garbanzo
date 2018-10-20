import { Link } from '@reach/router';
import * as React from 'react';

import * as styles from './navigation.css';

import { FirebaseContext } from '../../providers/firebase';

interface IProps {
  path?: string;
  firebase: any;
}

export class NavigationConsumer extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  logout() {
    this.props.firebase
      .auth()
      .signOut()
      .catch((e: any) => console.error(e));
  }

  render() {
    return (
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/" onClick={() => this.logout()}>
          Log Out
        </Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}

export class Navigation extends React.Component<{}, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <FirebaseContext.Consumer>
        {fbContext => <NavigationConsumer firebase={fbContext} />}
      </FirebaseContext.Consumer>
    );
  }
}
