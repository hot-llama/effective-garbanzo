import * as React from 'react';

import * as styles from './sleep-cycle.css';

export class SleepCycle extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={styles.sleepCycleContainer}>
        <div>06:00</div>
        <div>22:15</div>
      </div>
    );
  }
}
