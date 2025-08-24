import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function MainLayout() {
  return (
    <div className='min-h-screen flex flex-col bg-Cosmic-Black'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
