import Intro from './Intro';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

const Layout = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-3 gap-4 p-4 text-white min-h-screen flex-1 overflow-y-auto'>
      <div className='col-span-1 md:col-span-2 row-span-1'>
        <Intro />
      </div>
      <div className='col-span-1 row-span-1 md:row-span-2'>
        <Skills />
      </div>
      <div className='col-span-1 row-span-1'>
        <Experience />
      </div>
      <div className='col-span-1 row-span-1'>
        <Contact />
      </div>
    </main>
  );
};

export default Layout;
