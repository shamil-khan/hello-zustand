// App.tsx
import { CounterProvider, useCounter } from './CounterContext';
import { CounterControls } from './CounterControls';
import { CounterDisplay } from './CounterDisplay';

function AppContent() {
  const { count } = useCounter();

  return (
    <div>
      <h1>Count (Context App): {count}</h1>
      <CounterDisplay />
      <CounterControls />
    </div>
  );
}

export default function ContextApp() {
  return (
    <CounterProvider>
      <AppContent />
    </CounterProvider>
  );
}
