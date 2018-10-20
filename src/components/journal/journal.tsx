import { Link } from '@reach/router';
import * as React from 'react';

import * as styles from './journal.css';

import { FirebaseContext } from '../../providers/firebase';

interface IProps {
  path?: string;
  firebase?: any;
}

interface IState {
  value: string;
  list: any;
}

export class JournalConsumer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value: '',
      list: []
    };
  }

  componentDidMount() {
    this.getList();
  }

  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.firebase.store.collection('testCollection').add({
      value: this.state.value,
      user: this.props.firebase.auth().currentUser.uid
    });
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  }

  getList() {
    this.props.firebase.store
      .collection('testCollection')
      .onSnapshot((querySnapshot: any) => {
        const list: any[] = [];

        querySnapshot.forEach((doc: any) => {
          if (!!doc.data().value) {
            list.push(doc);
          }
        });

        this.setState({ list });
      });
  }

  render() {
    return (
      <div className={styles.journal}>
        <p className={styles.journalEntry}>
          Finished my artisanal Pork Chop class.
        </p>
        <form onSubmit={this.handleSubmit}>
          {this.state.list.map((doc: any) => (
            <div key={doc.id}>{JSON.stringify(doc.data().value)}</div>
          ))}
          <input onChange={this.handleInputChange} value={this.state.value} />
        </form>
      </div>
    );
  }
}

export class Journal extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <FirebaseContext.Consumer>
        {fbContext => <JournalConsumer firebase={fbContext} />}
      </FirebaseContext.Consumer>
    );
  }
}
