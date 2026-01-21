// counterStore.ts
import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  clear: () => void;
}

export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
}));
