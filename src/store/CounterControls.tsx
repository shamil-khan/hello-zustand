// App.jsx
import { useCounterStore } from './counterStore';

export const CounterControls = () => {
  // Never re-renders because 'increment' is a stable function
  const { increment, clear } = useCounterStore();
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={clear}>Clear</button>
    </>
  );
};
