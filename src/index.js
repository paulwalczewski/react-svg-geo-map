import React from 'react'
import './styles.css'
const Isvg = require('react-inlinesvg')

const GeoSvgMap = (props) => {
  return (
    <section className='geo-svg-wrapper'>
      <Isvg src='https://upload.wikimedia.org/wikipedia/commons/0/03/BlankMap-World6.svg' />
    </section>
  )
}

GeoSvgMap.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default GeoSvgMap
