import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function NavDropdown() {
  return (
    <nav className='absolute top-full left-0 w-full bg-Cosmic-Black border-t border-white/20 shadow-lg z-50 md:hidden'>
      <ul className='flex flex-col gap-4 py-4 text-center text-zinc-300'>
        <li key='/cv'>
          <a
            href='/CV.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition'
          >
            CV
          </a>
        </li>
        <li key='/blog'>
          <Link href='/blog' className='hover:text-white transition'>
            Blog
          </Link>
        </li>
      </ul>
      <ul className='flex justify-center gap-6 text-zinc-300 items-center my-4'>
        <li>
          <a
            href='https://www.linkedin.com/in/kai-constantine'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition flex items-center gap-2'
          >
            <FaLinkedin className='w-5 h-5 text-WhiteChalk' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/Kaialogen'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition flex items-center gap-2'
          >
            <FaGithub className='w-5 h-5 text-WhiteChalk' />
          </a>
        </li>
      </ul>
    </nav>
  );
}
