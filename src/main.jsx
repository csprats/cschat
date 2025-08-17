import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { Messages } from './Messages.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Messages />
    <App />
  </StrictMode>
)