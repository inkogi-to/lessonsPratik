import { useState, useRef, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervaId = useRef(null);

  useEffect(() => {
    intervaId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  const stop = () => {
    console.log(intervaId.current);
    clearInterval(intervaId.current);
    console.log(intervaId.current);
  };
  return (
    <div>
      <div>{time.toLocaleTimeString()}</div>
      <button type="button" onClick={stop}>
        Stop
      </button>
    </div>
  );
}
