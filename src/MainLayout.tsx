import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

export default function MainLayout() {
  return (
    <div className='min-h-screen flex flex-col bg-Cosmic-Black text-WhiteChalk'>
      <Navbar />
      <Outlet />
    </div>
  );
}
