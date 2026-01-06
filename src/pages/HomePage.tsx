import Intro from '../components/Intro';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Avatar from '../components/Avatar';
import TechStackSelection from '../components/Tech-stack-section';
import GithubSection from '../components/Github-Section';
import BlogPostsSection from '../components/Blog-Posts-Section';

export default function HomePage() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 auto-rows-min max-w-[800px] mx-auto'>
      <div className='col-span-1 md:col-span-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-6 grid-rows-1'>
          <div>
            <Intro />
          </div>
          <div className='justify-self-center'>
            <Avatar />
          </div>
        </div>
      </div>
      <div className='col-span-1 md:col-span-2'>
        <TechStackSelection />
      </div>
      <div className='col-span-1 md:col-span-2'>
        <Portfolio />
      </div>
      <div className='col-span-1 md:col-span-2'>
        <BlogPostsSection />
      </div>
      <div className='col-span-1 md:col-span-2'>
        <GithubSection />
      </div>
      <div className='col-span-1 md:col-span-2'>
        <Experience />
      </div>
      <div className='col-span-1 md:col-span-2'>
        <Contact />
      </div>
    </main>
  );
}
