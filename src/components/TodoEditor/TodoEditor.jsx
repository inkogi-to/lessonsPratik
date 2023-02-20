import React, { Component } from 'react';

class TodoEditor extends Component {
  state = {
    message: '',
  };
  handelChange = e => {
    this.setState({
      message: e.currentTarget.value,
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state.message);
    this.setState({message: ''});
  }
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handelChange}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    );
  }
}
export default TodoEditor;
