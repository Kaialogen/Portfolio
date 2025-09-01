import Intro from '../components/Intro';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Avatar from '../components/Avatar';
import { InfiniteCarousel } from '../components/InfiniteCarousel';
import Text from '../components/Text';

const Layout = () => {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 min-h-screen flex-1 overflow-y-auto auto-rows-min max-w-7xl mx-auto'>
      <div className='col-span-1 md:col-span-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-6 grid-rows-1'>
          <div className='justify-self-center'>
            <Avatar />
          </div>
          <div className='justify-self-center'>
            <Intro />
          </div>
        </div>
      </div>
      <div className='col-span-1 md:col-span-2'>
        <InfiniteCarousel />
      </div>
      <div className='col-span-1 md:col-span-2'>
        <Text />
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
