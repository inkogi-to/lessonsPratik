import { Component } from 'react';

class OldClock extends Component {
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
    this.stop();
  }
  stop = () => {
    clearInterval(this.intervaId);
  };
  
}
export default OldClock;
