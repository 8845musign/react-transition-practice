import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

const render = () => {
  ReactDOM.render(
    <div>
      hoge
    </div>,
    document.getElementById('root')
  )
}

render()