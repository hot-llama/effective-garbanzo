import { Router } from '@reach/router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

import { About } from './components/about/about';
import { Journal } from './components/journal/journal';
import { Navigation } from './components/navigation/navigation';
import { SleepCycle } from './features/sleep-cycle/sleep-cycle';
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
              {this.lazyLoginRoute()}
              <About path="/about" />
            </Router>
          </div>
          <SleepCycle />
        </div>
      </Firebase>
    );
  }

  lazyLoginRoute = () => {
    const LoginLoader = Loadable({
      loader() {
        return import('./components/login/login').then(comp => comp.Login);
      },
      loading: () => <div>Loading...</div>
    });

    return <LoginLoader path="/login" />;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
