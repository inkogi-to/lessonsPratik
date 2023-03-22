import { useState, useEffect } from 'react';
import { Controls } from './Controls';
import { Container, CounterValue } from './Counter.styled';

export default function Counter(second) {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [totalClickCount, setTotalClickCount] = useState(0)

  const handlerCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1);
  };
  const handlerCounterBIncrement = () => {
    setCounterB(prevState => prevState - 1);
  };
  useEffect(() => {
    const totalClick = counterA + counterB;
    setTotalClickCount(totalClick);
  }, [counterA, counterB]);
  return (
    <Container>
      <CounterValue className="CounterValue">{totalClickCount}</CounterValue>
      <Controls
        onIncrement={handlerCounterAIncrement}
        onDecrement={handlerCounterBIncrement}
      />
    </Container>
  );
}
