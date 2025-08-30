import { useState } from 'react';
import { Link } from 'react-router';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';

type NavLinksProps = {
  readonly onToggle: (isOpen: boolean) => void;
};

export default function NavLinks({ onToggle }: NavLinksProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  return (
    <>
      <ul className='hidden md:flex gap-6 text-zinc-300 items-center'>
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
        <li key='/cv'>
          <a href='/CV.pdf' target='_blank' rel='noopener noreferrer' className='hover:text-white transition'>
            CV
          </a>
        </li>
        <li key='/blog'>
          <Link to='/blog' className='hover:text-white transition'>
            Blog
          </Link>
        </li>
      </ul>

      <button onClick={toggleMenu} aria-label='Toggle Menu' className='md:hidden'>
        {isOpen ? <FaTimes className='w-6 h-6 text-white' /> : <FaBars className='w-6 h-6 text-white' />}
      </button>
    </>
  );
}
