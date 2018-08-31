import * as React from 'react';

const styles = require('./home.scss');

export class AppStart extends React.Component<{}, {}> {
  render() {
    return <h1 className={styles.test}>Here I am.</h1>;
  }
}
