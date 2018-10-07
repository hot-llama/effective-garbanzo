import { Link } from '@reach/router';
import * as React from 'react';

import * as styles from './navigation.css';

interface IProps {
  path?: string;
}

export class Navigation extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}
