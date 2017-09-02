import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import Sample from './components/Sample'

const render = () => {
  ReactDOM.render(
    <Sample />,
    document.getElementById('root')
  )
}

render()