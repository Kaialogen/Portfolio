import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './MainLayout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

// Blog Posts
import HowILearnedToCode from './pages/Blog Posts/how-i-learned-to-code';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='*' element={<HomePage />} />
          <Route path='/blog/how-i-learned-to-code' element={<HowILearnedToCode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
