import React from 'react'
import Transition from 'react-transition-group/Transition'
import Fade from './Fade'

export default class Sample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      toggle: false,
    }
  }

  toggle() {
    console.log('toggle')

    this.setState({
      toggle: !this.state.toggle,
    })
  }

  render() {
    console.log('state.toggle', this.state.toggle)

    return (
      <div>
        <button onClick={this.toggle.bind(this)}>open</button>
        <Fade in={this.state.toggle} />
      </div>
    );
  }
}