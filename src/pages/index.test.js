import React from 'react'
import { shallow } from 'enzyme'

import Layout from '../components/layout'
import IndexPage from '.'

describe('Index Page', () => {
  it('renders a <Layout /> component', () => {
    const wrapper = shallow(<IndexPage />)

    expect(wrapper.find(Layout)).toMatchSnapshot()
  })
})
