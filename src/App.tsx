import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './MainLayout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='*' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
