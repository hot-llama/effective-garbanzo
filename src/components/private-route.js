import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (false) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`)
    return null
  }

  return <Component {...rest} />
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired
}

export default PrivateRoute