import React, { Component } from 'react';
import { DropdownB, DrobdownMenu } from './Dropdown.styled';

class Dropdown extends Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    return (
      <DropdownB className="Dropdown">
        <button type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>

        {this.state.visible && <DrobdownMenu>Випадающе меню</DrobdownMenu>}
      </DropdownB>
    );
  }
}

export default Dropdown;
