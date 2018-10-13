import { Router } from '@reach/router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { About } from './components/about/about';
import { Journal } from './components/journal/journal';
import { Login } from './components/login/login';
import { Navigation } from './components/navigation/navigation';

import { Firebase } from './providers/firebase';

import * as styles from './index.css';

class Index extends React.Component<{}, {}> {
  render() {
    return (
      <Firebase>
        <div className={styles.layout}>
          <Navigation />
          <div className={styles.container}>
            <Router>
              <Journal path="/" />
              <Login path="/login" />
              <About path="/about" />
            </Router>
          </div>
        </div>
      </Firebase>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
