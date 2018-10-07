import { Link } from '@reach/router';
import * as React from 'react';

interface IProps {
  path?: string;
}

export class About extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>About page.</h1>
      </div>
    );
  }
}
