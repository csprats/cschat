import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { Messages } from './Messages.jsx';
import { Sesion } from './Sesion.jsx';
import { UserProvider } from './UserContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Messages />
      <App />
      <Sesion />
    </UserProvider>
  </StrictMode>
);