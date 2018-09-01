import * as React from 'react';
import { db } from '../services/firebase';

const styles = require('./home.scss');

export class Home extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return <h1 className={styles.test}>Here I am.</h1>;
  }

  getData = () => {
    db.collection('testCollection')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc: any) => {
          const data = doc.data();

          console.log(`${doc.id} => ${JSON.stringify(data)}`);
        });
      });
  }
}
