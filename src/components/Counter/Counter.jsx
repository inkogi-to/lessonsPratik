import React, { Component } from 'react';
import { Controls } from './Controls';
import {Container,CounterValue} from './Counter.styled'

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <Container>
        <CounterValue className="CounterValue">{this.state.value}</CounterValue>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </Container>
    );
  }
}

export default Counter;
