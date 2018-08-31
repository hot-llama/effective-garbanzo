import React from 'react'
import { Link } from 'gatsby'
import { Router } from '@reach/router'

import Layout from '../components/layout'
import PrivateRoute from '../components/private-route'
import Details from '../components/details'

class App extends React.Component {
  render() {
    return (
      <Layout>
        <h1>GOOGLY BOOGLY</h1>

        <Router>
          {/* <PrivateRoute path="/app/profile" component={Home} /> */}
          <PrivateRoute path="/app/details" component={Details} />
          {/* <Login path="/app/login" /> */}
        </Router>
      </Layout>
    )
  }
}

export default App
