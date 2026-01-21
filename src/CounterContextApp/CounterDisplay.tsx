// App.tsx
import { useCounter } from './CounterContext';

export const CounterDisplay = () => {
  const { count } = useCounter();
  return <h1>Count: {count}</h1>;
};
