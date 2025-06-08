import Intro from './Intro';
import Experience from './Experience';
import Contact from './Contact';
import Portfolio from './Portfolio';

const Layout = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-white min-h-screen flex-1 overflow-y-auto auto-rows-min'>
      <div className='col-span-1 md:col-span-2'>
        <Intro />
      </div>
      <div className='col-span-1 md:col-span-2'>
        <Portfolio />
      </div>
      <div className='col-span-1 md:col-span-2'>
        <Experience />
      </div>
      <div className='col-span-1 md:col-span-2'>
        <Contact />
      </div>
    </main>
  );
};

export default Layout;
