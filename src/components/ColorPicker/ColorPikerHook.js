import { useState } from 'react';
import { Picker, SpanContainer, Container } from './ColorPicker.styled';

function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const { label } = options[activeOptionIdx];

  return (
    <Container className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Вибраний колір:{label}</p>
      <SpanContainer>
        {options.map(({ label, color }, index) => (
          <Picker
            key={label}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></Picker>
        ))}
      </SpanContainer>
    </Container>
  );
}

export default ColorPicker;
