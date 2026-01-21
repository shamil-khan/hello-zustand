import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { App } from '@/App';
import ContextApp from './context/ContextApp';
import StoreApp from './store/StoreApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <StoreApp />
    <ContextApp />
  </StrictMode>,
);
