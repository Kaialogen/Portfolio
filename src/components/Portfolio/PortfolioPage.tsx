import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import PortfolioDisplay from './PortfolioDisplay';
import ProjectNavigation from './ProjectNavigation';
import { projects } from './Projects';

const PortfolioPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-zinc-950 text-zinc-100'>
      {/* Navbar: responsive vertical (md+) or top bar (mobile) */}
      <Navbar />

      {/* Main Content */}
      <main className='flex-1 flex flex-col p-4 gap-4 overflow-y-auto'>
        <PortfolioDisplay currentIndex={currentIndex} />
        <ProjectNavigation total={projects.length} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </main>
    </div>
  );
};

export default PortfolioPage;
