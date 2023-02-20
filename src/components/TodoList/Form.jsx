import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  reset = () => {
this.setState({name: '', tag: ''})
  }

  heandelChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
   this.props.onSubmit(this.state);
   this.reset()
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.heandelChange}
          />
        </label>
        <label>
          First Name
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.heandelChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}
export default Form;