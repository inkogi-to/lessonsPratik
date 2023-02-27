import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, ModalC } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.heandleKeyDown);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    window.removeEventListener('keydown', this.heandleKeyDown);
  }
  heandleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  heandelBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }
  render() {
    return createPortal(
      <Backdrop>
        <ModalC>{this.props.children}</ModalC>
      </Backdrop>,
      modalRoot
    );
  }
}

export default Modal;
