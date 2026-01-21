// CounterContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

interface CounterContextType {
  count: number;
  increment: () => void;
  clear: () => void;
}

const CounterContext = createContext<CounterContextType | null>(null);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const clear = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, clear }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context)
    throw new Error('useCounter must be used within a CounterProvider');
  return context;
};
