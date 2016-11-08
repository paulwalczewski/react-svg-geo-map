/* eslint-env mocha */
import React from 'react'
import { expect } from 'firenpm/mochaccino'
import { shallow } from 'enzyme'
import GeoSvgMap from './index'

function setup () {
  const props = {
    data: {
    }
  }

  return shallow(<GeoSvgMap {...props} />)
}

describe('check structure of component', () => {
  it('renders component wrapper', () => {
    const wrapper = setup()
    expect(wrapper.find('.geo-svg-wrapper').length).toBe(1)
  })

  // it('renders renders svg', () => {
  //   const wrapper = setup()
  //   expect(wrapper.find('svg').length).toBe(1)
  // })
})
