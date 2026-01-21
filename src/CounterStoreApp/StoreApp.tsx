// App.jsx
import { CounterControls } from './CounterControls';
import { CounterDisplay } from './CounterDisplay';
import { useCounterStore } from './counterStore';

export default function AppStore() {
  const { count } = useCounterStore();
  return (
    <div>
      <h1>Count(Store App): {count}</h1>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
}
