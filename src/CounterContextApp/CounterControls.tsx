// App.tsx
import { useCounter } from './CounterContext';

export const CounterControls = () => {
  const { increment } = useCounter();
  const { clear } = useCounter();
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={clear}>Clear</button>
    </>
  );
};
