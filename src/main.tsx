import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/My-DeskView"> {/* Add BrowserRouter with basename */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
