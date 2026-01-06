import { useState } from 'react';
import { Link } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';

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
        <li key='/cv'>
          <a
            href='/CV.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition  text-[16px]'
          >
            CV
          </a>
        </li>
        <li key='/blog'>
          <Link to='/blog' className='hover:text-white transition text-[16px]'>
            Blog
          </Link>
        </li>
      </ul>

      <button onClick={toggleMenu} aria-label='Toggle Menu' className='md:hidden' type='button'>
        {isOpen ? (
          <FaTimes className='w-6 h-6 text-white cursor-pointer' />
        ) : (
          <FaBars className='w-6 h-6 text-white cursor-pointer' />
        )}
      </button>
    </>
  );
}
