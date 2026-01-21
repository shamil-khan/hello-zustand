import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { App } from '@/App';
import ContextApp from './CounterContextApp/ContextApp';
import StoreApp from './CounterStoreApp/StoreApp';
import UserManagementDashboard from './UserApp/UserManagementDashboard';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <UserManagementDashboard />
    <StoreApp />
    <ContextApp />
  </StrictMode>,
);
