import React from 'react'
import { Link } from 'gatsby'
import { Router } from '@reach/router'

import Layout from '../components/layout'
import PrivateRoute from '../components/private-route'
import Details from '../components/details/details'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/app/details">Details</Link>
        <p>hello wtf</p>
        <Router>
          <PrivateRoute path="/app/details" component={Details} />
        </Router>
      </Layout>
    )
  }
}
