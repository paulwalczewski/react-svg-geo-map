import React from 'react'

const Isvg = require('react-inlinesvg')

const GeoSvgMap = (props) => {
  return (
    <section className='geo-svg-wrapper'>
      <Isvg src='https://upload.wikimedia.org/wikipedia/commons/0/03/BlankMap-World6.svg' />
    </section>
  )
}

export default GeoSvgMap
