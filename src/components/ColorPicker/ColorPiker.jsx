import React, { Component } from 'react';
import { Picker, SpanContainer, Container } from './ColorPicker.styled';

// export const ColorPicker = ({ options }) => (
//   <Container className="ColorPicker">
//     <h2 className="ColorPicker__title">Color Picker</h2>
//     <SpanContainer>
//       {options.map(({ label, color }) => (
//         <Picker key={label} style={{ backgroundColor: color}}></Picker>
//       ))}
//     </SpanContainer>
//   </Container>
// );

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };
  makeOptionsClassName = index => {
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    return (
      <Container className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Вибраний колір:{label}</p>
        <SpanContainer>
          {this.props.options.map(({ label, color }, index) => (
            <Picker
              key={label}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></Picker>
          ))}
        </SpanContainer>
      </Container>
    );
  }
}
export default ColorPicker;
