import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => (
  <section className='p-6 rounded-2xl bg-Cosmic-Black shadow-md h-full'>
    <h1 className='text-3xl font-bold text-WhiteChalk text-center'>Contact</h1>
    <hr className='my-4 border-t-2 border-WhiteChalk opacity-40' />
    <div className='mt-6 flex justify-center items-center'>
      <div className='flex items-center justify-between w-72'>
        <a
          href='https://www.linkedin.com/in/kai-constantine-834952197/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center text-zinc-300 hover:text-zinc-100'
        >
          <FaLinkedin className='w-12 h-12 text-WhiteChalk mt-4' />
          LinkedIn
        </a>
        <a
          href='https://github.com/Kaialogen'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center text-zinc-300 hover:text-zinc-100'
        >
          <FaGithub className='w-12 h-12 text-WhiteChalk mt-4' />
          GitHub
        </a>
        <a
          href='https://twitter.com/Kaialogen'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col items-center text-zinc-300 hover:text-zinc-100'
        >
          <FaSquareXTwitter className='w-12 h-12 text-WhiteChalk mt-4' />X
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
