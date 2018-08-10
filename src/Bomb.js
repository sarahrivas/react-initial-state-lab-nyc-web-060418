// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
    const interval = global.setInterval(() => {
      if (this.state.secondsLeft === 1) {
        global.clearInterval(interval);
      }
      this.setState({ secondsLeft: this.state.secondsLeft - 1 });
    }, 1000);

  }
  render () {
    return (
      this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'
    )
  }
}
