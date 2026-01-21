// App.jsx
import { useCounterStore } from './counterStore';

export const CounterDisplay = () => {
  // Only re-renders when 'count' changes
  const { count } = useCounterStore();
  return <h1>Count: {count}</h1>;
};
