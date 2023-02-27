import React, { Component } from 'react';

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  intervaId = null;

  componentDidMount() {
    this.intervaId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervaId);
  }
  render() {
    return (
        <div>{this.state.time}</div>
    )
  }
}
export default Clock;
