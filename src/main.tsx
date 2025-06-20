import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import PortfolioPage from './components/Portfolio/PortfolioPage.tsx';
import Blog from './pages/Blog.tsx';
import './Styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
