import { Link } from '@reach/router';
import * as React from 'react';

import * as styles from './journal.css';

interface IProps {
  path?: string;
}

export class Journal extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.journal}>
        <p className={styles.journalEntry}>
          Finished my artisanal Pork Chop class.
        </p>
      </div>
    );
  }
}
