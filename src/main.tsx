import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './Styles.css';
import '@fontsource/inter';
import '@fontsource/instrument-serif';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
