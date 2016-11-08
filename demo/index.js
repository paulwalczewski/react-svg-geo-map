import React from 'react'
import ReactDOM from 'react-dom'
import GeoChart from '../src'
import '../style.css'

document.addEventListener('DOMContentLoaded', () => {
  let data = {
  }

  ReactDOM.render(
    <GeoChart data={data} />,
    document.querySelector('#react-app')
  )
})
